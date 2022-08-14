<template>
  <div class="flex space-x-12">
    <ul class="flex flex-col">
      <li>
        <p class="text-gray-100 font-semibold text-sm">Pages</p>
      </li>
      <li>
        <NuxtLink
          to="/blog/"
          class="text-gray-300 hover:text-gray-400 duration-100 text-sm"
        >
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projects/"
          class="text-gray-300 hover:text-gray-400 duration-100 text-sm"
        >
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact/"
          class="text-gray-300 hover:text-gray-400 duration-100 text-sm"
        >
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/graphics/"
          class="text-gray-300 hover:text-gray-400 duration-100 text-sm"
        >
          Graphics
        </NuxtLink>
      </li>
    </ul>
    <ul class="flex flex-col">
      <li>
        <p class="text-gray-100 font-semibold text-sm">Resources</p>
      </li>
      <li>
        <a
          href="https://github.com/lloydtao/portfolio"
          class="text-gray-300 hover:text-gray-400 duration-100 text-sm"
          >Source code</a
        >
      </li>
      <li>
        <NuxtLink
          to="/storybook/"
          class="text-gray-300 hover:text-gray-400 duration-100 text-sm"
        >
          Storybook
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
