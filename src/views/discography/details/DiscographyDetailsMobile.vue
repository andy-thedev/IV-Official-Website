<template>
  <div class="discography-details iv-page">
    <div class="album-container">
      <div class="album-img-wrapper">
        <img :src="discographyDetails.media.artwork" draggable="false" />
      </div>
      <div class="album-details-container">
        <div class="album-title-wrapper">
          <h1 class="album-title text-xl">{{ discographyDetails.title[useGlobals.currLang] }}</h1>
        </div>
        <div class="track-list-container">
          <div v-for="(track, index) in trackList" class="track-container" :key="index">
            <div class="track-number-wrapper">
              <span class="track-number">{{ index + 1 }}</span>
            </div>
            <div class="track-title-wrapper">
              <span class="track-title"> {{ track.title }}</span>
            </div>
            <div v-if="trackFeature(track.feat)" class="track-feat-wrapper">
              <span class="track-feat">(feat. {{ trackFeature(track.feat) }})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platform-list-wrapper">
      <IVPlatformList :options="discographyDetails.platforms" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import ivDiscography from '@/assets/data/iv-discography.js';
import ivTrackList from '@/assets/data/iv-track-list.js';

import IVPlatformList from '@/components/widgets/PlatformList.vue';

import { useGlobals } from '@/composables/useGlobals';

// Route
const route = useRoute();
const discographyId = route.params.id;

// Data
const discographyDetails = ivDiscography.find((item) => item.id === discographyId);
const trackList = ivTrackList[discographyId];

// Functions
const trackFeature = (featureList) => {
  if (!featureList) {
    return null;
  }

  return featureList.join(', ');
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';

.text-xl {
  font-size: 80px;
}

.discography-details {
  padding: 150px 0 100px 0;

  background-color: $iv-near-black;
  color: white;

  .album-container {
    width: 80%;

    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(1, 1fr);

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

  .platform-list-wrapper {
    width: 80%;

    margin: 30px 0 0 0;
  }
}

@media (max-width: 599px) {
  .text-xl {
    font-size: 60px;
  }
}

@media (max-width: 349px) {
  .text-xl {
    font-size: 40px;
  }
}
</style>
