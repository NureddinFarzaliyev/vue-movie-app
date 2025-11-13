import AboutPage from '@/pages/about/AboutPage.vue'
import HomePage from '@/pages/home/HomePage.vue'
import MoviePage from '@/pages/movie/MoviePage.vue'
import TvPage from '@/pages/movie/TvPage.vue'
import SearchPage from '@/pages/search/SearchPage.vue'
import WishlistPage from '@/pages/wishlist/WishlistPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/movie/:id', component: MoviePage },
  { path: '/tv/:id', component: TvPage },
  { path: '/search', component: SearchPage },
  { path: '/wishlist', component: WishlistPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
