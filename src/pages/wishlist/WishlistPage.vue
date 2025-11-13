<script setup>
import MovieCard from '@/shared/ui/MovieCard.vue'
import { inject } from 'vue'

const { wishlist } = inject('wishlist')
</script>

<template>
  <div class="p-page">
    <h1 class="text-2xl font-bold">Your Wishlist</h1>
    <div v-if="wishlist.length > 0" class="flex gap-4 flex-wrap mt-5">
      <MovieCard
        v-for="(movie, key) in wishlist"
        :key
        :movie
        :isTv="movie.isTv"
        className="h-80! w-50!"
      />
    </div>
  </div>
</template>
