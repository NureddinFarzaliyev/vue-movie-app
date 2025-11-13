<script setup>
import NavButton from '@/shared/ui/NavButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onSearch = (e) => {
  router.push(`/search?q=${e.target.search.value}`)
}
</script>

<template>
  <div class="bg-vue text-vue-text py-4 md:px-10 flex items-center justify-between">
    <h1 class="font-bold text-lg">Vue Movie App</h1>
    <form @submit.prevent="onSearch">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        class="py-1 px-2 rounded-lg font-medium bg-vue-text text-white"
      />
    </form>
    <div class="flex gap-3">
      <NavButton to="/" label="Home" />
      <NavButton to="/wishlist" label="Wishlist" />
      <NavButton to="/about" label="About" />
    </div>
  </div>
</template>
