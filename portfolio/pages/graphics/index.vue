<template>
  <div>
    <Section>
      <h1 class="text-3xl font-black uppercase text-gray-100 sm:text-4xl">
        Graphics example
      </h1>
      <h1 class="mt-2 text-lg text-gray-200">For keyboard and mouse users</h1>
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
