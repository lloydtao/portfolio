<template>
  <div>
    <nuxt-img
      v-if="server"
      :class="imageClass"
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
      :format="format"
    />
    <img
      v-else
      :class="imageClass"
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageClass: { type: String, default: '' },
    src: { type: String, default: '' },
    width: { type: String, default: '' },
    height: { type: String, default: '' },
    alt: { type: String, default: '' },
    format: { type: String, default: '' },
  },
  data() {
    return {
      server: process.server,
    }
  },
}
</script>
