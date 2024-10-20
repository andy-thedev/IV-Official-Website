<template>
  <div class="publication youth-depressed iv-page" id="youth-publication-page">
    <div class="back-nav-wrapper">
      <font-awesome-icon :icon="['fas', 'arrow-left-long']" class="back-nav-icon" @click="selectBackNav()" />
    </div>

    <IVPicture
      :fourkSrc="youthMedia.bts.autumnTrio['4k']"
      :qhdSrc="youthMedia.bts.autumnTrio['qhd']"
      :hdSrc="youthMedia.bts.autumnTrio['hd']"
      :mobileSrc="youthMedia.bts.autumnTrio['mobile']"
    >
      <img class="full-width-img" :src="youthMedia.bts.autumnTrio['fallback']" draggable="false" />
    </IVPicture>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Autumn trio (10.23.2022)<br />
          North York, Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          가을 삼총사 (10.23.2022)<br />
          노스욕, 헨던 공원
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            As members wander freely between takes, Yerin Lim, JAYAN, and Vermello (left to right) sit on a bench under
            the golden glow of amber autumn leaves.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            촬영 사이사이 멤버들이 자유롭게 돌아다니는 동안, 임예린, JAYAN, 그리고 Vermello(왼쪽에서 오른쪽)가 황금빛
            가을 낙옆 아래 벤치에 앉아 있다.
          </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          From my perspective, <i>Youth</i> is a deeply unsatisfactory and regrettable collection of works. Not a single
          track leaves me feeling satisfied with the final outcome and quite frankly, I am more ashamed than proud of
          it. However, despite this negative assessment of its quality, I believe that no other work for the rest of my
          life will ever hold as much personal meaning or attachment. This is because the development of this album was
          absolutely rigorous, filled with extreme events, and it wouldn't be an exaggeration to say that it
          single-handedly and drastically changed the entire direction of my life&mdash;and it all began with a constant
          cycle of significant effort with no progress being made.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          솔직히 말하자면, 나에게 <i>Youth</i>는 상당히 불만족스럽고 후회스러운 작품이다. 단 한 곡도 마음에 들게 나오지
          않았으며, 제작자의 입장에서 꽤나 부끄러운 결과물이라고 할 수 있다. 다만, 질적인 평가와 상반되게, 이 앨범만큼
          내 인생에서 개인적인 의미와 애착을 지닌 작품은 앞으로도 없을 것이라고 믿는다. 그 이유는 이 앨범의 개발 과정이
          너무나도 치열했고, 극적인 사건들로 가득했기 때문이다. 이 앨범이 내 삶의 방향 그 자체를 급격히 바꿔놓았다고
          해도 과언이 아닐 만큼, 이 4년간의 제작기는 혹독했고, 끊임없는 노력과 시간을 투자해도 진전이 없다는 좌절감의
          반복 속에서 시작된 여정이었다.
        </span>
      </p>
    </div>

    <div class="grid-img-container intermediate">
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
      <div class="grid-item-wrapper"></div>
    </div>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Vermello and PG-13 (10.23.2022)<br />
          North York, Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          Vermello와 PG-13 (10.23.2022)<br />
          노스욕, 헨던 공원
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            (Left) Vermello, a producer that played an existential role in the development of <i>Youth</i>, stares into
            the camera, with PG-13 and Roca Dianco posing in the background.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            (좌) 앨범 <i>Youth</i>의 발전에 실존적 역할을 한 프로듀서 Vermello가 카메라를 응시하고 있고, 뒤에는 PG-13과
            Roca Dianco가 포즈를 취하고 있다.
          </span>
        </p>
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en"> </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko"> </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en"> </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko"> </span>
      </p>
    </div>

    <div class="table-of-contents-wrapper">
      <PublicationTableOfContents table="youth" :pagePrimaryIndex="1" :pageSecondaryIndex="1" />
    </div>

    <div id="next-nav" class="next-nav-wrapper" @click="selectNextNav()">
      <div class="next-page-title"><span>TODO</span></div>
      <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="next-nav-icon" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { youthMedia } from '@/assets/data/iv-media.js';

import SupportedLanguages from '@/lib/enums/lang.js';

import { useGlobals } from '@/composables/useGlobals.js';

import IVPicture from '@/components/widgets/IVPicture.vue';
import PublicationTableOfContents from '@/components/layout/table-of-contents/PublicationTableOfContents.vue';

const router = useRouter();

// Functions

const selectBackNav = () => {
  router.push({ name: 'YouthPublication4YearsAgo', hash: '#next-nav' });
};

const selectNextNav = () => {
  // TODO
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';
@import '@/assets/css/styles/publication';

#youth-publication-page {
  transition: $transition-landing-header-darken;
}
</style>
