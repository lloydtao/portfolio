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
