<template>
  <ul class="flex sm:hidden">
    <li>
      <button
        class="absolute right-0 z-30 flex-none px-5"
        @click="showMenu = !showMenu"
      >
        <p
          class="p-2 font-semibold tracking-wide text-gray-200 hover:bg-gray-900 hover:bg-opacity-30 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </p>
      </button>
      <div
        class="fixed inset-0 z-10 bg-black transition"
        :class="{
          'invisible opacity-0': !showMenu,
          'visible opacity-40': showMenu,
        }"
        @click="showMenu = !showMenu"
      />
      <div
        class="absolute right-0 z-20 px-5 mt-16 w-full transition"
        :class="{
          'pointer-events-none -translate-y-3 translate-x-2 scale-95 transform opacity-0 ':
            !showMenu,
          'pointer-events-auto translate-y-0 translate-x-0 scale-100 transform opacity-100 ':
            showMenu,
        }"
      >
        <ul
          class="flex overflow-hidden flex-col w-full bg-gray-50 rounded shadow-md"
        >
          <li class="flex">
            <h3 class="flex flex-1 py-4 px-5 font-semibold text-gray-800">
              Navigation
            </h3>
          </li>
          <li class="flex border-t" @click="showMenu = !showMenu">
            <NuxtLink
              to="/"
              class="flex flex-1 py-4 px-8 text-lg font-semibold text-gray-700 hover:bg-gray-100"
              >Home</NuxtLink
            >
          </li>
          <li class="flex" @click="showMenu = !showMenu">
            <NuxtLink
              to="/blog/"
              class="flex flex-1 py-4 px-8 text-lg font-semibold text-gray-700 hover:bg-gray-100"
              >Blog</NuxtLink
            >
          </li>
          <li class="flex" @click="showMenu = !showMenu">
            <NuxtLink
              to="/projects/"
              class="flex flex-1 py-4 px-8 text-lg font-semibold text-gray-700 hover:bg-gray-100"
              >Projects</NuxtLink
            >
          </li>
          <li class="flex" @click="showMenu = !showMenu">
            <NuxtLink
              to="/contact/"
              class="flex flex-1 py-4 px-8 text-lg font-semibold text-gray-700 hover:bg-gray-100"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const showMenu = ref(false);
</script>
