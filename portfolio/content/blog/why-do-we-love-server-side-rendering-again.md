---
slug: 'why-do-we-love-server-side-rendering-again'
title: 'Why do we love server-side rendering again? 🤯'
subtitle: ''
series: ''
description: 'In order to understand the current trends, let’s have a look at the history of rendering on the web.'
localimage: '/images/server-side-rendering.png'
publishedAt: '2022-12-28T14:00:00.000Z'
tags: 'vue, react, nextjs, nuxt'
published: true
---

Why is everybody talking about server-side rendering again?

In order to understand the current trends, let’s have a look at the history of rendering on the web.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/05gnnv287aesdv1m6klb.png)

## History of web rendering

### 2000 - 2012

From 2000 to 2012, if you were interacting with a feature-rich web page, it was almost certainly dynamically rendered by a backend web server. The page would then be served to the client as a static HTML file.

Backend market share was dominated by PHP (1995) and Ruby (1996), with other contenders such as [ASP.NET](http://asp.net/) (2002) and Spring (2003) joining the scene over the years.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xaoin5putmp1mzr3t2k.png)

### 2012 - 2020

The following decade saw the prominent rise of the **single-page application** (SPA).

This method involves rendering HTML in the user's browser, aiming to provide a desktop-like experience. Popular SPA frameworks include AngularJS (2010), React (2013), Vue.js (2014) and Angular 2+ (2016).

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jtn9p9z5ntrd3bciy9e3.png)

Features such as JavaScript-based routing could control and maintain state across pages, though it had the downside of long initial load times and poor SEO. Performance issues were also prevalent due to the heavy nature of SPAs, especially on lighter clients such as mobile phones.

Even with the trade-offs, the SPA was beloved and adopted by stakeholders and developers alike, and marked a historic switch to **client-side rendering** (CSR).

This effectively popularised the term “server-side rendering”, which had never seen mainstream usage as there was no need to differentiate it from CSR.

## The return of SSR

These developments in web rendering posed a key question:

> Can we utilise the fast initial load times of SSR while keeping the interactivity and dynamicity of SPAs, all while keeping the application lightweight?

### Client-side hydration

The current best practise is to serve a **pre-rendered** page to the client, and then add application state and interactivity through a process called **hydration**.

Since the page is initially rendered by the server, it benefits from a quick load time, and takes rendering load off of the client. In the hydration process, a JavaScript bundle will attach event listeners to the DOM and make it fully interactive. This bundle is comparatively small compared to an SPA, which further keeps the app light and performant.

React and Vue each have an SSR counterpart, known as **Next.js** (2016) and **Nuxt.js** (2016) respectively. The popularity of these tools began to rise in 2020.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2tsq3w33jiep22mnhxzv.png)

### Static site generation

If we restrict all dynamicity to hydrated components, we can take SSR a step further and pre-render the entire application. This is known as static site generation (SSG), and often used in [JAMStack](https://jamstack.org/) applications.

Advanced SSG tools may even collect and transform data as they build the application (e.g. Markdown, CSV, JSON). This makes it useful for content that changes infrequently, such as blogs and documentation, as further API calls do not need to be made by the client.

All-in-all, this removes the need for a web server. The files can be shipped to any static hosting provider (e.g. Amazon S3, GitHub Pages) and served through a CDN to benefit from even lower latency and load times.

## The horseshoe

In summary, web rendering has jumped from fully server-side (~1995 to 2010) to fully client-side rendered (~2010 to 2016), and then settled somewhere around mainly server-side rendered with client-side rendering for interactivity (~2016 onwards).

So, while it has not necessarily _fully_ horseshoed back to server-side rendering, we’ve definitely taken a tremendous leap in each direction.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xfnj873gaed3repe7bz5.png)

Which other technologies do you think could make a comeback? 😉

---

Hey, guys! Thank you for reading. I hope that you enjoyed this.

Keep up to date with me:

- Website: https://lloyd.cx/
- Twitter: https://twitter.com/lloydtao/
- GitHub: https://github.com/lloydtao/
- LinkedIn: https://www.linkedin.com/in/lloydtao/
