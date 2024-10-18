import { youthMedia } from '@/assets/data/iv-media.js';

const ivMenu = [
  {
    name: 'INDIVISUAL',
    previewImgSrc: youthMedia.bts.basementGroupGaze,
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
    previewImgSrc: youthMedia.artwork,
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
