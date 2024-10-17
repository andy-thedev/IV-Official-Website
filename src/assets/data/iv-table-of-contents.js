export const publicationTOC = {
  youth: [
    {
      title: {
        ko: '소개',
        en: 'INTRODUCTION',
      },
      description: {
        ko: '청춘이라는 혼란스러운 시기 속, 어른이 되어가는 과정을 담은 작품을 소개합니다.<br/> 끊임없이 앞으로 달려야만 하는 세상 속에서, 이 앨범은 듣는 이에게 "그 시절을 돌아보는", 드문 쉼표를 선사합니다.',
        en: `An introduction to a collection of tracks that explore the raw emotions of becoming an "adult" in a chaotic age. <br /> In a world that constantly races forward, an album buried amidst an anarchy of pursuit offers a rare pause to reflect and reminisce about our youth.`,
      },
      children: [
        {
          title: {
            ko: '초록',
            en: 'ABSTRACT',
          },
          routeName: 'YouthPublication',
        },
        {
          title: {
            ko: '몰입',
            en: 'IMMERSION',
          },
          routeName: 'YouthPublicationIntroductionImmersion',
        },
      ],
    },
    {
      title: {
        ko: '시작',
        en: 'HOW IT ALL BEGAN',
      },
      description: {
        ko: '이 모든 것은 어떻게 시작되었는가? 4년 전 그 때로 돌아가 우리의 이야기를 시작해본다.',
        en: 'An engaging story of how everything began, 4 years ago, on that day.',
      },
      children: [
        {
          title: {
            ko: '4년 전, 어느 날',
            en: '4 YEARS AGO',
          },
          routeName: 'YouthPublication4YearsAgo',
        },
      ],
    },
  ],
};
