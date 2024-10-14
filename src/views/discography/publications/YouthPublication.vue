<template>
  <div class="publication iv-page">
    <IVPicture
      :fourkSrc="youthMedia.artwork['4k']"
      :qhdSrc="youthMedia.artwork['qhd']"
      :hdSrc="youthMedia.artwork['hd']"
      :mobileSrc="youthMedia.artwork['mobile']"
    >
      <img class="full-width-img first" :src="youthMedia.artwork['fallback']" draggable="false" />
    </IVPicture>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Youth (10.23.2022)<br />
          North York, Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          철부지 (10.23.2022)<br />
          North York, Hendon Park
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            Gen 1 members of INDIVISUAL and friends stand from left to right - Vermello, Meesung Park, Yerin Lim, Roca
            Dianco, Unlimited (Paris Molokwu), PG-13, and JAYAN.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            INDIVISUAL 1세대 멤버들과 친구들이 왼쪽에서 오른쪽으로 서 있다 - Vermello, 박미성, 임예린, Roca Dianco,
            Unlimited (Paris Molokwu), PG-13, JAYAN.
          </span>
        </p>
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            This photo shoot for the album cover of "Youth" marks the final gathering of the presented members, before
            PG-13's journey to South Korea to complete the album's production.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            앨범 "Youth"의 커버 사진 촬영일은 PG-13이 앨범 제작을 완성하기 위해 한국으로 떠나기 전, 함께한 멤버들이
            마지막으로 모인 날이었다.
          </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Youth, adolescence, immaturity. <br />
          When reading these words, I imagine many will envision a common range of sensations - the fresh, vibrant,
          carefree days of innocence, or the playful, boundless potential of a blooming soul in its early adventure. In
          the blink of an eye, our days of springtide fade, slipping into memory as we rush headlong into the
          complexities of adulthood, while the season of longing continues to shrink - visible only in fleeting glimpses
          through the rear-view mirror.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          청춘, 철부지, 미숙함. <br />
          이 단어들을 읽을 때, 많은 사람들이 떠올리는 감정의 범위는 비슷할 거라고 상상한다. 신선하고 활기차며, 아무 걱정
          없던 순수한 나날들이나, 이제 막 피어나기 시작한 영혼이 펼치는 끝없는 가능성의 장난기 가득한 시기. 눈 깜짝할
          사이에 우리의 봄날은 희미해지고, 우리는 어른이 되기 위한 복잡한 길로 급히 달려간다. 그러는 동안 그리움의
          계절은 점점 더 줄어들고, 이제는 뒷유리로 잠깐씩 스쳐 지나가는 모습으로만 보일 뿐이다.</span
        >
      </p>
      <!-- <p>
        In a world that constantly races forward, an album buried amidst an anarchy of pursuit offers a rare pause. A
        collection of tracks that explore the raw emotions of becoming an "adult" in a chaotic age.
      </p> -->
      <!-- <p>
        Art, nicotine, a seventy-dollar microphone, and two slices of pizza. If I had to put it in one word, I'd
        probably call it youth.
      </p> -->
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          For this 27-year-old, however, a vastly different range of connotations and concepts arise from the depths of
          near-distant nostalgia. One that stirs a damp, hostile scent of intensity. In contrast to the energetic,
          colorful connotations of prime juvenescence, the silouhette of my youth much more resembles that of an abysmal
          void - as one would say, "down-bad", or having hit rock-bottom.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          그러나 이 27살의 나에게는 전혀 다른 개념들과 의미들이 떠오른다. 가깝지만 먼 추억의 깊은 곳에서 올라오는 습하고
          거친 강렬함의 냄새가 감돌고 있을 뿐, 희망적이고 활기찬 단어들과 상반 되게, 나의 청춘은 조금 더 심연의 모습을
          본뜨고 있었다.
        </span>
      </p>
    </div>

    <IVPicture
      :fourkSrc="youthMedia.bts.aGrassLyingDown['4k']"
      :qhdSrc="youthMedia.bts.aGrassLyingDown['qhd']"
      :hdSrc="youthMedia.bts.aGrassLyingDown['hd']"
      :mobileSrc="youthMedia.bts.aGrassLyingDown['mobile']"
    >
      <img class="full-width-img" :src="youthMedia.bts.aGrassLyingDown['fallback']" draggable="false" />
    </IVPicture>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Sunday afternoon (10.23.2022)<br />
          North York, Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          일요일 오후 (10.23.2022)<br />
          North York, Hendon Park
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            Following the album cover shoot, Gen 1 members of INDIVISUAL and friends lie down in a public park for
            additional A-shots. Meesung Park is absent from this photo, being the photographer.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            앨범 커버 촬영 이후, INDIVISUAL 1세대 멤버들과 친구들이 추가 A컷 촬영을 위해 공원에 누워있다. 미성이는
            사진을 찍고 있어 이 사진에는 나오지 못했다.
          </span>
        </p>
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            On this day, PG-13 had already planned for this publication, gathering content with the expectation of
            results years down the line.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            이날 PG-13은 이미 이 페이지를 포함한 "철부지"의 출판 계획과 전시 기법을 마친 상태였고, 몇 년 뒤의 결과를
            기대하며 준비물을 수집하고 있었다.
          </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          In my early twenties, my life was vastly different, and I was a very, very different person. Addicted, broke,
          and most of all, extremely intense. Not only in circumstances, but as a person entirely. Ask anyone who knew
          me back then, and they would either describe interactions with me as either interesting, or just straight up
          rude and uncomfortable (with more the latter than the former). Chasing "fun" with all other means disregarded,
          I was partaking in radical, impulsive schemes, ranging from substance to dangerous activities. Going into more
          detail would either require an NDA, or just be regurgitating another byproduct of my cynical interpretation of
          everything, at that time.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          내 20대 초반은 지금과 완전히 달랐고, 나는 아주, 아주 다른 사람이었다. 진취적인 일은 극도로 피하며 중독에
          빠져있었고, 한마디로 "음침한 그지새끼" - 무엇보다 극도로 강렬하며 극단적인 사람이었다. 내 상황과 환경에 기대
          위장하고 싶지도 않고, 그냥 나라는 사람 그 자체가 그랬다. 그때 나를 알았던 사람, 누구든 한 명에게 물어본다면,
          나와의 교류, 혹은 관계를 흥미롭거나 불편했다고 말할 것이다 (대부분 후자일 가능성이 더 크지만). 나는 그저
          재미와 자극을 쫒으며, 다른 모든 것을 내팽개친 채 충동적이고 극단적인 일들을 추구하며 뛰어들었다. 물질이든
          활동이든, 무엇이 됬었든 간에 나는 온갖 무모한 짓을 하고 다녔다. 더 자세히 말할 수도 있겠지만, 아마 NDA가
          필요할 것이고, 결국 그 시절 모든 것을 냉소적으로 해석하던 내가 만들어낸 또 다른 산물을 토해낼 뿐일 것이라
          믿는다.
        </span>
      </p>
      <!-- I began this album back in mid-2021, more than 3 years ago from today (late-2024), and -->
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          So what's with all of this "TMI"? <br />
          In order to fully understand this album, and why such an album came to be, one must be looking through the
          lense of my "Youth" on a personal level. This album is not intended to be a banger, an opportunity to find
          good songs, or even a great listen. It is simply a desperate attempt to relieve the overwhelming amount of
          stress, pain, drawback, and frustration, collected in hindsight to grasp the now-fading scent of youth that
          was once so intense, extreme, and vivid.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          그래서 왜 이런 "TMI"를 구구절절 늘어놓고 있을까? <br />
          이 앨범을 제대로 이해하고, 왜 이런 앨범이 나왔는지 알기 위해서는 저자의 20대 초반을 투영해 관찰해야 한다. 이
          앨범은 히트곡을 만들거나, 좋은 노래를 찾을 수 있는 보물상자를 제공하기 위해 제작된 것이 아니다. 그저 한때
          감당하기 힘들 정도로 차오르던 스트레스, 고통, 후회, 답답함을 해소하려던 필사적인 시도들을 고이 모아, 너무나도
          강렬하고 생생했던 청춘의 향기를, 더 이상 희미해지기 전에 붙잡으려는 몸부림 같은 것이다.
        </span>
      </p>
    </div>

    <div class="grid-img-container">
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.vermelloAndPg13['4k']"
          :qhdSrc="youthMedia.bts.vermelloAndPg13['qhd']"
          :hdSrc="youthMedia.bts.vermelloAndPg13['hd']"
          :mobileSrc="youthMedia.bts.vermelloAndPg13['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.vermelloAndPg13['fallback']" draggable="false" />
        </IVPicture>
      </div>
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.kangeonAndPg13['4k']"
          :qhdSrc="youthMedia.bts.kangeonAndPg13['qhd']"
          :hdSrc="youthMedia.bts.kangeonAndPg13['hd']"
          :mobileSrc="youthMedia.bts.kangeonAndPg13['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.kangeonAndPg13['fallback']" draggable="false" />
        </IVPicture>
      </div>
    </div>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Vermello and PG-13 (10.23.2022)<br />
          Roca Dianco and PG-13 (10.23.2022)<br />
          North York, Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          Vermello와 PG-13 (10.23.2022)<br />
          Roca Dianco와 PG-13 (10.23.2022)<br />
          North York, Hendon Park
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            (Left) Vermello, a producer that played an existential role in the development of "Youth", stares into the
            camera, with PG-13 and Roca Dianco posing in the background.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            (좌) 앨범 "Youth"의 발전에 실존적 역할을 한 프로듀서 Vermello가 카메라를 응시하고 있고, 뒤에는 PG-13과 Roca
            Dianco가 포즈를 취하고 있다.
          </span>
        </p>
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            (Right) Roca Dianco, the only featuring artist in the album "Youth", stands shoulder to shoulder with PG-13.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            (우) 앨범 "Youth"의 유일한 피처링 아티스트인 Roca Dianco가 PG-13과 어깨를 나란히 하며 서 있다.
          </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          The album began development in early 2021, initially planned as an extension of the
          <TextLink text='"PDG PROJECT 2019"' toName="DiscographyDetails" toParamId="pdg-project-2019" />. The project
          was titled the "Roca Dianco X PG-13 Project", consisting of 4 rebellious, avant-garde hip-hop tracks, with
          every track featuring Roca Dianco and PG-13. It was an impulsive project, prospected to be a collaborative
          effort between the two members, with the main intention of having fun while producing hip, youthful tracks.
          However, due to Roca Dianco's personal circumstances and subsequent stagnation, the project gradually fell
          under PG-13's sole direction, and both members eventually decided that the initial motive had sufficiently
          depreciated.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이 앨범은 2021년 초에 개발을 시작했으며, 처음에는
          <TextLink text='"PDG PROJECT 2019"' toName="DiscographyDetails" toParamId="pdg-project-2019" />의 연장선으로
          계획되었다. "Roca Dianco X PG-13 Project"라는 제목으로, 반항적이고 아방가르드한 힙합 트랙 4개를 담아 Roca
          Dianco와 PG-13이 모두 참여하는 합작품을 선보이고 싶었으며, 힙하고 젊은 감각의 곡들을 만들면서 재미를 추구하는
          것이 주된 의도였다. 그러나 Roca Dianco의 개인적인 사정과 그로 인한 작업 정체로 인해 프로젝트는 점차 PG-13의
          단독 작업물이 되어갔고, 결국 두 멤버는 초기의 목적이 충분히 퇴색했다고 판단하게 되었다.
        </span>
      </p>
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          It was time to move on, but one song from this project would carry its legacy years down the road, as the
          final track of the album, "Youth". <br />
          Featuring Roca Dianco as the only featuring artist in the entire album, the final track brings deep personal
          meaning. Fittingly, the ancestral remnant that sparked this journey with a fellow, immature friend back in my
          early twenties now completes the album, encapsulating that same period of my life.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          결국, "Roca Dianco X PG-13 Project"는 흐지부지하게 사라졌지만, 이 프로젝트의 흔적은 몇 년 후, "Youth"의 마지막
          트랙으로 남게 되었다. <br />
          Roca Dianco는 앨범 전체에서 유일한 피처링 아티스트이며, "Youth"의 마지막 트랙은 나에게 특별한 의미를 지닌다.
          20대 초반을 이야기 하는 앨범 속에서, 그 시절, 또 한명의 철부지와 함께 만든 이 여정의 시작점이 결국 앨범의
          끝마침을 장식해주었고, 이 절묘한 결말이 그 마지막 곡에서 애틋한 향수를 불러일으킨다.
        </span>
      </p>
    </div>

    <!-- <img class="full-width-img" :src="testImg" draggable="false" />
    <div class="img-caption">
      <p class="caption-title">
        Youth (10.23.2022)<br />
        A parking lot in North York
      </p>
      <div class="caption-text">
        <p>
          Following the album cover shoot, select members are smoking in a nearby parking lot. PG-13 (25 years old),
          suddenly bursts into laughter while conversing with friends.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { youthMedia } from '@/assets/data/iv-media.js';

