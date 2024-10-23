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
          Vermello and PG-13 (10.23.2022) - North York, Hendon Park<br />
          Youthful trio (10.23.2022) - North York, Hendon Park<br />
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          Vermello와 PG-13 (10.23.2022) - 노스욕, 헨던 공원<br />
          철부지 삼총사 (10.23.2022) - 노스욕, 헨던 공원<br />
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
        <font-awesome-icon
          :icon="toggleExpandContent1Icon"
          class="toggle-expand-content-icon"
          @click="toggleExpandContent1"
        />
      </p>
      <p v-if="isContent1Expanded" class="expandable-text">
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
      <p v-if="isContent1Expanded" class="expandable-text">
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

    <IVPicture
      :fourkSrc="youthMedia.bts.vermelloHomeStudioDark['4k']"
      :qhdSrc="youthMedia.bts.vermelloHomeStudioDark['qhd']"
      :hdSrc="youthMedia.bts.vermelloHomeStudioDark['hd']"
      :mobileSrc="youthMedia.bts.vermelloHomeStudioDark['mobile']"
    >
      <img
        class="full-width-img intermediate"
        :src="youthMedia.bts.vermelloHomeStudioDark['fallback']"
        draggable="false"
      />
    </IVPicture>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Home studio (11.24.2022)<br />
          Toronto, Vermello's house
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          홈 스튜디오 (11.24.2022)<br />
          토론토, Vermello의 집
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            Vermello's home studio sits empty in darkness, with subtle neon lights and the glow from the monitor
            illuminating the solitude.<br />
            At this time, the Apollo audio interface was purchased in Vermello's interest to ease hardware limitations,
            but was never used for the actual production of <i>Youth</i> due to PG-13's leave in 2023.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            Vermello의 홈 스튜디오가 어둠 속에 고요히 자리하고 있으며, 은은한 네온 불빛과 모니터에서 나오는 빛이 그
            고요함을 외롭게 밝혀주고 있다.
          </span>
        </p>
      </div>
    </div>

    <div class="text-block-container">
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          A year had passed, and just when we felt it was about 60% complete, things took a turn for the
          worse&mdash;Vermello's computer hard drive suddenly died. All of the source files, recordings, ableton
          projects, mixes&mdash;pretty much everything were no longer recoverable, and we had to face the hard truth
          that we would have to restart a year's worth of work from scratch, all over again.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          그렇게 "철부지"를 작업한지 1년이 지나, 대략 60%정도 완성되었다고 느낄 무렵, 엎친 데 덮친 격으로 Vermello의
          컴퓨터 하드 드라이브가 갑자기 망가졌다. 이로 인해 모든 소스 파일, 녹음, 에이플톤 프로젝트, 믹스&mdash;거의
          모든 것이 복구 불가능해졌고, 우리는 1년치 작업을 처음부터 다시 시작해야 한다는 냉혹한 현실을 받아들여야 했다.
        </span>
      </p>
      <p>
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Despite the unfortunate situation, I was not frustrated or discougraged. In fact, after working on the project
          for about a year, our ears had developed, and we were beginning to feel that the tracks no longer met our
          standards. Having a personal philosophy that everything in life happens for a reason and can be seen as an
          opportunity at will, we chose to erase all of our efforts and biases from the past year. Instead, we would aim
          for a higher goal in terms of quality and artistic value.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          불운한 상황에도 불구하고, 나는 좌절하거나 낙담하지 않았다. 사실, 약 1년간 프로젝트에 매달리면서 우리의 귀는
          발전했고, 기존의 트랙들이 더 이상 우리의 기준에 부합하지 않는다는 느낌을 받기 시작했던 참이었다. 모든 일에는
          이유가 있고, 태도와 수습에 따라 기회로 삼을 수 있다는 개인적인 철학을 가지고 있기에, 우리는 지난 1년간의
          노력과 고정관념을 모두 지우기로 했다. 대신, 더 높은 품질과 예술적 가치를 목표로 삼기로 결심했다.
        </span>
        <font-awesome-icon
          :icon="toggleExpandContent2Icon"
          class="toggle-expand-content-icon"
          @click="toggleExpandContent2"
        />
      </p>
      <p v-if="isContent2Expanded" class="expandable-text">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          This was when the project turned into an album at scale. Since I had always been writing songs alongside the
          immediate works in progress, I wanted to elevate the project's quality and ambition by discarding songs I felt
          were no longer up to standards and add ones that enhanced value and quality while fitting the initial motive.
          This was when tracks like "24", "Up the hill", "Forgettable", and "DROP" were added to the tracklist, and the
          project began to expand into something between an EP and LP.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          이때 프로젝트는 본격적으로 앨범 규모로 확장되었다. 작업 중이던 곡들과 함께 항상 새로운 곡들을 써왔던 나는, 더
          이상 기준에 맞지 않는 곡들을 버리고, 초기 의도에 부합하면서도 가치와 품질을 높여줄 곡들을 추가해 프로젝트의
          질과 야망을 높이고 싶었다. 이때 "24", "Up the hill", "Forgettable", 그리고 "DROP" 같은 곡들이 트랙리스트에
          추가되었고, 프로젝트는 EP와 LP 사이의 형태로 확장되기 시작했다.
        </span>
      </p>
      <p v-if="isContent2Expanded" class="expandable-text">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          For quite some time, we debated whether tracks like "Art is on my mind" and "24", which are more immature,
          hip-hop-based, and aggressive in sound, should coexist in the same release as tracks like "Up the hill",
          "DROP", and "Forgettable", which sounded more mature, pop-based, and melodic. Dividing the releases into two
          parts (<i>Youthful Immaturity</i>, and <i>DROP</i>) would not only isolate the distinct messages of each
          release but also offer practical advantages. Two shorter releases, catering to different listeners and tastes,
          aligned with the modern music industry's trend, as short-form content was gaining popularity. Large,
          collective releases quickly became disadvantageous, and high-volume bursts of single releases had become the
          standard approach to success.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          꽤 오랜 시간 동안 우리는 "Art is on my mind"와 "24"처럼 철부지스럽고, 힙합 기반의 공격적인 사운드를 가진
          곡들이 "Up the hill", "DROP", "Forgettable"처럼 더 성숙하고, 팝 기반의 멜로디 중심 곡들과 동일한 발매에
          공존해야 할지에 대해 논의했다. <i>철부지</i>와 <i>DROP</i>이라는 제목으로 발매를 나누는 것은 각각의 곡이
          전달하는 메시지를 분리할 뿐만 아니라 실리적인 이점도 제공했다. 서로 다른 청취자층과 음악적 취향을 겨냥한 두
          개의 짧은 발매는, "숏폼 콘텐츠"가 인기를 끌고 있던 현대 음악 산업의 트렌드에 부합했다. 짧고 자주 발매하는 싱글
          릴리즈 방식이 성공의 표준이 되어가고 있었고, 발매의 규모가 커질수록 점차 불리해지는 추세였기 때문이다.
        </span>
      </p>
      <p v-if="isContent2Expanded" class="expandable-text">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Despite the unfavourable forecast, I decided to release everything as one album, with my discussion with Roca
          Dianco being the final deciding factor. Music has always been a means of relief, expression, and personal
          enjoyment for me, with a focus on craftmanship and respect rather than fame or money. I never wanted to be
          famous, and I've always trusted my abilities as a software engineer to make a good living. As a human being,
          I'm sometimes distracted by the pull of popular trends and what the majority leans towards, but my true
          intention has always been to achieve one impractical goal&mdash;doing something cool and stylish&mdash;at a
          level that demands respect from all contenders in the field.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          불리한 전망에도 불구하고, 나는 모든 곡을 하나의 앨범으로 발매하기로 결정했다. 이 결정의 최종적인 계기는 Roca
          Dianco와의 논의였다. 음악은 나에게 언제나 해소의 수단이자 표현의 도구, 그리고 개인적인 즐거움이었고, 나에게
          음악은 명성이나 돈보다는 완성도와 존중에 중점을 둔 작업이었다. 나는 원래부터 유명해지고 싶지 않았고,
          소프트웨어 엔지니어로서의 내 능력을 믿어 안정된 생활을 할 수 있다고 생각해왔다. 물론 인간으로서 다수의
          의견이나 큰 무리에 흔들릴 때도 있지만, 내 야망은 언제나 하나의 유치한 목표에 있었다&mdash;바로 멋지고 간지나는
          무언가를 만들고, 이 분야의 모든 경쟁자들에게 존중받을 만한 수준에 도달하는 것이다.
        </span>
      </p>
      <p v-if="isContent2Expanded" class="expandable-text">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          Thus, rather than chasing the hype and prioritizing practicality like everyone else, Roca Dianco and I
          concluded that it was far more "cooler" for an artist to possess a full-length LP, especially in this day and
          age. Afterall, the album, from the beginning, was meant to capture and express a unique aspect of my personal
          youth&mdash;not to chase materialistic rewards or benefits.
        </span>
        <span v-if="useGlobals.currLang == SupportedLanguages.ko">
          그렇게 Roca Dianco와 나는, 유행을 쫓거나 실리를 우선시하는 대신, 요즘같은 시대일 수록 아티스트가 정규 LP를
          갖추는 것이 훨씬 더 "멋있다"는 결론을 내렸다. 더군다나 이 앨범은 처음부터 물질적 보상이나 이익을 추구하는 것이
          아니라, 나의 개인적인 청춘을 담고 표현하기 위한 것이었다.
        </span>
      </p>
    </div>

    <div class="grid-img-container intermediate">
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.vermelloHomeStudioBirdsEyeView['4k']"
          :qhdSrc="youthMedia.bts.vermelloHomeStudioBirdsEyeView['qhd']"
          :hdSrc="youthMedia.bts.vermelloHomeStudioBirdsEyeView['hd']"
          :mobileSrc="youthMedia.bts.vermelloHomeStudioBirdsEyeView['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.vermelloHomeStudioBirdsEyeView['fallback']" draggable="false" />
        </IVPicture>
      </div>
      <div class="grid-item-wrapper">
        <IVPicture
          :fourkSrc="youthMedia.bts.vermelloHomeStudioWider['4k']"
          :qhdSrc="youthMedia.bts.vermelloHomeStudioWider['qhd']"
          :hdSrc="youthMedia.bts.vermelloHomeStudioWider['hd']"
          :mobileSrc="youthMedia.bts.vermelloHomeStudioWider['mobile']"
        >
          <img class="grid-img" :src="youthMedia.bts.vermelloHomeStudioWider['fallback']" draggable="false" />
        </IVPicture>
      </div>
    </div>
    <div class="img-caption">
      <p class="caption-title">
        <span v-if="useGlobals.currLang == SupportedLanguages.en">
          The den's bird's eye view (11.24.2022) - Toronto, Vermello's house<br />
          Vermello producing (11.24.2022) - Toronto, Vermello's house<br />
        </span>
        <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
          위에서 본 음악 소굴 (11.24.2022) - 토론토, Vermello의 집<br />
          작업하는 Vermello (11.24.2022) - 토론토, Vermello의 집<br />
        </span>
      </p>
      <div class="caption-text">
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            (Left) Vermello pretends to be producing music while shooting a video in bird's eye view for PG-13's
            documentation.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            (좌) Vermello는 PG-13의 기록을 위해 마치 음악을 제작하는 듯한 장면을 연출하고 있다.
          </span>
        </p>
        <p>
          <span v-if="useGlobals.currLang == SupportedLanguages.en">
            (Right) While shooting for documentation, Vermello actually ends up working on the opened Ableton project.
          </span>
          <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">
            (우) 장면을 연출하던 도중, 에이블톤 프로젝트를 연 김에 실제로 작업을 시작하게 된 Vermello다.
          </span>
        </p>
      </div>
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
const isContent1Expanded = ref(false);
const isContent2Expanded = ref(false);

const toggleExpandContent1Icon = computed(() => {
  return isContent1Expanded.value ? ['fas', 'chevron-up'] : ['fas', 'chevron-down'];
});
const toggleExpandContent2Icon = computed(() => {
  return isContent2Expanded.value ? ['fas', 'chevron-up'] : ['fas', 'chevron-down'];
});

// Functions

const selectBackNav = () => {
  router.push({ name: 'YouthPublication4YearsAgo', hash: '#next-nav' });
};

const toggleExpandContent1 = () => {
  isContent1Expanded.value = !isContent1Expanded.value;
};
const toggleExpandContent2 = () => {
  isContent2Expanded.value = !isContent2Expanded.value;
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
