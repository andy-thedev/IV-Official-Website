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
          노스욕, 헨던 공원
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
          "Youth", released in late-2024, is PG-13's first official LP release, written during his early twenties.
          <br />
          Much like its theme, the album endured four years of struggles and unexpected events before its release. From
          the catastrophic loss of months of hard work to moving across continents to overcome technical limitations,
          the entire development process and the work itself mirror the dynamic, intense, and unpredictable nature of
          our youth and adolescence.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          "Youth," 2024년 말에 발매된 PG-13의 첫 번째 정식 LP 앨범은 그의 20대 초반에 쓰여졌다. <br />
          이 앨범은 주제와 마찬가지로, 발매되기까지 4년간의 고난과 예기치 않은 사건들을 겪었다. 수개월 간의 노력이
          물거품이 된 상황부터, 기술적 한계를 극복하기 위해 대륙을 이동해야 했던 과정까지, 이 모든 개발 과정과 작품
          내용은 철부지처럼 역동적이고, 강렬하며, 예측 불가능한 성격을 그대로 반영하고 있다.
        </span>
      </p>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Unlike the way youth is often portrayed in media, this album aims to capture a distinct and particular
          perspective&mdash;one that is far more intense and painful. <br />
          The reocurring themes of chaos, highs and lows, and conflict reside in the album's sound and texture,
          presenting an inconsiderate collection for the average listener. With tracks that are lengthy, abstract, and
          at times overwhelmingly intense, "Youth" rejects the conventional advantages of modern music exploitation, and
          stays true to its expressive purpose.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이 앨범은 미디어에서 흔히 그려지는 청춘과는 달리, 훨씬 더 강렬하고 고통스러운 시각을 담아내려 한다. 혼돈,
          기복, 그리고 갈등이라는 반복적인 주제들은 앨범의 사운드와 질감에 녹아 있어, 일반 청취자에게는 쉽지 않은 모음을
          제공한다. 길고 추상적이며 때로는 부담스러운 트랙들로 구성된 "Youth"는 현대 음악의 상업적 이점을 거부하고, 그
          본연의 표현적 목적에 충실하다.
        </span>
      </p>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          The project goes so far as to complete the entire album with just a $70 microphone, a $100 audio interface,
          and nothing else. Recorded in raw environments along the natural journey, such as hotel rooms and closets, the
          final product undeniably carries major flaws and regret, particularly in sound quality. Despite the ability to
          address these issues in the later stages of development, it was decided that these imperfections are an
          integral part of "Youth" and should remain to preserve the immature steps of the journey.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이 앨범은 단 10만원짜리 마이크와 15만원짜리 오디오 인터페이스만으로 완성되었다. 호텔 방이나 옷장과 같은,
          생생하지만 척박한 환경 속에서 녹음된 최종 결과물은 특히 음질에서 뚜렷한 결함과 아쉬움을 남겼다. 개발 후반부에
          이러한 문제를 해결할 수 있었음에도 불구하고, 이 불완전함이 "Youth"의 중요한 일부라고 판단되어, 미숙했던 그
          시절을 보존하듯 그대로 남겨두기로 결정되었다.
        </span>
      </p>
    </div>

    <div class="table-of-contents-wrapper">
      <PublicationTableOfContents table="youth" :pagePrimaryIndex="0" :pageSecondaryIndex="0" />
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
import PublicationTableOfContents from '@/components/layout/table-of-contents/PublicationTableOfContents.vue';

const router = useRouter();

// Functions

const selectBackNav = () => {
  router.push({ name: 'DiscographyDetails', params: { id: 'youth' } });
};

const selectNextNav = () => {
  router.push({ name: 'YouthPublicationIntroductionImmersion' });
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
      threshold: 0.4, // Trigger when 40% of the target is visible
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
