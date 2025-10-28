<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import MovieCard from '@/shared/ui/MovieCard.vue'

const props = defineProps(['movies', 'title', 'isTv'])
const modules = [Pagination, Autoplay, Navigation]
</script>

<template>
  <Swiper
    :spaceBetween="10"
    :navigation="true"
    :loop="true"
    :pagination="{ clickable: true }"
    :modules="modules"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 8,
      },
      1440: {
        slidesPerView: 10,
      },
    }"
  >
    <SwiperSlide
      class="flex! items-center justify-center h-auto!"
      v-for="(movie, idx) in movies"
      :key="idx"
    >
      <MovieCard :movie="movie" :isTv="props.isTv" />
    </SwiperSlide>
  </Swiper>
</template>
