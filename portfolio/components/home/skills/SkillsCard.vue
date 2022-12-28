<template>
  <div
    class="p-5 bg-gray-700 rounded border border-gray-500 shadow duration-100"
  >
    <div class="flex flex-col">
      <div class="flex justify-center">
        <slot name="icon"></slot>
      </div>
      <div class="mt-1 font-semibold text-center text-gray-200">
        {{ skill }}
      </div>
      <div class="mt-1 font-mono text-sm text-center text-gray-300">
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
