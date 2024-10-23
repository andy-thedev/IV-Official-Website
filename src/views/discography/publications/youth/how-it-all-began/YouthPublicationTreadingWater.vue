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
          In terms of craftmanship, <i>Youth</i> is a deeply unsatisfactory and regrettable collection of works. Not a
          single track leaves me feeling satisfied with the final outcome and quite frankly, I am more ashamed than
          proud of it. However, in contrast to this qualitative assessment, I believe that no other work for the rest of
          my life will ever hold as much personal meaning or attachment. This is because the development of this album
          was absolutely rigorous, filled with extreme events over a prolonged period of time, and it wouldn't be an
          exaggeration to say that it single-handedly and drastically changed the entire direction of my life&mdash;and
          it all began with a constant cycle of investing significant effort with no progress being made.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          솔직히 말하자면, 완성도 면에서 <i>Youth</i>는 상당히 불만족스럽고 후회스러운 작품이다. 단 한 곡도 원래
          기대했던 만큼 나오지 않았으며, 제작자의 입장에서 꽤 부끄러운 결과물이라고 할 수 있다. 그러나 질적인 평가와
          달리, 이 앨범만큼 내 인생에서 개인적인 의미와 애착을 지닌 작품은 앞으로도 없을 것이라고 믿는다. 그 이유는 이
          앨범의 개발 과정이 너무나도 치열했고, 오랜 시간 동안 극적인 사건들로 가득했기 때문이다. 이 앨범이 내 삶의
          방향을 급격히 바꿔놓았다고 해도 과언이 아닐 만큼, 이 4년간의 제작기는 혹독했고, 끊임없는 노력과 시간을
          투자해도 진전이 없다는 좌절감의 반복 속에서 시작된 여정이었다.
        </span>
      </p>
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Throughout all the foreshadowed trials and moments of endurance, there was Vermello&mdash;the producer who
          helped me create every single track I had released before "Youth", and one of my closest friends I've known
          since high school. If there is anyone who has gotten me to where I am, as PG-13 today, without hesitation, it
          would be him.
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          이 모든 역경과 인내의 순간들 속에서 언제나 함께했던 사람이 있다. 바로 "Vermello"&mdash;내가 음악을 처음 시작할
          때부터 이 앨범을 출시하기 전까지, 내 모든 작업물을 함께 만든 친구이자 프로듀서였으며, 고등학교 때부터 알던
          형이었다. 오늘의 PG-13이 있기까지, 주저 없이 그가 가장 큰 역할을 했다고 말할 수 있다.
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
          이제 막 취직하여, 풀타임 SWE 직업으로 생계를 유지하던 우리는 먹고 사는 데는 지장이 없었지만, 전문 음악
          스튜디오나 음악적 관심을 자유롭게 추구할 수 있는 전용 공간 같은 사치를 누릴 수 없었다. 우리의 유일한 선택지는
          Vermello의 1+1룸 아파트였고, 그곳에서 우리는 그의 형에게 방해가 되지 않기 위해, 단 3x3미터 남짓한 공간에서
          한정된 시간에만 작업할 수 있었다. 그 외엔 10만원짜리 마이크, 15만원짜리 오디오 인터페이스, 저렴한 헤드폰과
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
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.youthfulTrio['4k']"
          :qhdSrc="youthMedia.bts.youthfulTrio['qhd']"
          :hdSrc="youthMedia.bts.youthfulTrio['hd']"
          :mobileSrc="youthMedia.bts.youthfulTrio['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.youthfulTrio['fallback']" draggable="false" />
        </IVPicture>
      </div>
    </div>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Vermello and PG-13 (10.23.2022)<br />
          Youthful trio (10.23.2022)<br />
          North York, Hendon Park
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          Vermello와 PG-13 (10.23.2022)<br />
          철부지 삼총사 (10.23.2022) <br />
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
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            (Right) Vermello, PG-13, Unlimited(Paris Molokwu) strike playful, humorous poses during the B-shot photo
            shoot.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            (우) Vermello, PG-13, 그리고 Unlimited(Paris Molokwu)가 B컷 사진 촬영 중 장난스럽고 유머러스한 포즈를 취하고
            있다.
          </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Being no musical or technical geniuses, we made little progress towards our vision within a short period of
          time. In hindsight, this was mainly due to our incorrect assumptions about technical choices and our extremely
          limited experience and knowledge in music production. Coupled with the fact that the music featured on
          <i>Youth</i> was ambitious in scale and technically demanding, while the means and equipment we had were far
          from sufficient, we simply could not achieve the sound we wanted.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          우리는 아쉽게도 음악적, 기술적 천재가 아니었기에, 짧은 시간 안에 우리의 비전을 이루는 쾌거를 달성하기는
          어려웠다.<br />
          이제 와서 되돌아보면, 이는 음악 제작에 대한 경험과 지식이 극도로 제한적이었고, 그로 인해 잘못된 가정들과
          기술적 선택들을 했기 때문이었다. 더군다나 <i>Youth</i>에 담긴 음악은 규모 면에서 야심차고 기술적으로도
          까다로웠지만, 우리가 가진 수단과 장비는 그에 한참 미치지 못했기에 더욱 원하는 사운드를 달성할 수 없었다.
        </span>
        <font-awesome-icon :icon="toggleCollapseIcon" class="hidden-content-toggler" @click="toggleCollapseContent" />
      </p>
      <p v-if="isContentCollapsed" class="collapsible-text">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          For example, in the case of track no. 9, "DROP", we wanted a track that started with sweet, melodic vocals
          enveloped in rich reverb, until the listener was met with powerful, choir-like chant/singing in the chorus.
          However, the type-beat we purchased had the main guitar overly compressed, making it impossible for the
          vocals' mid-low frequencies, or reverb to break through the dense guitar. To make matters worse, our $70
          microphone could not capture the mid-low range adequetly, leaving the vocals sounding light, weak, and
          "floating" from the rest of the track&mdash;something we thought that we could address in the mix.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          예를 들어, 9번 트랙 "DROP"의 경우, 감미로운 보컬이 풍부한 리버브에 감싸여, 코러스에서는 합창단이 부르는 듯한
          웅장한 사운드를 원했으나, 우리가 구매한 타입 비트는 메인 기타에 지나치게 컴프가 걸려 있어 보컬의 중저음이나
          리버브가 전혀 뜷고 나오지 못하는 구조였다. 거기에 더해, 우리의 10만원짜리 마이크는 중저음을 담아내지 못해
          목소리가 가볍고, "뜨는" 듯한 결과물을 초래했다. 미숙했던 우리는, 믹스 단계에서 이런 부분들을 극복할 수 있을
          것이라 믿고 있었다.
        </span>
      </p>
      <p v-if="isContentCollapsed" class="collapsible-text">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          In the chorus, since we did not have access to a choir, we attempted to stack multiple takes to simulate one,
          but we did not realize that layering more tracks flattens the dynamics, resulting in a muddy and weak mix. At
          the time, we did not understand that this issue could not be resolved without adjusting our fundamental
          approach, and these were just some of the countless implications we faced, treading water due to insufficient
          means, time and knowledge.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          또한, 코러스에서는 합창단이 없었기에 여러 테이크를 쌓아 합창을 구현하려 했지만, 트랙을 여러 개 쌓을수록
          다이나믹이 평평해져 이도저도 아닌, 지저분하고 빈약한 사운드가 나올 수밖에 없다는 사실을 우리는 그때 몰랐다.
          당시 우리는 이러한 문제가 근본적인 접근 방식을 조정하지 않고서는 해결될 수 없다는 사실을 이해하지 못했고, 이런
          예시들은 <i>Youth</i>를 작업하는 도중 우리가 직면한 수많은 문제들 중 일부에 불과했다.
        </span>
      </p>
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Ultimately, it can be said that we tried to rationalize shortcomings by blaming suspects far from the actual
          cause, but with the core issue rooted in something so fundamental, we were essentially trying to solve a
          challenges in a way, that was impossible to resolve.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          궁극적으로 말하자면, 우리는 우리의 한계를 실제 원인과 동떨어진 것들을 의심하며 고치려 노력했지만, 핵심 문제는
          근본적인 부분에 뿌리를 두고 있었기에 결국 해결할 수 없는 난제들을 풀려고 했던 셈이었다.
        </span>
      </p>
    </div>

    <!-- TODO: Image -->

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en"></span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          그렇게 "철부지"를 작업한지 1년이 지나, 대략 60%정도 완성되었다고 느낄 무렵, 엎친 데 덮친 격으로 Vermello의
          컴퓨터 하드 드라이브가 갑자기 망가졌다.
        </span>
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import { youthMedia } from '@/assets/data/iv-media.js';

import SupportedLanguages from '@/lib/enums/lang.js';

import { useGlobals } from '@/composables/useGlobals.js';

import IVPicture from '@/components/widgets/IVPicture.vue';
import PublicationTableOfContents from '@/components/layout/table-of-contents/PublicationTableOfContents.vue';

const router = useRouter();

// Data
const isContentCollapsed = ref(false);

const toggleCollapseIcon = computed(() => {
  return isContentCollapsed.value ? ['fas', 'chevron-up'] : ['fas', 'chevron-down'];
});

// Functions

const selectBackNav = () => {
  router.push({ name: 'YouthPublication4YearsAgo', hash: '#next-nav' });
};

const toggleCollapseContent = () => {
  isContentCollapsed.value = !isContentCollapsed.value;
};

const selectNextNav = () => {
  // TODO
  // router.push({ name: '' });
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
