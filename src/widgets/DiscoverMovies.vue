<script setup>
import { tmdbApi } from '@/app/tmdbApi'
import DiscoverSwiper from '@/shared/ui/DiscoverSwiper.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { onMounted, ref } from 'vue'

const movies = ref([])
const { url, isTv, title } = defineProps(['url', 'isTv', 'title'])

onMounted(async () => {
  const response = await tmdbApi.get(url)
  movies.value = response.data.results
})
</script>

<template>
  <div>
    <SectionHeading :title class="mb-3" />
    <DiscoverSwiper :movies="movies" :isTv />
  </div>
</template>
