<script setup>
import { tmdbApi } from '@/app/tmdbApi'
import { generateImageUrl } from '@/shared/utils/generateImageUrl'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params
const movie = ref(null)

onMounted(async () => {
  const response = await tmdbApi.get(`/movie/${id}`)
  movie.value = response.data
})
</script>

<template>
  <div v-if="movie" class="relative">
    <img
      :src="generateImageUrl(movie?.backdrop_path, 1280)"
      class="absolute top-0 w-screen h-screen object-cover object-center left-0"
    />
    <div
      class="bg-black/90 absolute top-0 left-0 p-4 md:p-10 min-h-screen w-screen flex max-lg:flex-col gap-10"
    >
      <div class="sm:h-[60vh] shrink-0">
        <img
          :src="generateImageUrl(movie?.poster_path, 1280)"
          class="h-full rounded-2xl overflow-hidden shadow-xl shadow-black/50"
        />
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-4 relative z-10 text-white">
          {{ movie?.title }}
        </h1>
        <div class="flex gap-2">
          <div
            v-for="(genre, key) in movie.genres"
            :key
            class="px-2 py-1 rounded-full bg-white/20 ring ring-white text-xs font-semibold"
          >
            {{ genre.name }}
          </div>
        </div>
        <p class="mt-10 text-sm opacity-80">
          {{ movie.runtime }} mins, {{ movie.vote_average.toFixed(1) }}/10
        </p>
        <p class="mt-2">{{ movie.overview }}</p>
      </div>
    </div>
  </div>

  <div v-else class="h-screen w-screen flex items-center justify-center">Loading...</div>
</template>
