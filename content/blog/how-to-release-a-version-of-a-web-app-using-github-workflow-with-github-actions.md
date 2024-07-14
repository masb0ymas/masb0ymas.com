---
external: false
draft: false
title: "How to release a version of a web app using GitHub Workflow with GitHub Actions"
description: "You can release a version of a web app using GitHub Workflow with GitHub Actions more easily"
date: 2024-07-14
---

[GitHub Workflows](https://docs.github.com/en/actions/using-workflows) are typically used to Test a `library` or `project` before sending a `Pull Request` for a Feature or Issue of your code to collaborate with others developers.

For more information about GitHub Workflow you can read the official docs is here:
[https://docs.github.com/en/actions/using-workflows](https://docs.github.com/en/actions/using-workflows)

In the case I using `NodeJs` for release a version of a web app using GitHub Workflow. For step like this:

- Setup GitHub Secret Actions
- Using [`standard-version: "^9.5.0"`](https://www.npmjs.com/package/standard-version) library
- Prepare a Dockerfile to create a Docker Image
- Create a GitHub Workflow
- Notification your success build to Telegram Channel

## Setup Github Secret Actions

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

And then you must add command for release a version with tags

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