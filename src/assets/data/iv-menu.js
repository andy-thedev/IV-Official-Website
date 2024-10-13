import youthArtworkImg from '@/assets/img/artworks/youth.jpg';
import lastDanceArtworkImg from '@/assets/img/artworks/last-dance.jpg';

const ivMenu = [
  {
    name: 'Indivisual',
    previewImgSrc: youthArtworkImg,
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
    previewImgSrc: lastDanceArtworkImg,
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
