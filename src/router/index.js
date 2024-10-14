import { createRouter, createWebHistory } from 'vue-router';

import RouterView from '@/views/RouterView.vue';

import LandingWrapper from '@/views/LandingWrapper.vue';
import LandingPage from '@/views/LandingPage.vue';

import IVDiscographyPage from '@/views/discography/IVDiscographyPage.vue';
import DiscographyWrapper from '@/views/discography/DiscographyWrapper.vue';

import DiscographyDetails from '@/views/discography/details/DiscographyDetails.vue';

import YouthPublication from '@/views/discography/publications/YouthPublication.vue';

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
        {
          path: 'discography',
          name: 'DiscographyWrapper',
          component: DiscographyWrapper,
          children: [
            {
              path: '',
              name: 'IVDiscographyPage',
              component: IVDiscographyPage,
              meta: {
                headerColor: 'black',
                headerFontColor: 'white',
              },
            },
            {
              path: ':id',
              name: 'DiscographyDetails',
              component: DiscographyDetails,
              meta: {
                headerColor: 'black',
                headerFontColor: 'white',
              },
            },
            {
              path: 'publication',
              component: RouterView,
              children: [
                {
                  path: 'youth',
                  name: 'YouthPublication',
                  component: YouthPublication,
                  meta: {
                    headerColor: '#416492',
                    headerFontColor: 'white',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If a saved position is available (ie: using back/forward navigation), return it
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll to the top of the page when navigating to a new route
      return { left: 0, top: 0 };
    }
  },
});

export default router;
