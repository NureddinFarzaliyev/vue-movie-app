<script setup>
import PageHeader from '@/widgets/PageHeader/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-zinc-900 text-white min-h-screen">
    <PageHeader />
    <RouterView />
  </div>
</template>

<style scoped></style>
