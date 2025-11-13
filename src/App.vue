<script setup>
import ProvideWishlist from '@/app/provide/ProvideWishlist.vue'
import PageHeader from '@/widgets/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <ProvideWishlist>
    <div class="bg-zinc-900 text-white min-h-screen">
      <PageHeader />
      <RouterView />
    </div>
  </ProvideWishlist>
</template>

<style scoped></style>
