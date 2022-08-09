<template>
  <div>
    <Section>
      <Hero />
    </Section>
    <Section class="bg-gray-700">
      <University />
    </Section>
    <Section class="bg-gray-800">
      <Hackathon />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
