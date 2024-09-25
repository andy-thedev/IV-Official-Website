<template>
  <div class="iv-discography-page">
    <div class="page-title-container">
      <h1 class="text-xl">Discography</h1>
      <div className="border"></div>
    </div>
    <div class="page-description-container">
      <p>An aesthetic dive into an elaborate collection of our releases.</p>
      <p>
        Learn more about the details, struggles, and history behind each work, through various lenses of artistic
        presentation and content delivery.
      </p>
      <p>
        Portrayed with images behind the scenes, and explanations from its creators, you will be able to immerse
        yourself into the perspective of your favourite artists.
      </p>
    </div>
    <div class="items-container">
      <div
        v-for="(item, index) in filteredIvDiscographyData"
        :key="index"
        class="item-img-wrapper"
        @click="selectDiscography"
      >
        <img :src="item.media.artwork" draggable="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ivDiscographyData from '@/assets/data/iv-discography.js';

const filteredIvDiscographyData = ivDiscographyData.filter((item) => item.feature.iv.discography === true);
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/mixin-presets';

.iv-discography-page {
  box-sizing: border-box;

  width: 100vw;
  padding: 200px 0 200px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: $iv-dark-grey;

  color: white;

  .page-title-container {
    margin: 0 0 60px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 0;
      text-transform: uppercase;

      @include generic-font-preset;
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
      img {
        width: 100%;
        height: auto;
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
