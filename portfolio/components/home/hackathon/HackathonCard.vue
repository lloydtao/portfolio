<template>
  <a
    href="#"
    class="bg-gray-900 hover:bg-gray-700 duration-200 rounded-lg shadow border border-gray-700 overflow-hidden"
  >
    <div class="flex flex-col md:flex-row">
      <div class="overflow-hidden">
        <img
          class="object-cover h-48 md:h-48 w-full md:w-96"
          :src="getUrl(image)"
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
        <div
          href="https://github.com/lloydtao/Hackathon-Junction-2021"
          class="flex items-center rounded-lg overflow-hidden mt-3"
        ></div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
declare var require: any

export default {
  props: {
    title: { type: String, default: '' },
    project: { type: String, default: '' },
    date: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
  },
  methods: {
    getUrl(image: string) {
      if (image == '') {
        return 'https://placekitten.com/480/270'
      }
      return require(`~/assets/images/${image}`)
    },
  },
}
</script>

<style></style>
