<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 class="font-semibold text-2xl">{{ title }}</h1>
</template>
