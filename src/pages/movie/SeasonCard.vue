<script setup>
import { generateImageUrl } from '@/shared/utils/generateImageUrl'

defineProps(['season'])
</script>

<template>
  <div class="flex bg-gray-900 lg:bg-gray-900/80 p-5 rounded-lg gap-4">
    <img class="h-40 shrink-0 rounded-lg shadow-md" :src="generateImageUrl(season?.poster_path)" />

    <div>
      <h3 class="font-bold text-lg">
        {{ season.name }}
        <span class="font-normal text-sm"
          >{{ season.episode_count }} eps, {{ season.vote_average }}/10</span
        >
      </h3>
      <p class="text-sm mt-1">{{ season.overview }}</p>
    </div>
  </div>
</template>
