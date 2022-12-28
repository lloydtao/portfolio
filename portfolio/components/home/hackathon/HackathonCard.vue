<template>
  <a
    :href="link"
    class="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow duration-200 hover:bg-gray-700"
  >
    <div class="flex flex-col md:flex-row">
      <div class="overflow-hidden">
        <image-safe
          image-class="object-cover h-48 md:h-64 xl:h-48 w-full md:w-96"
          :src="image"
          width="640"
          height="360"
          :alt="'Preview image for' + project"
          format="webp"
        />
      </div>
      <div class="flex flex-1 flex-col px-5 py-4">
        <p class="text-xl font-semibold text-gray-100">
          {{ title }}
        </p>
        <h2 class="mt-1 text-sm text-gray-400">{{ date }}</h2>
        <h2 class="mt-2 text-lg text-gray-300">{{ project }}</h2>
        <p class="mt-2 text-gray-400">
          {{ description }}
        </p>
        <div class="mt-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    project: { type: String, default: '' },
    date: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '#' },
  },
}
</script>

<style></style>
