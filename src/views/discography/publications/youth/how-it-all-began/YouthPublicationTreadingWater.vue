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
          absolutely rigorous, filled with extreme events over a prolonged period of time, and it wouldn't be an
          exaggeration to say that it single-handedly and drastically changed the entire direction of my life&mdash;and
          it all began with a constant cycle of significant effort with no progress being made.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          솔직히 말하자면, 나에게 <i>Youth</i>는 상당히 불만족스럽고 후회스러운 작품이다. 단 한 곡도 마음에 들게 나오지
          않았으며, 제작자의 입장에서 꽤 부끄러운 결과물이라고 할 수 있다. 그러나 질적인 평가와 달리, 이 앨범만큼 내
          인생에서 개인적인 의미와 애착을 지닌 작품은 앞으로도 없을 것이라고 믿는다. 그 이유는 이 앨범의 개발 과정이
          너무나도 치열했고, 오랜 시간 동안 극적인 사건들로 가득했기 때문이다. 이 앨범이 내 삶의 방향을 급격히
          바꿔놓았다고 해도 과언이 아닐 만큼, 이 4년간의 제작기는 혹독했고, 끊임없는 노력과 시간을 투자해도 진전이
          없다는 좌절감의 반복 속에서 시작된 여정이었다.
        </span>
      </p>
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Throughout all these trials and moments of endurance, there was Vermello&mdash;the producer who helped me
          create every single track I had released before "Youth", and one of my closest friends I've known since high
          school. If there is anyone who has gotten me to where I am today, without hesitation, it would be him.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이 모든 역경과 인내의 순간들 속에서 언제나 함께했던 사람이 있다. 바로 "Vermello"&mdash;내가 음악을 처음 시작할
          때부터 이 앨범을 출시하기 전까지, 내 모든 작업물을 함께 만든 친구이자 프로듀서였으며, 고등학교 때부터 알던
          형이였다. 오늘의 내가 있기까지, 주저 없이 그가 가장 큰 역할을 했다고 말할 수 있다.
        </span>
      </p>
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Having just started our full-time, SWE jobs to support our needs, though we were able to make a living, we did
          not have the luxury of professional music studios or a dedicated space to freely pursue our musical interests.
          The only option at our disposal was Vermello's 1+1 bedroom apartment, where we confined ourselves in a barely
          3x3 meter den to avoid disturbing his older brother and risk losing the only place we had. Equipped with just
          a $70 microphone, $100 audio interface, a pair of cheap headphones, and monitoring speakers, this was all we
          had to materialize our mental compositions. We had no mentors or fellow artists to turn to, and with the
          little free time left from our full-time jobs, we researched and made music, guessing every technique,
          decision, and answer at every step.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이제 막 취직하여 풀타임 SWE 직업으로 생계를 유지하던 우리는 먹고 사는 데는 지장이 없었지만, 전문 음악
          스튜디오나 음악적 관심을 자유롭게 추구할 수 있는 전용 공간 같은 사치를 누릴 수 없었다. 우리의 유일한 선택지는
          Vermello의 1+1룸 아파트였고, 그곳에서 우리는 그의 형에게 방해가 되지 않기 위해, 단 3x3미터 남짓한 공간에서
          한정된 시간에만 작업할 수 있었다. 그 외엔 70달러짜리 마이크, 100달러짜리 오디오 인터페이스, 저렴한 헤드폰과
          모니터링 스피커만이 우리가 가진 전부였고, 이 장비들로 우리의 머릿속에서 구상한 음악을 실현해야 했다.
          우리에게는 의지할 멘토도, 노하우나 지식을 나눌 수 있는 다른 아티스트도 없었으며, 풀타임 직장에서 남은 얼마 안
          되는 여가 시간에 기술을 연구하고, 모든 결정과 정답을 하나하나 추측해 가며 음악을 만들어나갔다.
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
