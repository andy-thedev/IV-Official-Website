import SupportedLanguages from '@/lib/enums/lang';

import melonIcon from '@/assets/icons/platforms/melon.svg';
import genieIcon from '@/assets/icons/platforms/genie.svg';
import bugsIcon from '@/assets/icons/platforms/bugs.svg';
import floIcon from '@/assets/icons/platforms/flo.svg';
import vibeIcon from '@/assets/icons/platforms/vibe.svg';

export const SupportedPlatforms = Object.freeze({
  publication: 'publication',
  spotify: 'spotify',
  youtube: 'youtube',
  appleMusic: 'appleMusic',
  soundcloud: 'soundcloud',
  deezer: 'deezer',
  amazonMusic: 'amazonMusic',
  melon: 'melon',
  genie: 'genie',
  vibe: 'vibe',
  flo: 'flo',
  bugs: 'bugs',
});

export const PlatformNameMapping = Object.freeze({
  [SupportedPlatforms.publication]: 'Publication',
  [SupportedPlatforms.spotify]: 'Spotify',
  [SupportedPlatforms.youtube]: 'Youtube',
  [SupportedPlatforms.appleMusic]: 'Apple Music',
  [SupportedPlatforms.soundcloud]: 'Soundcloud',
  [SupportedPlatforms.deezer]: 'Deezer',
  [SupportedPlatforms.amazonMusic]: 'Amazon Music',
  [SupportedPlatforms.melon]: 'Melon',
  [SupportedPlatforms.genie]: 'Genie',
  [SupportedPlatforms.vibe]: 'Vibe',
  [SupportedPlatforms.flo]: 'Flo',
  [SupportedPlatforms.bugs]: 'Bugs',
});

export const PlatformIconMapping = Object.freeze({
  [SupportedPlatforms.publication]: { type: 'fontawesome', faType: 'fas', icon: 'barcode' },
  [SupportedPlatforms.spotify]: { type: 'fontawesome', faType: 'fab', icon: 'spotify' },
  [SupportedPlatforms.youtube]: { type: 'fontawesome', faType: 'fab', icon: 'youtube' },
  [SupportedPlatforms.appleMusic]: { type: 'fontawesome', faType: 'fab', icon: 'apple' },
  [SupportedPlatforms.soundcloud]: { type: 'fontawesome', faType: 'fab', icon: 'soundcloud' },
  [SupportedPlatforms.deezer]: { type: 'fontawesome', faType: 'fab', icon: 'deezer' },
  [SupportedPlatforms.amazonMusic]: { type: 'fontawesome', faType: 'fab', icon: 'amazon' },
  [SupportedPlatforms.melon]: { type: 'svg', faType: null, icon: melonIcon },
  [SupportedPlatforms.genie]: { type: 'svg', faType: null, icon: genieIcon },
  [SupportedPlatforms.vibe]: { type: 'svg', faType: null, icon: vibeIcon },
  [SupportedPlatforms.flo]: { type: 'svg', faType: null, icon: floIcon },
  [SupportedPlatforms.bugs]: { type: 'svg', faType: null, icon: bugsIcon },
});

export const OrderedInnatePlatforms = [SupportedPlatforms.publication];

export const OrderedKoreanPlatforms = [
  SupportedPlatforms.melon,
  SupportedPlatforms.genie,
  SupportedPlatforms.vibe,
  SupportedPlatforms.flo,
  SupportedPlatforms.bugs,
];

export const OrderedGlobalPlatforms = [
  SupportedPlatforms.spotify,
  SupportedPlatforms.youtube,
  SupportedPlatforms.appleMusic,
  SupportedPlatforms.soundcloud,
  SupportedPlatforms.deezer,
  SupportedPlatforms.amazonMusic,
];

export const LangOrderedPlatforms = Object.freeze({
  [SupportedLanguages.KR]: [...OrderedInnatePlatforms, ...OrderedKoreanPlatforms, ...OrderedGlobalPlatforms],
  [SupportedLanguages.EN]: [...OrderedInnatePlatforms, ...OrderedGlobalPlatforms, ...OrderedKoreanPlatforms],
});
