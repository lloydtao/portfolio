---
slug: "gridlink-creating-a-performant-frontend"
title: "Creating a performant frontend"
subtitle: ""
series: "Gridlink"
description: "Creating an SSR/SSG application with client-side hydration using Nuxt"
localimage: "/images/nuxt-tailwind.png"
publishedAt: "2022-12-05T09:00:00.000Z"
tags: ""
published: true
---

## Introduction

Gridlink leverages a combination of three techniques:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Client-side hydration

Using these techniques provides several benefits, including improved performance and search engine optimization.

### Server-side rendering

With server-side rendering, the server generates the fully-rendered HTML for a page and sends it to the client. This removes the need for the client to render the page on the fly.

This improves the initial load time of the page, as well as making it more accessible to search engines.

### Static site generation

Combining server-side rendering with static site generation allows Gridlink to pre-build the HTML for the entire application and serve it from a content delivery network (CDN).

A CDN is a distributed network of servers that can deliver content more efficiently to users, and can help with:

- Serving content from a location that is closer to the user's geographical location
- Offloading some of the workload from an application's origin server
- Mitigating the effects of overloading (traffic spikes, DDoS)

### Client-side hydration

Gridlink leverages client-side hydration to handle dynamic, interactive features on server-rendered pages.

After being served a rendered page, the client's JavaScript bundle takes over and turns the static HTML into dynamic DOM that reacts to client-side data changes. We can then perform asynchronous actions such as fetching from an external API.

In summary, this provides an interactive user experience, without sacrificing the initial load benefits of server-side rendering, with the ability to distribute the application as static files from a CDN.

## Nuxt

[ Using Nuxt to create an SSR/SSG application ]

## Tailwind

[ Using Tailwind for rapid mark-up development ]

## Application

### Layouts

[ Layouts ]

### Pages

[ Pages ]

### Components

[ Components ]

## Generation

[ Using `nuxt generate` to build application as static files ]
