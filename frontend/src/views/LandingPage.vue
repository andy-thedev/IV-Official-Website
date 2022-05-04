<template>
  <div class="landing-page">
    <IVCarousel
      :carouselItemsInfo="landingCarouselItemsInfo"
    />
  </div>
</template>

<script>
import IVCarousel from '@/components/gadgets/Carousel.vue';

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
          imageUrl: '@/assets/img/home1.jpg'
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