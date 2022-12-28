<template>
  <div>
    <h1 class="text-3xl font-black uppercase text-gray-100 sm:text-4xl">
      Component library
    </h1>
    <div class="flex flex-col sm:flex-row sm:justify-between">
      <p class="mt-3 text-gray-300">
        Interactive showcase of components used on this site.
      </p>
    </div>
    <div class="mt-5 flex flex-col overflow-hidden rounded-lg">
      <a
        class="flex items-center justify-end space-x-2 bg-gray-600 px-2 py-1.5 font-semibold text-gray-50 shadow duration-100 hover:bg-gray-500"
        :href="storybookUrl"
      >
        <p>Full screen</p>
        <IconWrapper>
          <Expand />
        </IconWrapper>
      </a>
      <iframe
        title="Storybook | UI Documentation"
        class="flex w-full"
        height="640"
        :src="storybookUrl"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <p class="mt-5 text-gray-300">
      Powered by
      <a
        class="font-semibold text-gray-50 duration-100 hover:text-gray-400"
        href="https://storybook.js.org/"
        >Storybook</a
      >, a great tool for UI documentation.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storybookUrl:
        process.env.storybookBaseUrl + '?path=/story/section--section-demo',
    }
  },
}
</script>
