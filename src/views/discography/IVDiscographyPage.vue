<template>
  <div class="iv-discography-page iv-page">
    <!-- Intro -->
    <div class="page-title-container">
      <h1 class="text-xl">Discography</h1>
      <div className="border"></div>
    </div>
    <!-- <div class="page-description-container">
      <p>An aesthetic dive into an elaborate collection of our releases.</p>
      <p>
        Learn more about the details, struggles, and history behind each work, through various lenses of artistic
        presentation and content delivery.
      </p>
      <p>
        Portrayed with images behind the scenes, and explanations from its creators, you will be able to immerse
        yourself into the perspective of your favourite artists.
      </p>
    </div> -->
    <!-- Items -->
    <div class="items-container">
      <div
        v-for="(item, index) in enabledDiscographyItems"
        :key="index"
        class="item-img-wrapper"
        @click="selectItem(item.id)"
      >
        <!-- Item Img -->
        <IvPicture
          :fourkSrc="item.media.artwork['4k']"
          :qhdSrc="item.media.artwork['qhd']"
          :hdSrc="item.media.artwork['hd']"
          :mobileSrc="item.media.artwork['mobile']"
        >
          <img :src="item.media.artwork['fallback']" draggable="false" />
        </IvPicture>
        <!-- Item Overlay -->
        <div class="item-img-overlay-container">
          <div class="overlay-title">{{ item.title[useGlobals.currLang] }}</div>
          <div v-if="isItemUnavailable(item.platforms)" class="item-unavailable-container">
            <font-awesome-icon :icon="['fas', 'eye-slash']" class="item-unavailable-icon" />
            <div class="item-unavailable-text">No longer available</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import ivDiscographyData from '@/assets/data/iv-discography.js';

import { useGlobals } from '@/composables/useGlobals';

import IvPicture from '@/components/widgets/IVPicture.vue';

const enabledDiscographyItems = ivDiscographyData.filter((item) => item.feature.iv.discography === true);

const router = useRouter();

const isItemUnavailable = (platforms) => {
  return Object.keys(platforms).length === 0;
};

const selectItem = (id) => {
  router.push(`/discography/${id}`);
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/presets/font-presets';
@import '@/assets/css/common-styles';

.iv-discography-page {
  @include generic-font-preset;

  background-color: $iv-near-black;
  color: white;

  .page-title-container {
    margin: 0 0 60px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 0;
      text-transform: uppercase;
    }

    .border {
      width: 60%;

      margin: 20px 0 0 0;

      color: white;
      border-bottom: solid;
    }
  }

  .page-description-container {
    width: 35%;

    margin: 0 0 60px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    text-align: center;

    p {
      margin: 0 0 10px 0;
    }
  }

  .items-container {
    width: 60%;

    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);

    .item-img-wrapper {
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        height: auto;
      }

      .item-img-overlay-container {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.7);

        opacity: 0;
        transition: opacity 0.3s ease;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-transform: uppercase;
        color: white;
        font-weight: bold;

        .overlay-title {
          font-size: 20px;
        }

        .item-unavailable-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          margin: 5px 0 0 0;

          .item-unavailable-icon {
            width: 15px;
            height: 15px;

            margin: 0 10px 0 0;
          }
          .item-unavailable-text {
            font-size: 10px;
          }
        }
      }

      &:hover .item-img-overlay-container {
        opacity: 1;
      }
    }
  }
}

@media (max-width: 1199px) {
  .iv-discography-page {
    .page-description-container {
      width: 50%;
    }
    .items-container {
      width: 80%;
    }
  }
}

@media (max-width: 599px) {
  .iv-discography-page {
    padding: 150px 0 100px 0;

    .page-description-container {
      width: 70%;
    }
    .items-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
