<template>
  <div class="publication youth-depressed iv-page" id="youth-publication-page">
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
          노스욕, 헨던 공원
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
          없던 순수한 나날들이나, 이제 막 피어나기 시작한 영혼이 펼치는, 끝없는 가능성의 장난기 가득한 시기. 눈 깜짝할
          사이에 우리의 봄날은 희미해지고, 우리는 어른이 되기 위한 복잡한 길로 급히 달려간다. 그러는 동안 그리운 시절은
          점점 더 옅어지고, 이제는 뒷유리로 잠깐씩 스쳐 지나가는 모습으로만 보일 뿐이다.
        </span>
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
          그러나 이 27살의 나에게는 전혀 다른 개념들과 의미들이 떠오른다. 가깝지만 먼 추억, 그 깊은 곳에서 올라오는
          습하고 거친 냄새가 강렬하게 감돌고 있을 뿐, 희망적이고 활기찬 단어들과 상반 되게, 나의 청춘은 조금 더 심연의
          모습을 본뜨고 있었다.
        </span>
      </p>
    </div>

    <div class="grid-img-container intermediate">
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.basementPg13ParisMf['4k']"
          :qhdSrc="youthMedia.bts.basementPg13ParisMf['qhd']"
          :hdSrc="youthMedia.bts.basementPg13ParisMf['hd']"
          :mobileSrc="youthMedia.bts.basementPg13ParisMf['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.basementPg13ParisMf['fallback']" draggable="false" />
        </IVPicture>
      </div>
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.basementPg13ParisSide['4k']"
          :qhdSrc="youthMedia.bts.basementPg13ParisSide['qhd']"
          :hdSrc="youthMedia.bts.basementPg13ParisSide['hd']"
          :mobileSrc="youthMedia.bts.basementPg13ParisSide['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.basementPg13ParisSide['fallback']" draggable="false" />
        </IVPicture>
      </div>
    </div>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Unlimited and PG-13 (10.23.2022)<br />
          North York, a parking lot near Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          Unlimited와 PG-13 (10.23.2022)<br />
          노스욕, 헨던 공원 근처 어느 주차장에서
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            After the photo shoot at Hendon park, Unlimited(Paris Molokwu) and PG-13 sit in a nearby parking lot,
            waiting for additional B-shots to be taken. <br />
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            헨던 공원에서의 사진 촬영 후, Unlimited(Paris Molokwu)와 PG-13이 추가 B컷 촬영을 기다리며 근처 주차장에 앉아
            있다. <br />
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
          rude and uncomfortable. Chasing "fun" with all other means disregarded, I was partaking in radical, impulsive
          schemes, ranging from substance to dangerous activities.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          내 20대 초반은 지금과 완전히 달랐고, 나는 아주, 아주 다른 사람이었다. 진취적인 일은 극도로 피하며 중독에
          빠져있었고, 빈털터리였으며, 무엇보다도 극도로 강렬하며 극단적인 사람이었다. 내 상황과 환경에 기대 위장하고
          싶지도 않고, 그냥 나라는 사람 그 자체가 그랬다. 그때 나를 알았던 사람, 누구든 한 명에게 물어본다면, 나와의
          교류, 혹은 관계를 흥미롭거나 불편했다고 말할 것이다. 나는 그저 재미와 자극을 쫒으며, 다른 모든 것을 내팽개친
          채 충동적이고 극단적인 일들을 추구하며 뛰어들었다. 물질이든 활동이든, 무엇이 되었든 간에 나는 온갖 무모한 짓을
          하고 다녔다.
        </span>
      </p>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          In order to fully understand this album, and why such an album came to be, one must be looking through the
          lense of my <i>Youth</i> on a personal level. This album is not intended to be a banger, an opportunity to
          find good songs, or even a great listen. It is simply a desperate attempt to relieve the overwhelming amount
          of stress, pain, drawback, and frustration, collected in hindsight to grasp the now-fading scent of youth that
          was once so intense, extreme, and vivid.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이 앨범을 제대로 이해하고, 왜 이런 앨범이 나왔는지 알기 위해서는 저자의 20대 초반을 투영해 관찰해야 한다. 이
          앨범은 히트곡을 만들거나, 좋은 노래를 찾을 수 있는 보물상자를 제공하기 위해 제작된 것이 아니다. 그저 한때
          감당하기 힘들 정도로 차오르던 스트레스, 고통, 후회, 답답함을 해소하려던 필사적인 시도들을 고이 모아, 너무나도
          강렬하고 생생했던 청춘의 향기를, 더 이상 희미해지기 전에 붙잡으려는 몸부림 같은 것이다.
        </span>
      </p>
    </div>

    <div class="table-of-contents-wrapper">
      <PublicationTableOfContents table="youth" :pagePrimaryIndex="0" :pageSecondaryIndex="1" />
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
import PublicationTableOfContents from '@/components/layout/table-of-contents/PublicationTableOfContents.vue';

const router = useRouter();

// Functions

const selectBackNav = () => {
  router.push({ name: 'YouthPublicationAbstract', hash: '#next-nav' });
};

const selectNextNav = () => {
  router.push({ name: 'YouthPublication4YearsAgo' });
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
