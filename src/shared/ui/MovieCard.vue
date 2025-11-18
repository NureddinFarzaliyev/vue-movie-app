<script setup>
import { generateImageUrl } from '@/shared/utils/generateImageUrl'
import classNames from 'classnames'
import { computed, inject } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  movie: { type: Object, required: true },
  isTv: { type: Boolean, default: false },
  className: { type: String, default: '' },
})

const to = computed(() => `/${props.isTv ? 'tv' : 'movie'}/${props.movie.id}`)

const { wishlist, addToWishlist } = inject('wishlist')
const isInWishlist = computed(() => wishlist.value.some((wm) => wm.id === props.movie.id))
const handleAdd = () => {
  addToWishlist({ ...props.movie, isTv: props.isTv })
}
</script>
<template>
  <div
    :class="classNames('rounded-xl overflow-hidden w-fit h-full movie-card relative', className)"
  >
    <RouterLink :to>
      <img class="object-cover h-full!" :src="generateImageUrl(movie.poster_path)" />
    </RouterLink>
    <div
      @click="handleAdd"
      class="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded lg bg-vue opacity-0 transition-all hover:scale-120 shadow-md shadow-black cursor-pointer"
    >
      {{ isInWishlist ? '✅' : '⭐' }}
    </div>
  </div>
</template>
