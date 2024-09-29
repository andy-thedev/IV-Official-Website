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
          meta: {
            headerColor: 'black',
            headerFontColor: 'white',
          },
          children: [
            {
              path: '',
              name: 'IVDiscographyPage',
              component: IVDiscographyPage,
            },
            {
              path: ':id',
              name: 'DiscographyDetails',
              component: DiscographyDetails,
            },
            {
              path: 'publication',
              component: RouterView,
              children: [
                {
                  path: 'youth',
                  name: 'YouthPublication',
                  component: YouthPublication,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default router;
