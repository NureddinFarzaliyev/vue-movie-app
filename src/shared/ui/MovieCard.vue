<script setup>
import { generateImageUrl } from '@/shared/utils/generateImageUrl'
import { RouterLink } from 'vue-router'

const props = defineProps(['movie', 'isTv'])
</script>
<template>
  <div class="rounded-xl overflow-hidden w-fit h-full">
    <RouterLink :to="`/${props.isTv ? 'tv' : 'movie'}/${movie.id}`">
      <img class="object-cover h-full!" :src="generateImageUrl(movie.poster_path)" />
    </RouterLink>
  </div>
</template>
