<script setup>
import DiscoverMovies from '@/widgets/DiscoverMovies.vue'
</script>

<template>
  <div class="px-3 md:px-10 flex flex-col gap-6 pt-12">
    <DiscoverMovies url="/discover/movie" title="New Movies" />
    <DiscoverMovies url="/discover/tv" title="New Shows" :isTv="true" />
    <DiscoverMovies url="/trending/movie/week" title="Trending Movies" />
    <DiscoverMovies url="/trending/tv/week" title="Trending Shows" :isTv="true" />
  </div>
</template>
