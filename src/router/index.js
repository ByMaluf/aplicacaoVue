import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import MoviesView from '../components/MoviesView.vue';
import MovieDetailsView from '../components/MovieDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
    },
    {
      path: '/movies/:id',
      name: 'movie-details',
      component: MovieDetailsView,
    },
  ],
});

export default router;
