<template>
  <div>
    <nuxt-img
      v-if="server"
      :class="class_"
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
    />
    <img
      v-else
      :class="class_"
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
    />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      server: process.server,
    }
  },
  props: {
    class_: { type: String, default: '' },
    src: { type: String, default: '' },
    width: { type: String, default: '' },
    height: { type: String, default: '' },
    alt: { type: String, default: '' },
  },
}
</script>
