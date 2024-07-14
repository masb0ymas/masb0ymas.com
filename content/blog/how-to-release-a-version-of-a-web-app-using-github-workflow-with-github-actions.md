---
external: false
draft: false
title: "How to release a version of a web app using GitHub Workflow with GitHub Actions"
description: "You can release a version of a web app using GitHub Workflow with GitHub Actions more easily"
date: 2024-07-14
---

Maybe you ask me, why do I use a release version for a web application or library?
Why not build on a local server or device?

If I build a web application on the server and then the base code encounters an error, how do I revert to the previous code? maybe you can reset git commit with `git reset --hard xxxx`.

Will you do it every time or every mistake? it's a bad idea to manage your web applications. It's a waste of time for me, I think the best practice for this problem is the release version, I can use the latest version or the oldest version. 

You can see the version tag of this repository.

![Github-Tags](/static/blog/github-actions/github-tags.webp)

[GitHub Workflows](https://docs.github.com/en/actions/using-workflows) are typically used to Test a `library` or `project` before sending a `Pull Request` for a Feature or Issue of your code to collaborate with others developers.

For more information about GitHub Workflow you can read the official docs is here:
[https://docs.github.com/en/actions/using-workflows](https://docs.github.com/en/actions/using-workflows)

In the case I using `NodeJs` for release a version of a web app using GitHub Workflow. For step like this:

- Setup GitHub Secret Actions
- Using [`standard-version`](https://www.npmjs.com/package/standard-version) library
- Prepare a Dockerfile to create a Docker Image
- Create a GitHub Workflow

## Setup GitHub Secret Actions

Select your project repository, then the `Settings` tab, and look below in the `Security` `Secrets and Variables` section, like this:
![Actions-Secret](/static/blog/github-actions/actions-secret-variable.webp)

And then you can add new secret with just a click `New Repository Secret`

You can customize Docker credentials with 2 variables like, `DOCKERHUB_USERNAME` and `DOCKERHUB_PASSWORD`
![Add-Secret](/static/blog/github-actions/add-secret.webp)

Once the setup is complete it looks like this:
![Add-Secret](/static/blog/github-actions/list-actions-secret.webp)

## Using standard-version library

You can install this library for release with git tags.

```sh
yarn add -D standard-version
```

Then you can update `package.json` script, and add release command.

```json
{
  ...
  scripts: {
    ...
    "postrelease": "git push --follow-tags origin main",
    "release": "standard-version",
    "release:pre": "npm run release -- --prerelease",
    "release:patch": "npm run release -- --release-as patch",
    "release:minor": "npm run release -- --release-as minor",
    "release:major": "npm run release -- --release-as major"
  }
}
```

So when you run the `yarn release` command after standard-version has done app version tagging, it continues with the push code because of the `postrelease` command.

## Prepare a Dockerfile to create a Docker Image

In this case, I used `NextJs` for the configuration of the Dockerfile and then created a Docker Image.
You can customize `next.config.mjs` like this:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  output: "standalone",
};

export default nextConfig;
```

The most important thing in `next.config.mjs` is the `output: "standalone"` which makes the docker image size lower.
Now you can using my Dockerfile config.

```dockerfile
FROM node:18-alpine AS base
LABEL author="author_name"
LABEL name="your_application_name"

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# RUN cp .env.docker-production .env

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# If using npm comment out above and use below instead
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Here there are 3 layers, `deps`, `builder` and `runner`.

For `deps` only install a dependency for the `builder` needed.

For `builder` only build a project to production mode.

For `runner` he runs the project with docker image runtime.

## Create a GitHub Workflow

Before you run GitHub Workflow, make sure you have created a repository in docker hub.

![Repo-Docker-Hub](/static/blog/github-actions/create-repo-docker-hub.webp)

First, define a running workflow based on its branches or tags. If you want to trigger a workflow with a branch it can be like this:

```yaml
---
name: Build and Push Image to Docker Hub
on:
  push:
    branches:
      - main
      - "releases/**"
```

But I usually trigger when push tags.

```yaml
---
name: Build and Push Image to Docker Hub
on:
  push:
    tags:
      - "*"
```

Then determine the OS used and the environment variable.

```yaml
name: Build and Push Image to Docker Hub
on:
  push:
    tags:
      - "*"

jobs:
  build-push-release:
    name: Build and Push to Docker Hub ( Release )
    runs-on: ubuntu-latest # using ubuntu latest for running workflow
    env:
      IMAGE_NAME: your_docker_hub_repository # change this
      PROJECT_ID: your_docker_hub_account # change this
```

Next step get tagging from GitHub tags.

```yaml
name: Build and Push Image to Docker Hub
on:
  push:
    tags:
      - "*"

jobs:
  build-push-release:
    ...
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Github Tag Release Version
      id: latestTag
      run: |-
        echo "Tag name from GITHUB_REF_NAME: $GITHUB_REF_NAME"
        echo "RELEASE_VERSION=release-${{ github.ref_name }}" >> $GITHUB_ENV
```

And then login to docker hub with `docker/login-action@v3` and create a docker image. Secrets obtained from Secrets and Variables can be set for the first time.

```yaml
jobs:
  build-push-release:
    ...
    - name: login to docker registry
      uses: docker/login-action@v3
      with:
        username: ${{secrets.DOCKERHUB_USERNAME}}
        password: ${{secrets.DOCKERHUB_PASSWORD}}

    - name: Build Docker Image
      run: |-
        docker build -t $IMAGE_NAME:latest .
```

Once the build a Docker Image is complete. It's time for us to tag the docker image and push it to docker hub.

```yaml
jobs:
  build-push-release:
    ...
    - name: Push Docker Image to Hub Docker
        run: |-
          docker tag $IMAGE_NAME:latest ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:latest
          docker tag $IMAGE_NAME:latest ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:release
          docker tag $IMAGE_NAME:latest ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:${{ env.RELEASE_VERSION }}
          docker push ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:latest
          docker push ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:release
          docker push ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:${{ env.RELEASE_VERSION }}
```

Now your docker image has done and you can check on `hub.docker.com`.

Optional, if you want to send a notification after step above is complete, you can add step for notification like this:

```yaml
jobs:
  build-push-release:
    ...
    - name: Call Webhook
      uses: joelwmale/webhook-action@2.3.2
      env:
        IMAGE_REGISTRY: Docker Hub
        IMAGE_REPOSITORY: hub.docker.com/${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}
        IMAGE_TAG: ${{ env.RELEASE_VERSION }}
      with:
        url: https://your_domain.com/notification
        body: '{"push_data":{"tag":"${{ env.IMAGE_TAG }}"},"repository":{"name":"${{ env.IMAGE_REPOSITORY }}"}}'
```

For a complete GitHub Workflow script like this:

```yaml
---
name: Build and Push Image to Docker Hub
on:
  push:
    tags:
      - "*"

jobs:
  build-push-release:
    name: Build and Push to Docker Hub ( Release )
    runs-on: ubuntu-latest
    env:
      IMAGE_NAME: your_docker_hub_repository # change this
      PROJECT_ID: your_docker_hub_account # change this
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Github Tag Release Version
        id: latestTag
        run: |-
          echo "Tag name from GITHUB_REF_NAME: $GITHUB_REF_NAME"
          echo "RELEASE_VERSION=release-${{ github.ref_name }}" >> $GITHUB_ENV

      - name: login to docker registry
        uses: docker/login-action@v3
        with:
          username: ${{secrets.DOCKERHUB_USERNAME}}
          password: ${{secrets.DOCKERHUB_PASSWORD}}

      - name: Build Docker Image
        run: |-
          docker build -t $IMAGE_NAME:latest .

      - name: Push Docker Image to Docker Hub
        run: |-
          docker tag $IMAGE_NAME:latest ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:latest
          docker tag $IMAGE_NAME:latest ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:release
          docker tag $IMAGE_NAME:latest ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:${{ env.RELEASE_VERSION }}
          docker push ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:latest
          docker push ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:release
          docker push ${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}:${{ env.RELEASE_VERSION }}

      - name: Call Webhook
        uses: joelwmale/webhook-action@2.3.2
        env:
          IMAGE_REGISTRY: Docker Hub
          IMAGE_REPOSITORY: hub.docker.com/${{ env.PROJECT_ID }}/${{ env.IMAGE_NAME }}
          IMAGE_TAG: ${{ env.RELEASE_VERSION }}
        with:
          url: https://your_domain.com/notification
          body: '{"push_data":{"tag":"${{ env.IMAGE_TAG }}"},"repository":{"name":"${{ env.IMAGE_REPOSITORY }}"}}'
```

## Conclusion

With the release version I can use the latest or oldest version of my web application. Then with GitHub Actions, I easily create and push docker images to the Registry, can also use AWS Container Registry, GCP Artifact Registry, and Docker Hub.