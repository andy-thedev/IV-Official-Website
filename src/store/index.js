import { createStore } from 'vuex';

import landingHeader from '@/store/modules/landingHeader';

const store = createStore({
  modules: {
    landingHeader,
  },
});

export default store;
