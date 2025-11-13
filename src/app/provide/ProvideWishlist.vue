<script setup>
import { onMounted, provide, ref, watch } from 'vue'

const wishlist = ref([])

onMounted(() => {
  const saved = localStorage.getItem('vue-movieapp-wishlist')
  if (saved) {
    wishlist.value = JSON.parse(saved)
  }
})

watch(
  wishlist,
  (val) => {
    localStorage.setItem('vue-movieapp-wishlist', JSON.stringify(val))
  },
  { deep: true },
)

const addToWishlist = (movie) => {
  if (wishlist.value.some((wm) => wm.id === movie.id)) {
    wishlist.value = wishlist.value.filter((wm) => wm.id !== movie.id)
  } else {
    wishlist.value.push(movie)
  }
}

provide('wishlist', { wishlist, addToWishlist })
</script>

<template>
  <slot />
</template>
