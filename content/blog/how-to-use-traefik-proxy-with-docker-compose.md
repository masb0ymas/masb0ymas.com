---
external: false
draft: false
title: "How to Use Traefik Proxy with Docker Compose?"
description: "An easy way to deploy web applications with Traefik Proxy and auto-generated SSL"
date: 2024-07-21
---

Maybe you've never heard of `Traefik Proxy` because it usually uses `Nginx` or `Apache`. Why use `Traefik Proxy`? Using `Nginx` or `Apache` is better. Maybe that's what you think. There's nothing wrong with using `Nginx` or `Apache`, but if you have lots of applications or web services it will be messy. You may be confused about the maintenance of each service.

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

## Source

- [https://doc.traefik.io/traefik/](https://doc.traefik.io/traefik/)