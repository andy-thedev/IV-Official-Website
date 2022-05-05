<template>
  <div class="landing-page">
    <div
        :style="{
            width: '100%',
            height: '20vh',
            backgroundColor: 'orange',
            fontSize: '180px',
            color: 'black',
        }"
    >TEST AREA TEST ARE</div>
    <IVCarousel
      :carouselItemsInfo="landingCarouselItemsInfo"
    />
  </div>
</template>

<script>
import IVCarousel from '@/components/widgets/Carousel.vue';

export default {
  components: {
    IVCarousel
  },
  props: {
  },
  data() {
    return {
      landingCarouselItemsInfo: [
        {
          imageUrl: '@/assets/img/last dance carousel.jpg'
        },
        {
          imageUrl: '@/assets/img/home2.jpg'
        }
      ],
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.landing-page {
    display: flex;
    flex-direction: column;

    width: 100vw;
}

.landing-carousel-section {
  width: 100vw;
}
</style>