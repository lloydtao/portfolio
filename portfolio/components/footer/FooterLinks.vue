<template>
  <div class="flex space-x-12">
    <ul class="flex flex-col">
      <li>
        <p class="text-sm font-semibold text-gray-100">Pages</p>
      </li>
      <li>
        <NuxtLink
          to="/blog/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projects/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Contact
        </NuxtLink>
      </li>
    </ul>
    <ul class="flex flex-col">
      <li>
        <p class="text-sm font-semibold text-gray-100">Resources</p>
      </li>
      <li>
        <a
          href="https://github.com/lloydtao/portfolio"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
          >Source code</a
        >
      </li>
      <li>
        <NuxtLink
          to="/storybook/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Storybook
        </NuxtLink>
      </li>
    </ul>
    <ul class="flex flex-col">
      <li>
        <p class="text-sm font-semibold text-gray-100">Other</p>
      </li>
      <li>
        <NuxtLink
          to="/leetcode/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Leetcode
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/graphics/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Graphics
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
