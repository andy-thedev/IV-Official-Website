import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Global css styling
import '@/assets/css/global-styles.scss';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeadphonesAlt,
  faBars,
  faChevronRight,
  faChevronLeft,
  faMinus,
  faXmark,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faSpotify, faApple, faSoundcloud, faDeezer, faAmazon } from '@fortawesome/free-brands-svg-icons';
// import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Router components
import { RouterLink, RouterView } from 'vue-router';

// Touch events
import Vue3TouchEvents from 'vue3-touch-events';

// Add icons to fontawesome library
library.add(faHeadphonesAlt);
library.add(faBars);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faMinus);
library.add(faXmark);
library.add(faEyeSlash);

library.add(faYoutube);
library.add(faSpotify);
library.add(faApple);
library.add(faSoundcloud);
library.add(faDeezer);
library.add(faAmazon);

// App setup
const app = createApp(App);

app.use(router);
app.use(Vue3TouchEvents);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('router-view', RouterView);
app.component('router-link', RouterLink);

app.mount('#app');
