---
slug: "adding-eslint-prettier-to-nuxt-3-tutorial-lint-linter-linting"
title: "Adding ESLint and Prettier to Nuxt 3 ✨ (2024)"
subtitle: ""
series: "Nuxt 3"
description: "Getting started with ESLint and Prettier for automatic code linting and formatting."
localimage: "/images/nuxt-eslint-prettier-16-9.png"
cover_image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5vzpr7348dutp0fu8dxb.png"
publishedAt: "2024-04-16T22:20:00.000Z"
tags: "nuxt, nuxt3, eslint, prettier"
published: true
---

🎉 Update (April 2024): This tutorial now uses the `@nuxt/eslint` module.

## Introduction

In this post, we'll introduce ESLint and Prettier for automatic code style formatting in your Nuxt 3 project.

- **ESLint** is a linter that helps to enforce code quality through standards and patterns, such as flagging unused variables, disallowing globals, and requiring Error objects as Promise rejection reasons.

- **Prettier** is a formatter that helps in tidying up documents, such as maximum line length, mixed spaces and tabs, keyword spacing, and comma style.

By using these tools together, we can spend more of our development time on our actual code, instead of nitpicking a file's indenting, casing and bracket placement.

## Installation

### Packages

Install the following dependencies:

```sh
# ESLint
yarn add --dev @nuxt/eslint eslint typescript

# Prettier
yarn add --dev eslint-plugin-prettier eslint-config-prettier prettier
```

### Configuration

Add the `@nuxt/eslint` module to your Nuxt configuration:

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    "@nuxt/eslint",
    // ...
  ],
});
```

Run `yarn dev` to generate an initial ESLint configuration file (`eslint.config.mjs`), which will look like this:

```ts
// eslint.config.mjs

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt();
```

> If you already have a flat configuration file for ESLint that you would like to use, it can be passed as an argument to `withNuxt()`.
> You can explore more configuration options here: https://eslint.nuxt.com/packages/module

### Scripts

Add the following scripts to your `package.json` file:

```json
// package.json

{
  "scripts": {
    // ...
    "lint": "yarn lint:eslint && yarn lint:prettier",
    "lint:eslint": "eslint .",
    "lint:prettier": "prettier . --check",
    "lintfix": "eslint . --fix && prettier --write --list-different ."
    // ...
  }
}
```

## Usage

To check for errors, use `yarn lint`. This won't effect any changes, and may be useful in a code review or CI pipeline.

```bash
$ yarn lint

>>> yarn run v1.22.5
>>> $ yarn lint:eslint && yarn lint:prettier
>>> $ eslint .
>>> $ prettier . --check
>>> Checking formatting...
>>> [warn] app.vue
>>> [warn] Code style issues found in the above file. Run Prettier to fix.
>>> error Command failed with exit code 1.
>>> info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
>>> error Command failed with exit code 1.
>>> info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

To fix errors, use `yarn lintfix`. This will save any formatting changes.

```bash
$ yarn lintfix

>>> yarn run v1.22.5
>>> $ prettier --write --list-different . && eslint . --fix
>>> app.vue
>>> Done in 2.59s.
```

After using `yarn lintfix`, invoking `yarn lint` should be successful.

```bash
$ yarn lint

>>> yarn run v1.22.5
>>> $ yarn lint:eslint && yarn lint:prettier
>>> $ eslint .
>>> $ prettier . --check
>>> Checking formatting...
>>> All matched files use Prettier code style!
>>> Done in 3.07s.
```

All done!

You can hopefully now avoid the nitpicking arguments 😉

---

Hey, guys! Thank you for reading. I hope that you enjoyed this.

Keep up to date with me:

- Website: https://lloyd.cx/
- Twitter: https://twitter.com/lloydtao/
- GitHub: https://github.com/lloydtao/
- LinkedIn: https://www.linkedin.com/in/lloydtao/
