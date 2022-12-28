<template>
  <li class="w-full">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="h-full border border-gray-600 bg-gray-800 py-3 duration-100 hover:border-gray-500 hover:bg-gray-700"
      >
        <h1 class="px-5 font-semibold text-white">{{ title }}</h1>
        <h2 class="mt-0.5 px-5 text-sm text-gray-300">
          {{ formatDate(publishedAt) }}
        </h2>
        <h2 class="mt-1 mb-3 truncate px-5 text-sm text-gray-500">
          {{ subtitle }}
        </h2>
        <div class="overflow-hidden" style="aspect-ratio: 16 / 9">
          <img
            :src="localimage"
            alt="Cover image placeholder"
            class="w-full object-cover"
            width="640"
            height="360"
          />
        </div>
        <p class="mt-3 overflow-hidden px-5 text-gray-200 sm:text-sm">
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
