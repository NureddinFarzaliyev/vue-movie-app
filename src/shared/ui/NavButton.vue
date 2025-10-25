<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps(['to', 'label'])
</script>

<template>
  <RouterLink :to="to">
    <button
      class="bg-vue-text font-medium cursor-pointer text-sm text-vue px-3 py-1 rounded hover:opacity-80 transition"
    >
      {{ label }}
    </button>
  </RouterLink>
</template>
