---
slug: 'adding-tailwind-css-to-nuxt-3-tutorial-utility-first-styling'
title: 'Adding Tailwind CSS to Nuxt 3 🍃 (2023)'
subtitle: ''
series: 'Nuxt 3'
description: 'Getting started with Tailwind CSS for utility-first styling.'
localimage: '/images/nuxt-tailwind-16-9.png'
cover_image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x5hmki02dbl8xwt820vj.png'
publishedAt: '2023-01-03T09:00:00.000Z'
tags: 'nuxt, nuxt3, tailwindcss'
published: true
---

## Introduction

In this post, we'll introduce Nuxt Tailwind, a package for the Tailwind CSS library.

Tailwind is a powerful tool for rapidly styling modern web applications.

## Utility-first CSS

Utility-first CSS is a design approach that uses pre-defined classes to style HTML elements. We refer to these classes as **utilities**.

One of the main advantages of utility-first CSS is that it allows you to style elements quickly without coupling them to custom CSS through stylesheets. This approach can be difficult to maintain when an app grows bigger.

You may argue that this will lead to code repetition, but when combined with component-based web frameworks (e.g. React, Vue), repetition is minimised while still keeping elements decoupled from stylesheets.

### Tailwind

Tailwind isn't just a fantastic way of writing CSS; it's also great to build with, due to a variety of development features:

- Easy configuration of built-in utilities
- Just-in-time compiler to avoid build times entirely
- Many great plugins available (typography, forms, etc.)

## Installation

Official documentation for using Tailwind with Nuxt can be found [here](https://nuxt.com/modules/tailwindcss).

Install the package:

```sh
yarn add --dev @nuxtjs/tailwindcss
```

Add the module to your Nuxt configuration:

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    '@nuxtjs/tailwindcss',
  ],
})
```

And just like that, you can now start adding Tailwind classes to your Nuxt components!

### Prettier integration

If you're using Prettier from earlier in the series, you should also add its Tailwind plugin:

```bash
yarn add --dev prettier-plugin-tailwindcss
```

This will give you automatic class sorting which is incredibly useful for organisation, especially when using lots of classes in one element (e.g. `hover:`, `dark:`). It should work automatically thanks to Prettier’s [autoloading convention](https://prettier.io/docs/en/plugins.html).

## Classes

To get started, add some of Tailwind's in-built utilities to an element's `class` attribute.

```vue
<template>
  <NuxtLink
    to="/"
    class="font-semibold text-gray-50 hover:text-gray-400 duration-100"
  >
    Home
  </NuxtLink>
</template>
```

New to Tailwind? Your best bet is to check out the [Tailwind docs](https://tailwindcss.com/docs/utility-first).

## Configuration

Create a `tailwind.config.js` file at the root of your project to configure the default theme.

```ts
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        linkedin: {
          primary: '#0A66C2',
          lighter: '#378fe9',
          darker: '#004182',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

## Viewer

Nuxt Tailwind exposes a `/_tailwind/` route in development where your Tailwind configuration is rendered as a library.

May your web apps become colourful and flashy 😉

---

Hey, guys! Thank you for reading. I hope that you enjoyed this.

Keep up to date with me:

- Website: https://lloyd.cx/
- Twitter: https://twitter.com/lloydtao/
- GitHub: https://github.com/lloydtao/
- LinkedIn: https://www.linkedin.com/in/lloydtao/
