import latelyArtworkImg from '@/assets/img/artworks/lately.jpeg';
import latelyCarouselImg from '@/assets/img/carousel/lately.jpg';

import flyArtworkImg from '@/assets/img/artworks/fly.jpeg';
import flyCarouselImg from '@/assets/img/carousel/fly.jpg';

import pdgProjectArtworkImg from '@/assets/img/artworks/pdg-project-2019.jpeg';
import pdgProjectCarouselImg from '@/assets/img/carousel/pdg-project-2019.jpg';

import collectionArtworkImg from '@/assets/img/artworks/collection.jpeg';
import collectionCarouselImg from '@/assets/img/carousel/collection.jpg';

import lastDanceArtworkImg from '@/assets/img/artworks/last-dance.jpeg';
import lastDanceCarouselImg from '@/assets/img/carousel/last-dance.jpg';

import youthArtworkImg from '@/assets/img/artworks/youth.jpg';
import youthIntermediateImg from '@/assets/img/bts/youth/a-grass-lying-down.jpg';

const ivDiscography = [
  {
    id: 'youth',
    title: {
      EN: 'Youth',
      KR: '철부지',
    },
    dates: {
      release: '2024-10-04',
    },
    colors: {
      primary: '#416492',
      font: null,
    },
    media: {
      artwork: youthArtworkImg,
      carousel: youthIntermediateImg,
      intermediate: youthIntermediateImg,
    },
    platforms: {
      publication: 'YouthPublication',
    },
    collaborators: {
      directors: ['PG-13'],
      artists: ['PG-13'],
      producers: ['Vincent Park'],
      artwork: ['Meesung Park', 'PG-13'],
    },
    feature: {
      iv: {
        carousel: true,
        discography: true,
      },
      pg13: {
        carousel: true,
        discography: true,
      },
    },
  },
  {
    id: 'last-dance',
    title: {
      EN: 'LAST DANCE',
      KR: 'LAST DANCE',
    },
    dates: {
      release: '2021-06-28',
    },
    colors: {
      primary: '#D8A826',
      font: null,
    },
    media: {
      artwork: lastDanceArtworkImg,
      carousel: lastDanceCarouselImg,
      intermediate: lastDanceCarouselImg,
    },
    platforms: {
      melon: 'https://www.melon.com/album/detail.htm?albumId=11165846',
      genie: 'https://www.genie.co.kr/detail/albumInfo?axnm=83503159',
      vibe: 'https://vibe.naver.com/album/8830730',
      flo: 'https://www.music-flo.com/detail/album/eaaayozaz/albumtrack',
      bugs: 'https://music.bugs.co.kr/album/20543823?wl_ref=list_ab_01',
      spotify: 'https://open.spotify.com/album/2unI47VdIhX4PpLIA8vFf0?highlight=spotify:track:0nL1ntF63UXNAwruuoaWfx',
      youtube: 'https://youtube.com/playlist?list=PLfhZYVxDt8FeU6FRCxkSfYYm9hZuOm1_d',
      appleMusic: 'https://music.apple.com/us/album/last-dance-single/1574115349',
      soundcloud: 'https://soundcloud.com/indivisualiv/sets/last-dance',
      deezer: 'https://deezer.com/us/album/240383532',
      amazonMusic: 'https://amazon.com/gp/product/B0982KW7GR',
    },
    collaborators: {
      directors: ['PG-13'],
      artists: ['PG-13'],
      producers: ['Vermello'],
      artwork: ['Meesung Park', 'PG-13'],
    },
    feature: {
      iv: {
        carousel: true,
        discography: true,
      },
      pg13: {
        carousel: true,
        discography: true,
      },
    },
  },
  {
    id: 'collection',
    title: {
      EN: 'Collection',
      KR: 'Collection',
    },
    dates: {
      release: '2020-11-17',
    },
    colors: {
      primary: '#26264B',
      font: null,
    },
    media: {
      artwork: collectionArtworkImg,
      carousel: collectionCarouselImg,
      intermediate: collectionCarouselImg,
    },
    platforms: {
      youtube: 'https://youtube.com/playlist?list=PLfhZYVxDt8Ff0wcQyznbqfDPoOB12qegM',
      soundcloud: 'https://soundcloud.com/indivisualiv/sets/collection',
    },
    collaborators: {
      directors: ['PG-13'],
      artists: ['PG-13'],
      producers: ['Vermello'],
      artwork: ['PG-13'],
    },
    feature: {
      iv: {
        carousel: true,
        discography: true,
      },
      pg13: {
        carousel: true,
        discography: true,
      },
    },
  },
  {
    id: 'pdg-project-2019',
    title: {
      EN: 'PDG PROJECT [2019]',
      KR: 'PDG PROJECT [2019]',
    },
    dates: {
      release: '2019-01-31',
    },
    colors: {
      primary: '#D1D1D1',
      font: 'black',
    },
    media: {
      artwork: pdgProjectArtworkImg,
      carousel: pdgProjectCarouselImg,
      intermediate: pdgProjectCarouselImg,
    },
    platforms: {
      soundcloud: 'https://soundcloud.com/official-pg13/sets/pdg-project-2019',
    },
    collaborators: {
      directors: ['PG-13'],
      artists: ['PG-13'],
      producers: ['Vermello'],
      artwork: ['PG-13'],
    },
    feature: {
      iv: {
        carousel: true,
        discography: true,
      },
      pg13: {
        carousel: true,
        discography: true,
      },
    },
  },
  {
    id: 'fly',
    title: {
      EN: 'Fly!',
      KR: '종이비행기',
    },
    dates: {
      release: '2021-04-27',
    },
    colors: {
      primary: '#1993B5',
      font: null,
    },
    media: {
      artwork: flyArtworkImg,
      carousel: flyCarouselImg,
      intermediate: flyCarouselImg,
    },
    platforms: {
      youtube: 'https://youtube.com/watch?v=OSg0_Rz2iuU',
      soundcloud: 'https://soundcloud.com/indivisualiv/pg-13-fly-remastered',
    },
    collaborators: {
      directors: ['PG-13'],
      artists: ['PG-13'],
      producers: ['Vermello'],
      artwork: ['PG-13'],
    },
    feature: {
      iv: {
        carousel: true,
        discography: true,
      },
      pg13: {
        carousel: true,
        discography: true,
      },
    },
  },
  {
    id: 'lately',
    title: {
      EN: 'Lately',
      KR: 'Lately',
    },
    dates: {
      release: '2019-08-19',
    },
    colors: {
      primary: '#339FBD',
      font: null,
    },
    media: {
      artwork: latelyArtworkImg,
      carousel: latelyCarouselImg,
      intermediate: latelyCarouselImg,
    },
    platforms: {},
    collaborators: {
      directors: ['PG-13'],
      artists: ['PG-13', 'Vermello'],
      producers: ['Vermello'],
      artwork: ['PG-13'],
    },
    feature: {
      iv: {
        carousel: true,
        discography: true,
      },
      pg13: {
        carousel: true,
        discography: true,
      },
    },
  },
];

export default ivDiscography;
