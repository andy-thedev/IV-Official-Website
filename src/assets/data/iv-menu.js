// import { youthMedia } from '@/assets/data/iv-media.js';
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
