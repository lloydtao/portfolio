<template>
  <div>
    <Section>
      <Hero />
    </Section>
    <Section class="bg-gray-800">
      <div class="py-5">
        <Hackathon />
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
