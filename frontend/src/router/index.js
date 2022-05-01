import { createRouter, createWebHistory } from "vue-router";
import LandingWrapper from '@/views/LandingWrapper.vue'
import LandingPage from '@/views/LandingPage.vue';

import AboutPage from '@/views/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingWrapper',
      component: LandingWrapper,
      children: [
        {
          path: '',
          name: 'LandingPage',
          component: LandingPage,
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
});

export default router;
