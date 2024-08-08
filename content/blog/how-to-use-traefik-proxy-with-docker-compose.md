---
external: false
draft: false
title: "How to Use Traefik Proxy with Docker Compose?"
description: "An easy way to deploy web applications with Traefik Proxy and auto-generated SSL"
date: 2024-07-21
tags: ["docker", "traefik"]
---

Maybe you've never heard of `Traefik Proxy` because it usually uses `Nginx` or `Apache`. Why use `Traefik Proxy`? Using `Nginx` or `Apache` is better. Maybe that's what you think. There's nothing wrong with using `Nginx` or `Apache`, but if you have lots of applications or web services it will be messy. You may be confused about the maintenance of each service.

![Traefik Architecture](/static/blog/traefik-docker-compose/traefik-architecture.webp)

### What is the Traefik?

Traefik is an `open-source` Edge Router that makes publishing your services a fun and easy experience. It receives requests on behalf of your system and finds out which components are responsible for handling them.

What sets Traefik apart, besides its many features, is that it automatically discovers the right configuration for your services. The magic happens when Traefik inspects your infrastructure, where it finds relevant information and discovers which service serves which request.

Traefik is natively compliant with every major cluster technology, such as Kubernetes, Docker, Docker Swarm, AWS, and the list goes on; and can handle many at the same time. (It even works for legacy software running on bare metal.)

With Traefik, there is no need to maintain and synchronize a separate configuration file: everything happens automatically, in real time (no restarts, no connection interruptions). With Traefik, you spend time developing and deploying new features to your system, not on configuring and maintaining its working state.

> Developing Traefik, our main goal is to make it effortless to use, and we're sure you'll enjoy it.
>
> -- The Traefik Maintainer Team

