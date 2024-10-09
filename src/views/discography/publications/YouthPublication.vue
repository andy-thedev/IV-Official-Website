<template>
  <div class="publication iv-page">
    <img class="full-width-img" :src="youthArtworkImg" draggable="false" />
    <div class="img-caption">
      <p class="caption-title">
        Youth (10.23.2022)<br />
        North York, Hendon Park
      </p>
      <div class="caption-text">
        <p>
          Gen 1 members of Indivisual and friends stand from left to right - Vermello (Daniel Min), Yerin Lim, Unlimited
          (Paris Molokwu), PG-13, JAYAN (Jay An), Meesung Park, Daniel Kangeon Choi.
        </p>
        <p>
          This photo shoot for the album cover of "Youth" marks the final gathering of the presented members, before
          PG-13's journey to South Korea to complete the album's production.
        </p>
      </div>
    </div>
    <div class="text-block-container">
      <p v-if="useGlobals.currLang == SupportedLanguages.EN">
        Youth, adolescence, immaturity. <br />
        When reading these words, I imagine many will envision a common range of sensations - the fresh, vibrant,
        carefree days of innocence, or the playful, boundless potential of a blooming soul in its early adventure. In
        the blink of an eye, our days of springtide fade, slipping into memory as we rush headlong into the complexities
        of adulthood, while the season of longing continues to shrink - visible only in fleeting glimpses through the
        rear-view mirror.
      </p>
      <p v-else-if="useGlobals.currLang == SupportedLanguages.KR">
        청춘, 사춘기, 미성숙. <br />
        이 단어들을 읽을 때, 많은 사람들이 떠올리는 감정의 범위는 비슷할 거라고 상상한다. 신선하고 활기차며, 아무 걱정
        없던 순수한 나날들이나, 이제 막 피어나기 시작한 영혼이 펼치는 끝없는 가능성의 장난기 가득한 시기. 눈 깜짝할
        사이에 우리의 봄날은 희미해지고, 우리는 어른이 되기 위한 복잡한 길로 급히 달려간다. 그러는 동안 그리움의 계절은
        점점 더 줄어들고, 이제는 뒷유리로 잠깐씩 스쳐 지나가는 모습으로만 보일 뿐이다.
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
      <p v-if="useGlobals.currLang == SupportedLanguages.EN">
        For this 27-year-old, however, a vastly different range of connotations and concepts arise from the depths of
        near-distant nostalgia. One that stirs a damp, hostile scent of intensity. In contrast to the energetic,
        colorful connotations of prime juvenescence, the silouhette of my youth much more resembles that of an abysmal
        void - as one would say, "down-bad", or having hit rock-bottom.
      </p>
      <p v-else-if="useGlobals.currLang == SupportedLanguages.KR">
        그러나 이 27살의 나에게는 전혀 다른 개념들과 의미들이 떠오른다. 가깝지만 먼 추억의 깊은 곳에서 올라오는 습하고
        거친 강렬함의 냄새가 감돌고 있을 뿐, 희망적이고 활기찬 단어들과 상반 되게, 나의 청춘은 조금 더 심연의 모습을
        본뜨고 있었다.
      </p>
    </div>
    <div class="text-block-container">
      <p v-if="useGlobals.currLang == SupportedLanguages.EN">
        Now, enough with being articulate. Let's talk. <br />
        In my early twenties, my life was vastly different, and I was a very, very different person. Addicted, broke,
        and most of all, <b>extremely intense</b>. Not only in circumstances, but as a person entirely. Ask anyone who
        knew me back then, and they would either describe interactions with me as either interesting, or uncomfortable
        (with more the latter than the former). Chasing "fun" with all other means disregarded, I was partaking in
        radical, impulsive schemes, ranging from substance to dangerous activities. I could go into more detail, but it
        would either require an NDA, or be just another byproduct of my cynical interpretation of everything, at that
        time.
      </p>
      <p v-else-if="useGlobals.currLang == SupportedLanguages.KR">
        이제 그만. 이딴 허례허식은 거두절미하고, 조금 더 솔직해져보자. <br />
        내 20대 초반은 지금과 완전히 달랐고, 나는 아주, 아주 다른 사람이었다. 진취적인 일은 극도로 피하며 중독에
        빠져있었고, 한마디로 "음침한 그지새끼" - 무엇보다 극도로 강렬하며 극단적인 사람이었다. 내 상황과 환경에 기대
        위장하고 싶지도 않고, 그냥 나라는 사람 그 자체가 그랬다. 그때 나를 알았던 사람, 누구든 한 명에게 물어본다면,
        나와의 교류, 혹은 관계를 흥미롭거나 불편했다고 말할 것이다 (대부분 후자일 가능성이 더 크지만). 나는 그저 재미와
        자극을 쫒으며, 다른 모든 것을 내팽개친 채 충동적이고 극단적인 일들을 추구하며 뛰어들었다. 물질이든 활동이든,
        무엇이 됬었든 간에 나는 온갖 무모한 짓을 하고 다녔다. 더 자세히 말할 수도 있겠지만, 아마 NDA가 필요할 것이고,
        결국 그 시절 모든 것을 냉소적으로 해석하던 내가 만들어낸 또 다른 산물을 토해낼 뿐일 것이라 믿는다.
      </p>
      <!-- I began this album back in mid-2021, more than 3 years ago from today (late-2024), and -->
    </div>
    <div class="text-block-container">
      <p v-if="useGlobals.currLang == SupportedLanguages.EN">
        So what's with all of this "TMI"? <br />
        In order to fully understand this album, and why such an album came to be, one must be looking through the lense
        of my "Youth" on a personal level. This album is not intended to be a banger, an opportunity to find good songs,
        or even a great listen. It is simply a desperate attempt to relieve the overwhelming amount of stress, pain,
        drawback, and frustration, collected in hindsight to grasp the now-fading scent of youth that was once so
        intense, extreme, and vivid.
      </p>
      <p v-else-if="useGlobals.currLang == SupportedLanguages.KR">
        그래서 이딴 TMI를 구구절절 늘어놓고 있을까? <br />
        이 앨범을 제대로 이해하고, 왜 이런 앨범이 나왔는지 알기 위해서는 저자의 20대 초반을 렌즈삼아 바라봐야 한다. 이
        앨범은 히트곡을 만들거나, 좋은 노래를 찾을 수 있는 보물상자를 제공하기 위해 제작된 것이 아니다. 그저 한때
        감당하기 힘들 정도로 차오르던 스트레스, 고통, 후회, 답답함을 해소하려던 필사적인 시도들을 고이 모아, 너무나도
        강렬하고 극단적이었으며 생생했던 청춘의 향기를, 더 이상 희미해지기 전에 붙잡으려는 몸부림 같은 것이다.
      </p>
    </div>
  </div>
</template>

<script setup>
import youthArtworkImg from '@/assets/img/artworks/youth.jpg';

import SupportedLanguages from '@/lib/enums/lang.js';

import { useGlobals } from '@/composables/useGlobals.js';
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

    margin: 0 0 20px 0;
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

@media (max-width: 599px) {
  .iv-page {
    padding: 100px 25px 100px 25px;

    .full-width-img {
      margin: 0 0 15px 0;
    }

    .img-caption {
      font-size: 8px;
    }
  }
}
</style>
