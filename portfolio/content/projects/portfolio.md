---
slug: 'portfolio'
title: 'Portfolio'
subtitle: ''
series: 'Personal'
description: 'Personal portfolio built with Nuxt, Tailwind and GitHub Pages'
localimage: '/images/portfolio.png'
publishedAt: '2022-07-30T09:00:00.000Z'
tags: ''
published: true
---

## Introduction

My personal portfolio is a collection of my work, wrapped up in a snappy, responsive Nuxt application.

You can view the source code here:
https://github.com/lloydtao/portfolio

## Nuxt

Nuxt is a framework for building Vue applications, and includes features such as file-system routing and static site generation.

It leverages server-side rendering, where the server generates fully-rendered HTML for a page and sends it to the client. This removes the need for the client to render the page on the fly.

Combining server-side rendering with static site generation allows me to pre-build the HTML for the entire application and serve it from GitHub Pages.

## Tailwind CSS

Tailwind is a utility-first CSS framework packed with single-purpose classes.

When paired with component-driven development, it lends itself to being a powerful and rapid way of writing mark-up.

```html
<div
  class="hidden flex-1 items-center justify-center space-x-5 sm:flex md:space-x-8"
>
  <a
    href="/projects/"
    class="font-semibold text-gray-50 duration-100 hover:text-gray-400"
  >
    Projects
  </a>
  <a
    href="/leetcode/"
    class="font-semibold text-gray-50 duration-100 hover:text-gray-400"
  >
    Leetcode
  </a>
  <a
    href="/contact/"
    class="font-semibold text-gray-50 duration-100 hover:text-gray-400"
  >
    Contact
  </a>
</div>
```

## Blog

The Nuxt Content module provides a file-based headless CMS for Nuxt applications.

This is useful during static site generation, as pages and routes can be rendered during `nuxt generate`.

It reads Markdown files from the `content/` directory and exposes them as an API to query and display them:

```js
async asyncData({ $content }) {
  const hackathons = await $content('projects')
    .only([
      'slug',
      'title',
      'subtitle',
      'description',
      'series',
      'localimage',
      'publishedAt',
      'published',
    ])
    .where({ series: 'Hackathons' })
    .sortBy('publishedAt', 'desc')
    .fetch()
  return {
    hackathons,
  }
}
```

## GitHub Pages

GitHub Pages is a free-to-use service for public repositories. It serves static files (HTML, CSS, and JavaScript) straight from a specific branch in a repository.

In this case, files are served from the `gh-pages/` branch, which contains the outputs of `nuxt generate`.

### Domain

By default, the site is hosted at [lloydtao.github.io/portfolio](https://lloydtao.github.io/portfolio).

I'm able use the [lloyd.cx](https://lloyd.cx) domain instead by setting up these DNS records to the IP addresses for GitHub Pages:

| Type | Host | Value           |
| ---- | ---- | --------------- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

## CI/CD

Even as a solo contributor, it's useful to follow a branch-based pull request flow. By doing so, you're able to:

- Lint and test the site before merging into `main/`
- Automatically deploy changes pushed to `main/` to GitHub Pages

### Continuous integration

The CI pipeline lints and tests the project. If these tasks complete successfully, then the branch can be merged.

```yaml
name: portfolio ci

on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened

defaults:
  run:
    shell: bash
    working-directory: portfolio/

jobs:
  ci:
    name: Build and test portfolio
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os:
          - ubuntu-latest
        node-version:
          - 16.16.0
        package-manager:
          - yarn
        lockfile:
          - portfolio/yarn.lock

    steps:
      - name: Check out repository
        uses: actions/checkout@v3.0.2

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3.4.1
        with:
          node-version: ${{ matrix.node-version }}
          cache: ${{ matrix.package-manager }}
          cache-dependency-path: ${{ matrix.lockfile }}

      - name: Install npm dependencies
        run: yarn

      - name: Lint project
        run: yarn lint

      - name: Test project
        run: yarn test
```

### Continuous deployment

The CD pipeline is structured similarly, and runs on `main/` after a PR is merged. It builds the static files with `yarn generate` and `yarn storybook build`.

These files are deployed to GitHub Pages using `github-pages-deploy-action`, which copies the contents of the outputted `dist/` directory to the `gh-pages/` branch.

```yaml
name: portfolio cd

on:
  push:
    branches:
      - main

    ...

    steps:
      - name: Check out repository
        uses: actions/checkout@v3.0.2

      ...

      - name: Generate project
        run: yarn generate

      - name: Export storybook
        run: yarn storybook build --output-dir "dist/_storybook"

      - name: Deploy project to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4.4.0
        with:
          folder: portfolio/dist
```
