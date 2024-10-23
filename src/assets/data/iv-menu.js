/*
  Can not use iv-media here, as we must import images directly to trigger preloading.

  In Vue templates, relative image paths are automatically processed and resolved by the Vue compiler.
  This does not happen in JavaScript code. Thus, when we preload images using previewImgSrc, the browser
  may not correctly locate the image files, resulting in them not being preloaded as intended.
*/

import youthBtsBasementGroupGazeImgMobile from '@/assets/img/bts/youth/mobile/basement-group-gaze.webp';
import youthArtworkImgMobile from '@/assets/img/artworks/mobile/youth.webp';

const ivMenu = [
  {
    name: 'INDIVISUAL',
    previewImgSrc: youthBtsBasementGroupGazeImgMobile,
    children: [
      {
        name: 'Home',
        routeName: 'LandingPage',
      },
      {
        name: 'Discography',
        routeName: 'IVDiscographyPage',
      },
    ],
  },
  {
    name: 'PG-13',
    previewImgSrc: youthArtworkImgMobile,
    children: [
      {
        name: 'Home',
        routeName: '',
      },
      {
        name: 'Discography',
        routeName: '',
      },
    ],
  },
];

export default ivMenu;
