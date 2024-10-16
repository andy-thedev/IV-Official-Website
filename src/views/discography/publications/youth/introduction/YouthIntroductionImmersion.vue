<template>
  <div class="publication iv-page" id="youth-publication-page">
    <div class="back-nav-wrapper">
      <font-awesome-icon :icon="['fas', 'arrow-left-long']" class="back-nav-icon" @click="selectBackNav()" />
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
          빠져있었고, 심하게 말하자면 "음침한 그지새끼" - 무엇보다 극도로 강렬하며 극단적인 사람이었다. 내 상황과 환경에
          기대 위장하고 싶지도 않고, 그냥 나라는 사람 그 자체가 그랬다. 그때 나를 알았던 사람, 누구든 한 명에게
          물어본다면, 나와의 교류, 혹은 관계를 흥미롭거나 불편했다고 말할 것이다 (대부분 후자일 가능성이 더 크지만).
          나는 그저 재미와 자극을 쫒으며, 다른 모든 것을 내팽개친 채 충동적이고 극단적인 일들을 추구하며 뛰어들었다.
          물질이든 활동이든, 무엇이 되었든 간에 나는 온갖 무모한 짓을 하고 다녔다. 더 자세히 말할 수도 있겠지만, 아마
          NDA가 필요할 것이고, 결국 그 시절 모든 것을 냉소적으로 해석하던 내가 만들어낸 또 다른 산물을 토해낼 뿐일
          것이라 믿는다.
        </span>
      </p>
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

    <div class="table-of-contents-wrapper">
      <YouthTableOfContents :pagePrimaryIndex="0" :pageSecondaryIndex="1" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import { youthMedia } from '@/assets/data/iv-media.js';

import SupportedLanguages from '@/lib/enums/lang.js';

import { useGlobals } from '@/composables/useGlobals.js';
import { useLandingHeader } from '@/composables/headers/useLandingHeader.js';

import IVPicture from '@/components/widgets/IVPicture.vue';
import YouthTableOfContents from '@/components/layout/table-of-contents/YouthTableOfContents.vue';

const router = useRouter();

// Functions

const selectBackNav = () => {
  router.push({ name: 'YouthPublication', hash: '#next-nav' });
};

/*
  For header and page background color automation.

  Changes header and page background color when user scrolls
  to a specific section of the page.
*/
onMounted(() => {
  const targetSection = document.getElementById('first-img');

  if (targetSection) {
    const observerOptions = {
      root: null, // Use the viewport as the container
      threshold: 0.5, // Trigger when 50% of the target is visible
    };

    const backgroundColorChangeDiv = document.getElementById('youth-publication-page');

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          useLandingHeader.updateHeaderAndFontColors('#4179b2', 'white');
          backgroundColorChangeDiv.style.backgroundColor = '#4179b2';
        } else {
          useLandingHeader.updateHeaderAndFontColors('#416492', 'white');
          backgroundColorChangeDiv.style.backgroundColor = '#416492';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(targetSection);

    onUnmounted(() => {
      observer.disconnect();
    });
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';
@import '@/assets/css/styles/publication';

#youth-publication-page {
  transition: $transition-landing-header-darken;
}

.back-nav-wrapper {
  margin: 0 0 10px 0;

  cursor: pointer;

  .back-nav-icon {
    font-size: 20px;

    color: rgba(255, 255, 255, 0.5);
  }
}

.publication {
  padding: 100px 100px 150px 100px;

  background-color: $iv-youth-blue;
  color: white;
}
</style>
