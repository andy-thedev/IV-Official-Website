import { createRouter, createWebHistory } from 'vue-router';

import RouterView from '@/views/RouterView.vue';

import LandingWrapper from '@/views/LandingWrapper.vue';
import LandingPage from '@/views/LandingPage.vue';

import IVDiscographyPage from '@/views/discography/IVDiscographyPage.vue';
import DiscographyWrapper from '@/views/discography/DiscographyWrapper.vue';

import DiscographyDetails from '@/views/discography/details/DiscographyDetails.vue';

import YouthPublicationAbstract from '@/views/discography/publications/youth/introduction/YouthPublicationAbstract.vue';
import YouthPublicationImmersion from '@/views/discography/publications/youth/introduction/YouthPublicationImmersion.vue';
import YouthPublication4YearsAgo from '@/views/discography/publications/youth/how-it-all-began/YouthPublication4YearsAgo.vue';
import YouthPublicationTreadingWater from '@/views/discography/publications/youth/how-it-all-began/YouthPublicationTreadingWater.vue';

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
                headerColor: '#111111',
                headerFontColor: 'white',
              },
            },
            {
              path: ':id',
              name: 'DiscographyDetails',
              component: DiscographyDetails,
              meta: {
                headerColor: '#111111',
                headerFontColor: 'white',
              },
            },
            {
              path: 'publication',
              component: RouterView,
              children: [
                {
                  path: 'youth',
                  name: 'YouthPublicationWrapper',
                  component: RouterView,
                  redirect: 'youth/introduction',
                  meta: {
                    headerColor: '#4179b2',
                    headerFontColor: 'white',
                  },
                  children: [
                    {
                      path: 'introduction',
                      name: 'YouthIntroduction',
                      component: RouterView,
                      redirect: 'introduction/abstract',
                      meta: {
                        headerColor: '#416492',
                        headerFontColor: 'white',
                      },
                      children: [
                        {
                          path: 'abstract',
                          name: 'YouthPublicationAbstract',
                          component: YouthPublicationAbstract,
                        },
                        {
                          path: 'immersion',
                          name: 'YouthPublicationImmersion',
                          component: YouthPublicationImmersion,
                        },
                      ],
                    },
                    {
                      path: 'how-it-all-began',
                      name: 'YouthPublicationHowItAllBegan',
                      component: RouterView,
                      meta: {
                        headerColor: '#416492',
                        headerFontColor: 'white',
                      },
                      children: [
                        {
                          path: 'four-years-ago',
                          name: 'YouthPublication4YearsAgo',
                          component: YouthPublication4YearsAgo,
                        },
                        {
                          path: 'treading-water',
                          name: 'YouthPublicationTreadingWater',
                          component: YouthPublicationTreadingWater,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If a saved position is available (ie: using back/forward navigation), scroll to it
      return savedPosition;
    } else if (to.hash) {
      // Scroll to the element with the id matching the hash
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      // Scroll to the top of the page when navigating to a new route by default
      return { left: 0, top: 0 };
    }
  },
});

export default router;
