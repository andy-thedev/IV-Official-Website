import discographyPreviewImg from '@/assets/img/covers/last-dance.jpg';

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
    name: 'IV',
    previewImgSrc: discographyPreviewImg,
    children: [
      {
        name: 'Home',
        routeName: 'LandingPage',
      },
      {
        name: 'Discography',
        routeName: 'IVDiscography',
      },
    ],
  },
  {
    name: 'PG-13',
    previewImgSrc: discographyPreviewImg,
    menu: [
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
