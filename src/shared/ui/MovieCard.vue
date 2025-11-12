<script setup>
import { generateImageUrl } from '@/shared/utils/generateImageUrl'
import classNames from 'classnames'
import { RouterLink } from 'vue-router'

const props = defineProps(['movie', 'isTv', 'className'])
</script>
<template>
  <div :class="classNames('rounded-xl overflow-hidden w-fit h-full', className)">
    <RouterLink :to="`/${props.isTv ? 'tv' : 'movie'}/${movie.id}`">
      <img class="object-cover h-full!" :src="generateImageUrl(movie.poster_path)" />
    </RouterLink>
  </div>
</template>
