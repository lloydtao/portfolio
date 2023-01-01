---
slug: 'adding-vitest-to-nuxt-3-tutorial-unit-testing'
title: 'Adding Vitest to Nuxt 3 ⚡ (2023)'
subtitle: ''
series: 'Nuxt 3'
description: 'Getting started with Vitest for blazing-fast unit tests.'
localimage: '/images/nuxt-vitest-16-9.png'
cover_image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wlnkh4kjkjq6u0yqz54e.png'
publishedAt: '2023-01-05T09:00:00.000Z'
tags: 'nuxt, nuxt3, vitest, testing'
published: true
---

## Introduction

In this post, we'll introduce Vitest for blazing-fast unit tests in your Nuxt 3 project.

## Testing

Unit tests are important for ensuring that your code is working correctly.

This is especially important when making changes to your code, as you can ensure that you haven't introduced any new bugs or problems to existing features. Or, at least to the extent that these features have been covered by tests.

### Vitest

Vitest is a test runner based on Vite, an alternative module bundler to webpack which Nuxt 3 uses by default.

It's incredibly similar to **Jest**, and often considered a drop-in replacement for it.

## Installation

### Packages

Install the following dependencies:

```sh
# Vitest
yarn add --dev vitest jsdom @vitejs/plugin-vue

# Test utils
yarn add --dev @vue/test-utils @nuxt/test-utils
```

### Configuration

Create your Vitest configuration file (`vitest.config.js`):

```ts
// vitest.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```

### ESLint integration

If you're using ESLint from earlier in the series, you should also add its Vitest plugin:

```sh
yarn add --dev eslint-plugin-vitest
```

Then, modify your `.eslintrc.cjs` file to add the plugin:

```ts
// .eslintrc.cjs

module.exports = {
  // ...
  plugins: ['vitest'],
  // ...
}
```

### Scripts

Add the following script to your project:

```json
// package.json

{
  // ...
  "scripts": {
    // ...
    "test": "vitest"
    // ...
  }
  // ...
}
```

## Usage

### Creating tests

At this point, you should use a learning resource such as [Testing with Vitest](https://www.youtube.com/watch?v=cM_AeQHzlGg) to get started.

A test may look something like this:

```ts
// tests/HelloWorld.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm).toBeTruthy()
  })
})
```

### Running tests

To run your unit tests, use `yarn test`.

```bash
$ yarn test

>>> yarn run v1.22.5
>>> $ vitest
>>>
>>>  DEV  v0.26.3 ~/Documents/GitHub/nuxt-app
>>>
>>>  ✓ tests/HelloWorld.spec.ts (1)
>>>
>>>  Test Files  1 passed (1)
>>>       Tests  1 passed (1)
>>>    Start at  23:19:54
>>>    Duration  1.78s (transform 538ms, setup 1ms, collect 154ms, tests 20ms)
>>>
>>>
>>>  PASS  Waiting for file changes...
>>>        press h to show help, press q to quit
```

All done!

Now you can start shipping new features in peace 😉

---

Hey, guys! Thank you for reading. I hope that you enjoyed this.

Keep up to date with me:

- Website: https://lloyd.cx/
- Twitter: https://twitter.com/lloydtao/
- GitHub: https://github.com/lloydtao/
- LinkedIn: https://www.linkedin.com/in/lloydtao/
