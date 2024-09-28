import youthArtworkImg from '@/assets/img/artworks/youth.jpeg';
import lastDanceArtworkImg from '@/assets/img/artworks/last-dance.jpeg';

{
  /* <p>An aesthetic dive into an elaborate collection of our releases.</p>
<p>
  Learn more about the details, human struggles, and history
  behind each work, through various lenses of artistic presentation and content delivery.
</p>
<p>
  Portrayed with images behind the scenes, explanations from its creators,
  you will be able to immerse yourself into the perspective of your favourite artists.
</p> */
}

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
