<template>
  <div class="discography-details iv-page">
    <!-- Overview -->
    <div class="album-details-section">
      <!-- Album artwork -->
      <div class="album-img-wrapper">
        <!-- Album img -->
        <img :src="discographyDetails.media.artwork" draggable="false" />

        <!-- Benchmarks -->
        <div class="album-benchmarks-section">
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
      </div>
      <!-- Album details -->
      <div class="album-details-container" @mouseover="isHoveringAlbum = true" @mouseleave="isHoveringAlbum = false">
        <!-- Title -->
        <div class="album-title-wrapper">
          <h1 class="album-title text-xl">{{ discographyDetails.title[useGlobals.currLang] }}</h1>
        </div>
        <!-- Track list -->
        <div v-if="!isHoveringAlbum" class="track-list-container">
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
        <!-- Platform list -->
        <div v-else class="platform-list-wrapper">
          <IVPlatformList :options="discographyDetails.platforms" maxHeight="400px" optionInnerWidth="70%" />
        </div>
      </div>
    </div>

    <!-- Credits -->
    <div class="album-credits-section">
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
          <!-- Dummy placeholder -->
          <h1 class="track-title-container text-l" :style="{ opacity: 0 }">
            <div class="track-title-wrapper">{{ track.title }}</div>
          </h1>
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
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import ivDiscography from '@/assets/data/iv-discography.js';
import ivTrackList from '@/assets/data/iv-track-list.js';

import { commaJoinArray } from '@/lib/helpers/array.js';
import { dateToHuSae, dateToHumanReadable } from '@/lib/helpers/date.js';

import { useGlobals } from '@/composables/useGlobals';

import IVPlatformList from '@/components/widgets/PlatformList.vue';

const isHoveringAlbum = ref(false);

// Route
const route = useRoute();
const discographyId = route.params.id;

// Data
const discographyDetails = ivDiscography.find((item) => item.id === discographyId);
const trackList = ivTrackList[discographyId];
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/presets/font-presets';
@import '@/assets/css/common-styles';

.discography-details {
  @include generic-font-preset;

  background-color: $iv-near-black;
  color: white;

  .album-details-section {
    width: 60%;

    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(2, 1fr);

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

          font-size: 17px;
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

  .album-benchmarks-section {
    width: 60%;

    margin: 30px 0 0 0;

    display: flex;
    flex-direction: column;

    font-size: 12px;

    .album-release-hu-sae {
      text-transform: uppercase;

      margin: 0 0 15px 0;
    }

    .album-release-human-readable {
      text-transform: uppercase;

      margin: 0 0 15px 0;
    }

    .album-director {
      text-transform: uppercase;

      margin: 0 0 15px 0;
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

  .album-credits-section {
    width: 60%;

    margin: 125px 0 0 0;

    .track-credits-container {
      display: grid;
      grid-gap: 50px;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      margin: 0;

      .track-title-container {
        width: 100%;

        text-transform: uppercase;
        font-family: Raleway;

        margin: 0;

        display: flex;
        flex-direction: row;

        .track-number-wrapper {
          margin: 0 40px 0 0;
        }
      }

      .credits-details-container {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        font-size: 17px;
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
</style>
