<template>
  <div class="text-sm font-semibold text-gray-50">
    Lewis Lloyd &copy; {{ date }}
  </div>
</template>

<script setup lang="ts">
const date = new Date().getFullYear();
</script>
