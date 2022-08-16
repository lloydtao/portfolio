<template>
  <a
    href="#"
    class="bg-gray-700 hover:bg-gray-600 border border-gray-500 hover:border-gray-400 rounded shadow px-5 py-5 duration-100 transform hover:scale-105 hover:-rotate-2"
  >
    <div class="flex flex-col">
      <div class="flex justify-center">
        <slot name="icon"></slot>
      </div>
      <div class="text-center text-gray-200 font-semibold mt-1">
        {{ this.skill }}
      </div>
      <div class="text-center text-sm text-gray-300 font-mono mt-1">
        {{ this.description }}
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    skill: { type: String, default: '' },
    description: { type: String, default: '' },
  },
})
</script>
