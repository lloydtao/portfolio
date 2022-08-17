<template>
  <div>
    <Section>
      <h1 class="text-3xl sm:text-4xl text-gray-100 uppercase font-black">
        Graphics example
      </h1>
      <h1 class="text-lg text-gray-200 mt-2">For keyboard and mouse users</h1>
      <GraphicsExample class="mt-5 sm:mt-8" />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GraphicsPage',
})
</script>
