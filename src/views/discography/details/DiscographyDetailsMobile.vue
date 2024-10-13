<template>
  <div class="discography-details iv-page">
    <!-- Section: Overview -->
    <div class="album-overview section">
      <!-- Album artwork -->
      <div class="album-img-wrapper">
        <!-- Back navigation -->
        <div class="back-nav-wrapper">
          <font-awesome-icon :icon="['fas', 'arrow-left-long']" class="back-nav-icon" @click="selectBackNav()" />
        </div>
        <IvPicture
          :fourkSrc="discographyDetails.media.artwork['4k']"
          :qhdSrc="discographyDetails.media.artwork['qhd']"
          :hdSrc="discographyDetails.media.artwork['hd']"
          :mobileSrc="discographyDetails.media.artwork['mobile']"
        >
          <img :src="discographyDetails.media.artwork['fallback']" draggable="false" />
        </IvPicture>
      </div>

      <!-- Album details -->
      <div class="album-details-container">
        <!-- Title -->
        <div class="album-title-wrapper">
          <h1 class="album-title text-xl">{{ discographyDetails.title[useGlobals.currLang] }}</h1>
        </div>

        <!-- Track list -->
        <div class="track-list-container">
          <div v-for="(track, index) in trackList" class="track-container" :key="index">
            <div class="track-number-wrapper">
              <span class="track-number">{{ index + 1 }}</span>
            </div>
            <div class="track-title-wrapper">
              <span class="track-title"> {{ track.title }}</span>
            </div>
            <div v-if="commaJoinArray(track.feat)" class="track-feat-wrapper">
              <span class="track-feat">(feat. {{ commaJoinArray(track.feat) }})</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Platform list -->
    <div class="platform-list section">
      <IVPlatformList :options="discographyDetails.platforms" />
    </div>

    <!-- Intermediate Img -->
    <div class="intermediate-img-wrapper section" id="intermediate">
      <img :src="discographyDetails.media.intermediate" draggable="false" />
    </div>

    <!-- Benchmarks -->
    <div class="album-benchmarks section">
      <div class="album-release-hu-sae">{{ dateToHuSae(discographyDetails.dates.release) }}</div>
      <div class="album-release-human-readable">
        {{ dateToHumanReadable(discographyDetails.dates.release, useGlobals.currLang) }}
      </div>
      <div class="album-director">DIRECTED BY {{ commaJoinArray(discographyDetails.collaborators.directors) }}</div>

      <div class="album-collaborators-container">
        <div class="participant-wrapper">
          <span class="label">ARTISTS</span>
          <span>{{ commaJoinArray(discographyDetails.collaborators.artists) }}</span>
        </div>
        <div class="participant-wrapper">
          <span class="label">PRODUCERS</span>
          <span>{{ commaJoinArray(discographyDetails.collaborators.producers) }}</span>
        </div>
        <div class="participant-wrapper">
          <span class="label">ARTWORK</span>
          <span>{{ commaJoinArray(discographyDetails.collaborators.artwork) }}</span>
        </div>
      </div>
    </div>

    <!-- Section: Credits -->
    <div class="album-credits section">
      <div v-for="(track, index) in trackList" class="track-credits-container" :key="index">
        <!-- Track title -->
        <h1 class="track-title-container text-l">
          <div class="track-number-wrapper">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="track-title-wrapper">
            <span>{{ track.title }}</span>
          </div>
        </h1>

        <!-- Track credits -->
        <div class="credits-details-container">
          <!-- Credit list -->
          <div class="credit-list-container">
            <div class="credit-wrapper">
              <div class="credit-title"><span>Artists:</span></div>
              <div class="credit">
                <span>{{ commaJoinArray(track.collaborators.artists) }}</span>
              </div>
            </div>
            <div class="credit-wrapper">
              <div class="credit-title"><span>Producers:</span></div>
              <div class="credit">
                <span>{{ commaJoinArray(track.collaborators.producers) }}</span>
              </div>
            </div>
            <div class="credit-wrapper">
              <div class="credit-title"><span>Mix:</span></div>
              <div class="credit">
                <span>{{ commaJoinArray(track.collaborators.mix) }}</span>
              </div>
            </div>
            <div class="credit-wrapper">
              <div class="credit-title"><span>Master:</span></div>
              <div class="credit">
                <span>{{ commaJoinArray(track.collaborators.master) }}</span>
              </div>
            </div>
            <div class="credit-wrapper">
              <div class="credit-title"><span>Instrumental:</span></div>
              <div class="credit">
                <span>{{ commaJoinArray(track.collaborators.instrumental) }}</span>
              </div>
            </div>
            <div class="credit-wrapper">
              <div class="credit-title"><span>Lyrics:</span></div>
              <div class="credit">
                <span>{{ commaJoinArray(track.collaborators.lyrics) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

import ivDiscography from '@/assets/data/iv-discography.js';
import ivTrackList from '@/assets/data/iv-track-list.js';

import { commaJoinArray } from '@/lib/helpers/array.js';
import { dateToHuSae, dateToHumanReadable } from '@/lib/helpers/date.js';

import { useGlobals } from '@/composables/useGlobals';

import IVPlatformList from '@/components/widgets/PlatformList.vue';
import IvPicture from '@/components/widgets/IVPicture.vue';

// Route

const route = useRoute();
const discographyId = route.params.id;
const router = useRouter();

// Data

const discographyDetails = ivDiscography.find((item) => item.id === discographyId);
const trackList = ivTrackList[discographyId];

// Functions

const selectBackNav = () => {
  router.push({ name: 'IVDiscographyPage' });
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';

.text-xl {
  font-size: 80px;
}

.section {
  width: 80%;
}

.discography-details {
  padding: 150px 0 100px 0;

  background-color: $iv-near-black;
  color: white;

  .album-overview {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(1, 1fr);

    .back-nav-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;

      margin: 0 0 30px 10px;

      cursor: pointer;

      .back-nav-icon {
        font-size: 20px;

        color: rgba(255, 255, 255, 0.5);
      }
    }

    .album-img-wrapper {
      position: relative;

      img {
        width: 100%;
        height: auto;
      }
    }
    .album-details-container {
      display: flex;
      flex-direction: column;

      .album-title-wrapper {
        margin: 0 0 0 0;

        .album-title {
          margin: 0;
          text-transform: uppercase;
          font-family: Raleway;
        }
      }

      .track-list-container {
        margin: 30px 0 0 0;

        .track-container {
          margin: 0 0 15px 0;

          display: flex;
          flex-direction: row;

          font-size: 14px;
          font-weight: 600;

          .track-number-wrapper {
            width: 20px;

            margin: 0 40px 0 0;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          .track-title-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .track-feat-wrapper {
            margin: 0 0 0 20px;
          }
        }
      }
    }
  }

  .platform-list {
    margin: 30px 0 0 0;
  }

  .intermediate-img-wrapper {
    position: relative;

    margin: 60px 0 0 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  .album-benchmarks {
    margin: 60px 0 60px 0;

    display: flex;
    flex-direction: column;

    font-size: 15px;

    .album-release-hu-sae {
      text-transform: uppercase;

      margin: 0 0 20px 0;
    }

    .album-release-human-readable {
      text-transform: uppercase;

      margin: 0 0 20px 0;
    }

    .album-director {
      text-transform: uppercase;

      margin: 0 0 20px 0;
    }

    .album-collaborators-container {
      display: flex;
      flex-direction: column;

      .participant-wrapper {
        margin: 0 0 5px 0;

        display: flex;
        flex-direction: row;

        .label {
          width: 125px;
        }
      }
    }
  }

  .album-credits {
    .track-credits-container {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(1, 1fr);

      margin: 0 0 60px 0;

      .track-title-container {
        width: 100%;

        text-transform: uppercase;
        font-family: Raleway;
        font-size: 25px;

        margin: 0;

        display: flex;
        flex-direction: row;

        .track-number-wrapper {
          margin: 0 30px 0 0;
        }
      }

      .credits-details-container {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        font-size: 14px;
        font-weight: 600;

        .credit-wrapper {
          display: grid;
          grid-gap: 50px;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          margin: 15px 0 0 0;

          .credit-title {
            margin: 0 60px 0 0;
          }
        }
      }
    }
  }
}

@media (max-width: 599px) {
  .text-xl {
    font-size: 60px;
  }

  .discography-details {
    .album-overview {
      .back-nav-wrapper {
        .back-nav-icon {
          font-size: 15px;
        }
      }
    }

    .album-benchmarks {
      font-size: 12px;
    }

    .album-credits {
      .track-credits-container {
        .credits-details-container {
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 349px) {
  .text-xl {
    font-size: 40px;
  }

  .discography-details {
    .album-overview {
      .back-nav-wrapper {
        .back-nav-icon {
          font-size: 12px;
        }
      }
    }

    .album-benchmarks {
      font-size: 10px;
    }

    .album-credits {
      .track-credits-container {
        .credits-details-container {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
