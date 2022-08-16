<template>
  <li class="w-full">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="h-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 py-3 duration-100"
      >
        <h1 class="font-semibold text-white px-5">{{ title }}</h1>
        <h2 class="text-sm text-gray-300 px-5">
          {{ formatDate(publishedAt) }}
        </h2>
        <h2 class="text-sm text-gray-500 px-5 truncate">
          {{ subtitle }}
        </h2>
        <div
          class="flex items-center overflow-hidden"
          style="aspect-ratio: 16 / 9"
        >
          <img
            :src="localimage"
            alt="Cover image placeholder"
            class="w-full object-cover mt-3"
            width="640"
            height="360"
          />
        </div>
        <p class="text-sm text-gray-200 mt-3 overflow-hidden px-5">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    route: { type: String, default: 'page-slug' },
    slug: { type: String, default: 'slug' },
    title: { type: String, default: 'Title' },
    subtitle: { type: String, default: 'Subtitle' },
    series: { type: String, default: 'Series' },
    localimage: { type: String, default: 'localimage' },
    description: { type: String, default: 'Description' },
    publishedAt: { type: String, default: '2000-01-01T00:00:00.000Z' },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
