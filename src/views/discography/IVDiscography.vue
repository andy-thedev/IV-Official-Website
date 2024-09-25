<template>
  <div class="iv-discography-page">
    <div class="page-title-container">
      <h1>Discography</h1>
      <div className="border"></div>
    </div>
    <div class="items-container">
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
      <div class="item-img-wrapper">
        <img :src="lastDanceArtworkImg" draggable="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import lastDanceArtworkImg from '@/assets/img/artworks/last-dance.jpeg';
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';

.iv-discography-page {
  box-sizing: border-box;

  width: 100vw;
  padding: 200px 0 300px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: $iv-dark-grey;

  .page-title-container {
    margin: 0 0 60px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 0;

      font-size: 60px;
      color: white;
      text-transform: uppercase;
      font-family: Josefin Sans;
    }

    .border {
      width: 60%;

      margin: 20px 0 0 0;

      color: white;
      border-bottom: solid;
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
</style>
