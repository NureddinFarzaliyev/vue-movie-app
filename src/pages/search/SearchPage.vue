<script setup>
import { tmdbApi } from '@/app/tmdbApi'
import LoadingPage from '@/shared/ui/LoadingPage.vue'
import MovieCard from '@/shared/ui/MovieCard.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const results = ref([])
const loading = ref(true)

const search = async (q) => {
  if (!q) {
    results.value = []
    loading.value = false
    return
  }
  loading.value = true
  const response = await tmdbApi.get(`/search/multi?query=${q}`)
  results.value = response.data.results
  loading.value = false
}

watch(
  () => route.query.q,
  (q) => {
    search(q)
  },
  { immediate: true },
)
</script>

<template>
  <div class="p-page">
    <h1 class="font-semibold text-lg">Search results for: {{ $route.query.q }}</h1>
    <LoadingPage v-if="loading" />
    <div v-else class="flex gap-4 flex-wrap mt-5">
      <MovieCard
        v-for="(movie, key) in results"
        :key
        :movie
        :isTv="movie.media_type === 'tv'"
        className="h-80! w-50!"
      />
    </div>
  </div>
</template>
