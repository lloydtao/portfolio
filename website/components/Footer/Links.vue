<template>
  <div class="flex space-x-12">
    <ul class="flex flex-col">
      <li>
        <p class="text-sm font-semibold text-gray-100">Pages</p>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/blog"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projects"
          class="text-sm text-gray-300 hover:text-gray-400 duration-100"
        >
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact"
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
    </ul>
  </div>
</template>
