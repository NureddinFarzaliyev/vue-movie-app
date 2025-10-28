<script setup>
import NavButton from '@/shared/ui/NavButton.vue'
</script>

<template>
  <div class="bg-vue text-vue-text py-4 md:px-10 flex items-center justify-between">
    <h1 class="font-bold text-lg">Vue Movie App</h1>
    <div class="flex gap-3">
      <NavButton to="/" label="Home" />
      <NavButton to="/about" label="About" />
    </div>
  </div>
</template>
