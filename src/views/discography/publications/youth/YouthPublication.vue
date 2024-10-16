<template>
  <div class="publication youth iv-page" id="youth-publication-page">
    <div class="back-nav-wrapper">
      <font-awesome-icon :icon="['fas', 'arrow-left-long']" class="back-nav-icon" @click="selectBackNav()" />
    </div>
    <IVPicture
      :fourkSrc="youthMedia.bts.groupGazeEdited['4k']"
      :qhdSrc="youthMedia.bts.groupGazeEdited['qhd']"
      :hdSrc="youthMedia.bts.groupGazeEdited['hd']"
      :mobileSrc="youthMedia.bts.groupGazeEdited['mobile']"
    >
      <img
        class="full-width-img first"
        :src="youthMedia.bts.groupGazeEdited['fallback']"
        draggable="false"
        id="first-img"
      />
    </IVPicture>
    <div class="img-caption first">
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

    <div class="table-of-contents-wrapper">
      <YouthTableOfContents :pagePrimaryIndex="0" :pageSecondaryIndex="0" />
    </div>

    <div id="next-nav" class="next-nav-wrapper" @click="selectNextNav()">
      <div class="next-page-title"><span>IMMERSION</span></div>
      <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="next-nav-icon" />
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
  router.push({ name: 'DiscographyDetails', params: { id: 'youth' } });
};

const selectNextNav = () => {
  router.push({ name: 'YouthIntroductionImmersion' });
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

.table-of-contents-wrapper {
  margin-bottom: 0;
}
</style>
