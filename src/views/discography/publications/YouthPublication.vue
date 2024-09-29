<template>
  <div class="iv-page">
    <img class="full-width-img" :src="youthArtworkImg" draggable="false" />
    <div class="img-caption">
      <p class="caption-title">
        Youth (10.23.2022)<br />
        North York, Hendon Park
      </p>
      <div class="caption-text">
        <p>
          Gen 1 members of Indivisual and friends stand from left to right - Vermello (Daniel Min), Yerin Lim, Unlimited
          (Paris Molokwu), PG-13, JAYAN (Jay An), Meesung Park, Daniel Kangeon Choi.
        </p>
        <p>
          This photo shoot for the album cover of "Youth" marks the final gathering of the presented members, and
          PG-13's journey to South Korea to complete the album's production.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import youthArtworkImg from '@/assets/img/artworks/youth.jpg';
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';
@import '@/assets/css/presets/layout-presets';

.iv-page {
  @include page-container-preset;

  background-color: $iv-youth-blue;
  color: white;
  font-family: 'Roboto Slab';

  padding: 150px 100px 150px 100px;

  .full-width-img {
    width: 100%;

    margin: 0 0 20px 0;
  }

  .img-caption {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 14px;

    .caption-title {
      white-space: nowrap;
      font-style: italic;

      margin: 0 100px 0 0;
    }

    .caption-text {
      p {
        margin: 0 0 3px 0;
      }
    }
  }
}

@media (min-width: 2160px) {
  .iv-page {
    .img-caption {
      .caption-text {
        p {
          display: inline;
        }
      }
    }
  }
}

@media (max-width: 1499px) {
  .iv-page {
    padding: 150px 80px 150px 80px;

    .img-caption {
      flex-direction: column;
      justify-content: center;

      .caption-title {
        margin: 0 0 3px 0;
      }
    }
  }
}

@media (max-width: 599px) {
  .iv-page {
    padding: 100px 25px 100px 25px;

    .full-width-img {
      margin: 0 0 15px 0;
    }

    .img-caption {
      font-size: 8px;
    }
  }
}
</style>