Simply put Traefik is compatible with applications built on Docker Image. You can read docs about Traefik here:
[https://doc.traefik.io/traefik/](https://doc.traefik.io/traefik/)

## Setup Project Directory

So that later we can easily deploy applications or web services, I usually project the directory like this:

```sh
traefik-docker/
│   .env.example
│   .gitignore
│   docker-compose.yaml
│   Makefile
│   README.md
│
└───app/
│   │   docker-compose.yaml
│
└───config/
    │   acme.json
    │   dynamic.yaml
    │   traefik.yaml
```

You can check my repository about this blog, [https://github.com/masb0ymas/docker-traefik](https://github.com/masb0ymas/docker-traefik)

## Setup Docker for Traefik

If you have never installed Docker Engine on your vps, you can read this document
[https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)

First, we add a service for Traefik, here we use the Traefik version 2.10 image with restart rules if not stopped.

```yaml
version: "3.8"

services:
  traefik:
    image: traefik:v2.10
    container_name: traefik-proxy
    restart: unless-stopped
```

And don't forget to export port `80` for http and `443` for https.

```yaml
version: "3.8"

services:
  traefik:
    image: traefik:v2.10
    container_name: traefik-proxy
    restart: unless-stopped
    security_opt:
      - "no-new-privileges:true"
    networks:
      - proxy
    ports:
      - "80:80" # http
      - "443:443" # https
```

For docker volumes the config directory can be accessed.

```yaml
volumes:
  - "/etc/localtime:/etc/localtime:ro"
  - "/var/run/docker.sock:/var/run/docker.sock:ro"
  - "./config/traefik.yml:/etc/traefik/traefik.yml:ro"
  - "./config/acme.json:/acme.json"
  - "./config:/config"
```

Configure Traefik with labeling, `traefik.enable=true` and `loadbalancer.server.port` can access your Traefik dashboard in the browser and don't forget to setup your domain to be able to access the Traefik dashboard. Example of the domain `traefik.yourdomain.com`.

```yaml
labels:
  - traefik.enable=true
  - traefik.docker.network=proxy
  # Proxy
  - traefik.http.routers.traefik-ui.entrypoints=websecure
  - traefik.http.routers.traefik-ui.rule=Host(`${TRAEFIK_URL}`)
  - traefik.http.routers.traefik-ui.service=api@internal
  - traefik.http.routers.traefik-ui.middlewares=user-auth@file
  - traefik.http.services.traefik-ui.loadbalancer.server.port=8080
```

For full setup of Traefik services like this:

```yaml
version: "3.8"

services:
  traefik:
    image: traefik:v2.10
    container_name: traefik-proxy
    restart: unless-stopped
    security_opt:
      - "no-new-privileges:true"
    networks:
      - proxy
    ports:
      - "80:80" # http
      - "443:443" # https
    volumes:
      - "/etc/localtime:/etc/localtime:ro"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./config/traefik.yml:/etc/traefik/traefik.yml:ro"
      - "./config/acme.json:/acme.json"
      - "./config:/config"
    labels:
      - traefik.enable=true
      - traefik.docker.network=proxy
      # Proxy
      - traefik.http.routers.traefik-ui.entrypoints=websecure
      - traefik.http.routers.traefik-ui.rule=Host(`${TRAEFIK_URL}`)
      - traefik.http.routers.traefik-ui.service=api@internal
      - traefik.http.routers.traefik-ui.middlewares=user-auth@file
      - traefik.http.services.traefik-ui.loadbalancer.server.port=8080
```

Examples of using services without exporting ports to the internet, aka internal/private networks only, like this:

```yaml
version: '3.8'

services:
  ...
  postgres:
    image: postgres:15.3
    container_name: traefik-postgres
    restart: always
    environment:
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    ports:
      - "5432:5432"
    networks:
      - proxy
    volumes:
      - ./storage/postgres-data:/var/lib/postgresql/data
    labels:
      - traefik.enable=false
      - traefik.docker.network=proxy
```

## Additional Setup for Config Directory

How to generate SSL with Traefik? You can write this code for that.

```yaml
# config/dynamic.yaml

http:
  middlewares:
    secureHeaders:
      headers:
        sslRedirect: true
        forceSTSHeader: true
        stsIncludeSubdomains: true
        stsPreload: true
        stsSeconds: 31536000
    user-auth:
      basicAuth:
        users:
          - "admin:$2y$10$lIuP6J4DLpFzPhYrFgD3WOgFDVAARu/WLmCLdQPAStKVKAZqBm8.W"

tls:
  options:
    default:
      cipherSuites:
        - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305
        - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305
      minVersion: VersionTLS12
```

You can set a password with [htpasswd-generator](https://hostingcanada.org/htpasswd-generator/) or you can generate a password from the command line.

```sh
htpasswd -nb -B your_username your_password
```

For complete commands about htpasswd you can read this document [https://httpd.apache.org/docs/2.4/programs/htpasswd.html](https://httpd.apache.org/docs/2.4/programs/htpasswd.html).


#### For Global Setup Traefik

Once the configuration is complete, your web application or service redirects from `http` to `https` and generates SSL with `letsencrypt`. And you should replace your email certificate for notifications when your SSL has expired.

```yaml
# config/traefik.yaml

global:
  sendAnonymousUsage: false
  
api:
  dashboard: true

entryPoints:
  web:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: websecure

  websecure:
    address: ":443"
    http:
      middlewares:
        - secureHeaders@file
      tls:
        certResolver: letsencrypt

providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
    exposedByDefault: false
  file:
    filename: /config/dynamic.yml

certificatesResolvers:
  letsencrypt:
    acme:
      email: your_company@email.com # change this
      storage: acme.json
      keyType: EC384
      httpChallenge:
        entryPoint: web
```

## Set environment variables

You can duplicate .env.example to .env

```yaml
BASE_URL=yourdomain.com

# base app
TRAEFIK_URL=traefik.${BASE_URL}

# secret app
DB_PASSWORD=your_secret_db_password
```

## Setup Makefile for easily run command

If you have never installed a makefile on your vps, you can run this command for Ubuntu or Debian OS.

```sh
sudo apt-get install build-essential

sudo apt-get update

sudo apt-get -y install make
```

First, we need to create a proxy network for Docker.

```yaml
.PHONY: network.proxy
network.proxy:
	docker network create proxy
```

Next we give permission to acme.json so that SSL can be written to the json file.

```yaml
.PHONY: acme.permission
acme.permission:
	sudo chmod 600 ./config/acme.json
```

And finally we prepare the command to run the docker-compose file.

```yaml
DOCKER_COMPOSE_UP = docker-compose.yml up -d --build
DOCKER_COMPOSE_DOWN = docker-compose.yml down

# Run Docker base
.PHONY: docker.up
docker.up:
	docker compose -f ${DOCKER_COMPOSE_UP}

.PHONY: docker.down
docker.down:
	docker compose -f ${DOCKER_COMPOSE_DOWN}
```

For the complete Makefile script like this:

```yaml
DOCKER_COMPOSE_UP = docker-compose.yml up -d --build
DOCKER_COMPOSE_DOWN = docker-compose.yml down

.PHONY: network.proxy
network.proxy:
	docker network create proxy

.PHONY: acme.permission
acme.permission:
	sudo chmod 600 ./config/acme.json

# Run Docker base
.PHONY: docker.up
docker.up:
	docker compose -f ${DOCKER_COMPOSE_UP}

.PHONY: docker.down
docker.down:
	docker compose -f ${DOCKER_COMPOSE_DOWN}
```

If you want to check out my repository of this blog, [https://github.com/masb0ymas/docker-traefik](https://github.com/masb0ymas/docker-traefik)

## Conclusion

With Traefik we can manage applications or web services easily. And you have plenty of time to learn other technologies or complete any assignments. Honestly, when I use Traefik it helps me to deploy applications or web services easily.

Many thanks to the Traefik team

## Source

- [https://doc.traefik.io/traefik/](https://doc.traefik.io/traefik/)
