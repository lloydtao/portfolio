<template>
  <a
    :href="link"
    class="bg-gray-900 hover:bg-gray-700 duration-200 rounded-lg shadow border border-gray-700 overflow-hidden"
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
        <p class="text-xl text-gray-100 font-semibold">
          {{ title }}
        </p>
        <h2 class="text-sm text-gray-400 mt-1">{{ date }}</h2>
        <h2 class="text-lg text-gray-300 mt-2">{{ project }}</h2>
        <p class="text-gray-400 mt-2">
          {{ description }}
        </p>
        <div class="mt-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
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
