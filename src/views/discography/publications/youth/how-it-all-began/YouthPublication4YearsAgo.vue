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
          Dianco와 PG-13이 매 곡 참여하는 합작품을 선보이고 싶었으며, 힙하고 젊은 감각의 곡들을 만들면서 재미를 추구하는
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
          20대 초반을 이야기 하는 앨범 속에서, 그 시절, 또 한명의 철부지와 함께 만든 이 여정의 시작점이 결국 끝마침을
          장식해주었고, 이 절묘한 결말이 마지막 곡에서 애틋한 향수를 불러일으킨다.
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
          노스욕, 헨던 공원
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

    <div class="table-of-contents-wrapper">
      <PublicationTableOfContents table="youth" :pagePrimaryIndex="1" :pageSecondaryIndex="0" />
    </div>

    <div id="next-nav" class="next-nav-wrapper" @click="selectNextNav()">
      <div class="next-page-title"><span>4 YEARS AGO</span></div>
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
import TextLink from '@/components/widgets/TextLink.vue';
import PublicationTableOfContents from '@/components/layout/table-of-contents/PublicationTableOfContents.vue';

const router = useRouter();

// Functions

const selectBackNav = () => {
  router.push({ name: 'YouthPublicationIntroductionImmersion' });
};

const selectNextNav = () => {
  router.push({ name: 'YouthPublication', hash: '#next-nav' });
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
