<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['movie', 'isTv'])
</script>
<template>
  <div class="rounded-xl overflow-hidden w-fit h-full">
    <RouterLink :to="`/${props.isTv ? 'tv' : 'movie'}/${movie.id}`">
      <img
        class="object-cover h-full!"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      />
    </RouterLink>
  </div>
</template>
