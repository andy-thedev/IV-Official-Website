import { createStore } from 'vuex';

import landingHeader from '@/store/modules/landingHeader';
import overlay from '@/store/modules/overlay';
import carousel from '@/store/modules/carousel';

const store = createStore({
  modules: {
    landingHeader,
    overlay,
    carousel,
  },
});

export default store;
