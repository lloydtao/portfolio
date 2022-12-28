<template>
  <div
    class="rounded border border-gray-500 bg-gray-700 p-5 shadow duration-100"
  >
    <div class="flex flex-col">
      <div class="flex justify-center">
        <slot name="icon"></slot>
      </div>
      <div class="mt-1 text-center font-semibold text-gray-200">
        {{ skill }}
      </div>
      <div class="mt-1 text-center font-mono text-sm text-gray-300">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    skill: { type: String, default: '' },
    description: { type: String, default: '' },
  },
})
</script>
