import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/my-nft',
      name: 'my-nft',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyNFTView.vue'),
    },
    {
      path: '/my-nft/:nftPublicKey',
      name: 'nft-detail',
      component: () => import('../views/NFTDetailView.vue'),
    },
    {
      path: '/reading/:guid',
      name: 'zodiac-reading',
      component: () => import('../views/ZodiacReadingView.vue'),
    },
  ],
});

export default router;
