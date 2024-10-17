import { createRouter, createWebHistory } from 'vue-router';

import RouterView from '@/views/RouterView.vue';

import LandingWrapper from '@/views/LandingWrapper.vue';
import LandingPage from '@/views/LandingPage.vue';

import IVDiscographyPage from '@/views/discography/IVDiscographyPage.vue';
import DiscographyWrapper from '@/views/discography/DiscographyWrapper.vue';

import DiscographyDetails from '@/views/discography/details/DiscographyDetails.vue';

import YouthPublication from '@/views/discography/publications/youth/YouthPublication.vue';
import YouthHowItAllBegan from '@/views/discography/publications/youth/YouthHowItAllBegan.vue';
import YouthIntroductionImmersion from '@/views/discography/publications/youth/introduction/YouthIntroductionImmersion.vue';

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
                  name: 'YouthPublicationWrapper',
                  component: RouterView,
                  meta: {
                    headerColor: '#4179b2',
                    headerFontColor: 'white',
                  },
                  children: [
                    {
                      path: '',
                      name: 'YouthPublication',
                      component: YouthPublication,
                    },
                    {
                      path: 'introduction',
                      name: 'YouthIntroduction',
                      component: RouterView,
                      meta: {
                        headerColor: '#416492',
                        headerFontColor: 'white',
                      },
                      children: [
                        {
                          path: 'immersion',
                          name: 'YouthIntroductionImmersion',
                          component: YouthIntroductionImmersion,
                        },
                      ],
                    },
                    {
                      path: 'how-it-all-began',
                      name: 'YouthHowItAllBegan',
                      component: YouthHowItAllBegan,
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
