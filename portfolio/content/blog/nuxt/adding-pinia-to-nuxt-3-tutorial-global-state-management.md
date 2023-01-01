---
slug: 'adding-pinia-to-nuxt-3-tutorial-global-state-management'
title: 'Adding Pinia to Nuxt 3 🍍 (2023)'
subtitle: ''
series: 'Nuxt 3'
description: 'Getting started with Pinia for global state management.'
localimage: '/images/nuxt-cover-16-9.png'
cover_image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eozu62uqnpka4l58nhah.png'
publishedAt: '2023-01-04T09:00:00.000Z'
tags: 'nuxt, nuxt3, pinia'
published: true
---

## Introduction

In this post, we'll introduce Pinia, a powerful package for managing your Nuxt app's state in a single place.

Whether you're new to state management solutions or experienced with libraries such as Vuex and Redux, Pinia is definitely worth checking out.

## State management

If you've ever found yourself aimlessly trying to manage state through props and events, then the idea of a store may sound appealing:

- Manage an app's state from a single, centralised store
- Update and retrieve data through simple actions and getters
- Subscribe to changes to achieve deep reactivity without much work

This helps to make changes to the app's state predictable and more consistent.

For example, we can store a counter, and then increment it from anywhere by using its store:

![Demo of counter component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1cf2kfethplnmjmvv3oj.gif)

### Pinia

Pinia is a state management library for Vue, with an officially-supported module for Nuxt 3 (`@pinia/nuxt`). It's also the recommended solution for Vue and Nuxt projects.

Don't just take it from me:

> "Pinia is de facto Vuex 5!"
>
> — _Evan You, creator of Vue_ ([source](https://twitter.com/youyuxi/status/1463429442076745730))

What makes it useful for Vue and Nuxt applications?

- Deep reactivity by default
- No explicit mutations (all changes are implicit mutations)
- Analogous with Options API:
  - Actions (equivalent of `methods`)
  - Getters (equivalent of `computed`)

## Installation

Official documentation for using Pinia with Nuxt can be found [here](https://nuxt.com/modules/pinia).

Install the package:

```sh
yarn add @pinia/nuxt
```

Add the module to your Nuxt configuration:

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
```

## Creating a store

Stores are created in a `stores/` directory, and defined by using Pinia's `defineStore` method.

In this example, we have created a store (`useCounterStore`) and given the store a name (`counter`). We have then defined our `state` property (`count`) with an initial value.

```ts
// stores/counter.ts

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
})
```

It's as simple as that!

## Using the store

Pinia offers a few ways to access the store and maintain reactivity.

### 1. Store instance

In your component's `setup()`, import the store's `useStore()` method.

```ts
// components/MyCounter.vue

import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    return {
      store: useCounterStore(),
    }
  },
})
```

You can now access state through the store instance:

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ store.count }}</p>
</template>
```

### 2. Computed properties

To write cleaner code, you may wish to grab specific properties. However, destructuring the store will break reactivity.

Instead, we can use a computed property to achieve reactivity:

```ts
// components/MyCounter.vue

export default defineComponent({
  setup() {
    const store = useCounterStore()

    // ❌ Bad (unreactive):
    const { count } = store

    // ✔️ Good:
    const count = computed(() => store.count)

    return { count }
  },
})
```

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ store.count }}</p>
</template>
```

### 3. Extract via storeToRefs()

You can destructure properties from the store while keeping reactivity through the use of `storeToRefs()`.

This will create a ref for each reactive property.

```ts
// components/MyCounter.vue
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounterStore()

    // ❌ Bad (unreactive):
    const { count } = store

    // ✔️ Good:
    const { count } = storeToRefs(store)

    return { count }
  },
})
```

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ store.count }}</p>
</template>
```

## Actions

### Adding an action

Actions are the equivalent of `methods` in components, defined in the store's `actions` property.

```ts
// stores/counter.ts

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})
```

### Using an action

In your component, extract the action from the store.

```ts
// components/MyCounter.vue

export default defineComponent({
  setup() {
    const store = useCounterStore()
    const { increment } = store
    const count = computed(() => store.count)
    return { increment, count }
  },
})
```

The action can easily be invoked, such as upon a button being clicked:

```ts
// components/MyCounter.vue

<template>
  <button type="button" @click="increment"></button>
</template>
```

## Getters

Getters are the equivalent of `computed` in components, defined in the store's `getters` property.

### Adding a getter

Pinia encourages the usage of the arrow function, using the state as the first parameter:

```ts
// stores/counter.ts

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

### Using a getter

Similarly to state properties, getters need to be accessed in a way that maintains reactivity.

For instance, you could access it through the store instance:

```ts
// components/MyCounter.vue

export default defineComponent({
  setup() {
    const store = useCounterStore()
    return { store }
  },
})
```

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ store.getCount }}</p>
</template>
```

Or, by using a computed property:

```ts
// components/MyCounter.vue

export default defineComponent({
  setup() {
    const store = useCounterStore()

    // ❌ Bad (unreactive):
    const { getCount } = store

    // ✔️ Good:
    const getCount = computed(() => store.getCount)

    return { getCount }
  },
})
```

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ getCount }}</p>
</template>
```

Or, by using `storeToRefs()`:

```ts
// components/MyCounter.vue
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounterStore()

    // ❌ Bad (unreactive):
    const { getCount } = store

    // ✔️ Good:
    const { getCount } = storeToRefs(store)

    return { getCount }
  },
})
```

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ getCount }}</p>
</template>
```

## A complete component

Since we've discussed actions and getters separately, here is a code snippet that combines both in the style that I recommend:

```ts
// components/MyCounter.vue

import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    const getCount = computed(() => store.getCount)
    const { increment } = store
    return { getCount, increment }
  },
})
```

```ts
// components/MyCounter.vue

<template>
  <p>Counter: {{ getCount }}</p>
  <button type="button" @click="increment">Increment</button>
</template>
```

This code has been implemented at [lloydtao/nuxt-3-starter/](https://github.com/lloydtao/nuxt-3-starter/):

![Demo of counter component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1cf2kfethplnmjmvv3oj.gif)

How do you think your developer experience will be improved? 😉

---

Hey, guys! Thank you for reading. I hope that you enjoyed this.

Keep up to date with me:

- Website: https://lloyd.cx/
- Twitter: https://twitter.com/lloydtao/
- GitHub: https://github.com/lloydtao/
- LinkedIn: https://www.linkedin.com/in/lloydtao/