import SupportedLanguages from '@/lib/enums/lang.js';

import { useGlobals } from '@/composables/useGlobals.js';

import IVPicture from '@/components/widgets/IVPicture.vue';
import TextLink from '@/components/widgets/TextLink.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';

.publication {
  padding: 100px 100px 150px 100px;

  display: flex;

  font-family: 'Roboto Slab';

  background-color: $iv-youth-blue;
  color: white;

  .full-width-img {
    width: 100%;

    margin: 50px 0 20px 0;

    &.first {
      margin: 0 0 20px 0;
    }
  }

  .grid-img-container {
    width: 100%;

    margin: 50px 0 20px 0;

    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);

    .grid-item-wrapper {
      position: relative;

      .grid-img {
        width: 100%;
        height: auto;
      }
    }

    &.four-grid {
      grid-template-rows: repeat(2, 1fr);
    }
  }

  .img-caption {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 14px;

    margin: 0 0 100px 0;

    .caption-title {
      white-space: nowrap;
      font-style: italic;

      margin: 0 100px 0 0;
    }

    .caption-text {
      p {
        margin: 0 0 3px 0;
      }
    }
  }

  .text-block-container {
    width: 100%;

    font-size: 16px;

    p {
      margin: 0 0 15px 0;
    }
  }
}

@media (min-width: 2160px) {
  .iv-page {
    .img-caption {
      .caption-text {
        p {
          display: inline;
        }
      }
    }
  }
}

@media (max-width: 1499px) {
  .iv-page {
    padding: 150px 80px 150px 80px;

    .img-caption {
      flex-direction: column;
      justify-content: center;

      .caption-title {
        margin: 0 0 3px 0;
      }
    }
  }
}

@media (max-width: 800px) {
  .iv-page {
    .img-caption {
      margin: 0 0 50px 0;
    }
  }
}

@media (max-width: 599px) {
  .iv-page {
    padding: 100px 25px 100px 25px;

    .full-width-img {
      margin: 15px 0 15px 0;
    }

    .img-caption {
      margin: 0 0 40px 0;

      font-size: 8px;
    }
  }
}
</style>
