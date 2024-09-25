import latelyCarouselImg from '@/assets/img/lately.jpg';

import flyCarouselImg from '@/assets/img/fly.jpg';

import pdgProjectCraouselImg from '@/assets/img/pdg-project-2019.jpg';

import collectionArtworkImg from '@/assets/img/covers/collection.jpeg';
import collectionCarouselImg from '@/assets/img/collection.jpg';

import lastDanceArtworkImg from '@/assets/img/covers/last-dance.jpeg';
import lastDanceCarouselImg from '@/assets/img/last-dance.jpg';

// import youthArtworkImg from '@/assets/img/covers/youth.jpeg';

const ivDiscography = [
  {
    title: 'Last Dance',
    colors: {
      primary: '#D8A826',
      font: null,
    },
    media: {
      artwork: lastDanceArtworkImg,
      carousel: lastDanceCarouselImg,
    },
    platforms: {
      spotify: 'https://open.spotify.com/album/2unI47VdIhX4PpLIA8vFf0?highlight=spotify:track:0nL1ntF63UXNAwruuoaWfx',
      youtube: 'https://youtube.com/playlist?list=PLfhZYVxDt8FeU6FRCxkSfYYm9hZuOm1_d',
      appleMusic: 'https://music.apple.com/us/album/last-dance-single/1574115349',
      soundcloud: 'https://soundcloud.com/indivisualiv/sets/last-dance',
      deezer: 'https://deezer.com/us/album/240383532',
      amazonMusic: 'https://amazon.com/gp/product/B0982KW7GR',
    },
  },
  {
    title: 'Collection',
    colors: {
      primary: '#26264B',
      font: null,
    },
    media: {
      artwork: collectionArtworkImg,
      carousel: collectionCarouselImg,
    },
    platforms: {
      youtube: 'https://youtube.com/playlist?list=PLfhZYVxDt8Ff0wcQyznbqfDPoOB12qegM',
      soundcloud: 'https://soundcloud.com/indivisualiv/sets/collection',
    },
  },
  {
    title: 'PDG PROJECT [2019]',
    colors: {
      primary: '#D1D1D1',
      font: 'black',
    },
    media: {
      artwork: null,
      carousel: pdgProjectCraouselImg,
    },
    platforms: {
      soundcloud: 'https://soundcloud.com/official-pg13/sets/pdg-project-2019',
    },
  },
  {
    title: '종이비행기 (Fly!)',
    colors: {
      primary: '#1993B5',
      font: null,
    },
    media: {
      artwork: null,
      carousel: flyCarouselImg,
    },
    platforms: {
      youtube: 'https://youtube.com/watch?v=OSg0_Rz2iuU',
      soundcloud: 'https://soundcloud.com/indivisualiv/pg-13-fly-remastered',
    },
  },
  {
    title: 'Lately',
    colors: {
      primary: '#339FBD',
      font: null,
    },
    media: {
      artwork: null,
      carousel: latelyCarouselImg,
    },
    platforms: {},
  },
];

export default ivDiscography;
