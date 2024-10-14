import { youthMedia, pg13Media } from '@/assets/data/iv-media.js';

const ivMenu = [
  {
    name: 'INDIVISUAL',
    previewImgSrc: youthMedia.bts.groupGazeEdited,
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
    previewImgSrc: pg13Media.magic,
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
