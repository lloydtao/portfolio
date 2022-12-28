<template>
  <li class="w-full">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="py-3 h-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 duration-100"
      >
        <h1 class="px-5 font-semibold text-white">{{ title }}</h1>
        <h2 class="px-5 mt-0.5 text-sm text-gray-300">
          {{ formatDate(publishedAt) }}
        </h2>
        <h2 class="px-5 mt-1 mb-3 text-sm text-gray-500 truncate">
          {{ subtitle }}
        </h2>
        <div class="overflow-hidden" style="aspect-ratio: 16 / 9">
          <img
            :src="localimage"
            alt="Cover image placeholder"
            class="object-cover w-full"
            width="640"
            height="360"
          />
        </div>
        <p class="overflow-hidden px-5 mt-3 sm:text-sm text-gray-200">
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
