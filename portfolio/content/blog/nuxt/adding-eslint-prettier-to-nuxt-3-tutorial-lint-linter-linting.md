---
slug: 'adding-eslint-prettier-to-nuxt-3-tutorial-lint-linter-linting'
title: 'Adding ESLint and Prettier to Nuxt 3 ✨ (2023)'
subtitle: ''
series: 'Nuxt 3'
description: 'Getting started with ESLint and Prettier for automatic code style formatting.'
localimage: '/images/nuxt-eslint-prettier-16-9.png'
publishedAt: '2023-01-01T09:00:00.000Z'
tags: 'nuxt, nuxt3, tailwindcss'
published: true
---

## Introduction

In this post, we'll introduce ESLint and Prettier for automatic code style formatting in your Nuxt 3 project.

## Linting

There are several benefits to using a linter, including:

- **Consistency:** Automatically enforce a certain style. Especially useful for avoiding nitpicking arguments in code reviews.
- **Time-saving:** No need to manually format your code.
- **Code quality:** Catch potential problems in your code, such as syntax errors and coding style violations.

### ESLint and Prettier

**ESLint** checks code for potential problems and helps to enforce a certain style. It can catch syntax errors, as well as problems related to coding style, such as inconsistent use of whitespace or naming conventions. **Prettier** is a code formatter that automatically formats code.

By using them together, we can enforce a certain coding style and then automatically format code to match these constraints.

## Installation

### Packages

Install the following dependencies:

```sh
# ESLint
yarn add --dev eslint

# Prettier
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier

# TypeScript support
yarn add --dev typescript @typescript-eslint/parser
```

### Configuration

Add the following rules to your ESLint configuration (`.eslintrc.cjs`):

```ts
// .eslintrc.cjs

module.exports = {
  // ...
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  // ...
}
```

_Note: `parser` and `parserOptions.parser` are separate and intentionally different._

A complete `.eslintrc.cjs` file may look like this:

```ts
// .eslintrc.cjs

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {},
}
```

### Scripts

Add the following scripts to your project:

```json
// package.json

{
  // ...
  "scripts": {
    // ...
    "lint:js": "eslint --ext \".ts,.vue\" --ignore-path .gitignore .",
    "lint:prettier": "prettier --check .",
    "lint": "yarn lint:js && yarn lint:prettier",
    "lintfix": "prettier --write --list-different . && yarn lint:js --fix"
    // ...
  }
  // ...
}
```

## Usage

To check for errors, use `yarn lint`. This won't effect any changes, and may be useful in a code review or CI pipeline.

```bash
$ yarn lint

>>> yarn run v1.22.5
>>> $ yarn lint:js && yarn lint:prettier
>>> $ eslint --ext ".ts,.vue" --ignore-path .gitignore .
>>>   2:3  error  Delete `··`                prettier/prettier
>>>   3:1  error  Replace `··})` with `});`  prettier/prettier
>>>   4:1  error  Delete `··`                prettier/prettier
>>>
>>> ✖ 3 problems (3 errors, 0 warnings)
>>>   3 errors and 0 warnings potentially fixable with the `--fix` option.
>>>
>>> error Command failed with exit code 1.
```

To fix errors, use `yarn lintfix`. This will save any formatting changes.

```bash
$ yarn lintfix

>>> yarn run v1.22.5
>>> $ prettier --write --list-different . && yarn lint:js --fix
>>> nuxt.config.ts
>>> $ eslint --ext ".ts,.vue" --ignore-path .gitignore . --fix
>>> Done in 4.33s.
```

After using `yarn lintfix`, `yarn lint` should return successfully.

```bash
$ yarn lint

>>> yarn run v1.22.5
>>> $ yarn lint:js && yarn lint:prettier
>>> $ eslint --ext ".ts,.vue" --ignore-path .gitignore .
>>> $ prettier --check .
>>> Checking formatting...
>>> All matched files use Prettier code style!
>>> Done in 4.94s.
```

Finally, copy your `.gitignore` into `.prettierignore`:

```json
// .prettierignore

node_modules
*.log*
.nuxt
.nitro
.cache
.output
.env
dist
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
