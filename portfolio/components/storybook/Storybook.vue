<template>
  <div>
    <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
      Component library
    </h1>
    <div class="flex flex-col sm:flex-row sm:justify-between">
      <p class="mt-3 text-gray-300">
        Interactive showcase of components used on this site.
      </p>
    </div>
    <div class="flex overflow-hidden flex-col mt-5 rounded-lg">
      <a
        class="flex justify-end items-center py-1.5 px-2 space-x-2 font-semibold text-gray-50 bg-gray-600 hover:bg-gray-500 shadow duration-100"
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
        class="font-semibold text-gray-50 hover:text-gray-400 duration-100"
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
