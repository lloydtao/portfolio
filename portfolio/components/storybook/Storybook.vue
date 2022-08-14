<template>
  <div>
    <h1 class="text-3xl sm:text-4xl text-gray-100 uppercase font-black">
      Component library
    </h1>
    <div class="flex flex-col sm:flex-row sm:justify-between">
      <p class="text-gray-300 mt-3">
        Interactive showcase of components used on this site.
      </p>
    </div>
    <div class="flex flex-col rounded-lg overflow-hidden mt-5">
      <a
        class="flex items-center space-x-2 text-gray-50 bg-gray-600 hover:bg-gray-500 shadow font-semibold duration-100 px-5 py-2 justify-end"
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
    <p class="text-gray-300 mt-5">
      Powered by
      <a
        class="text-gray-50 hover:text-gray-400 font-semibold duration-100"
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
