<template>
    <div
        class="iv-landing-header"
        :class="{ 'opaque-header': !isTransparent }"
    >
        <div class="left-items-container">
            <font-awesome-icon
                :icon="['fas', 'headphones-alt']"
                class="left-icon"
            />
        </div>
        <div class= "center-brand">
            <span class="center-text">INDIVISUAL</span>
        </div>
        <div class="right-items-container">
            <font-awesome-icon
                :icon="['fas', 'bars']"
                class="right-icon"
            />
        </div>
    </div>
</template>

<script>
export default {
  props: {
      isTransparent: {
          type: Boolean,
          default: true,
      }
  }
}
</script>

<style lang="scss" scoped>
/* Assume the following css is for viewport width 1280px or below (See LandingWrapper.vue) */

.opaque-header {
    background-color: black!important;
}

.iv-landing-header {
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    width: 100%;
    height: 75px;

    background-color: rgb(2 1 0 / 0.3);
    transition: background-color 0.4s ease-in-out;

    color: white;
    font-family:josefin sans,sans-serif;
    text-transform: uppercase;

    z-index: 1000;

    .left-items-container {
        flex: 1;
        text-align: left;

        .left-icon {
            font-size: 20px;
            margin: 0 0 0 30px;

            cursor: pointer;
        }
    }

    .center-brand {
        .center-text {
            font-size: 25px;
            text-align: center;
        }
    }

    .right-items-container {
        flex: 1;
        text-align: right;

        .right-icon {
            font-size: 20px;
            margin: 0 30px 0 0;

            cursor: pointer;
        }
    }
}

@media(max-width:912px){
    /* Surface Pro 7 (912) and iPad Air (820) dimensions */
}

@media(max-width: 540px) {
    /* Surface Duo Dimensions */
}

@media(max-width:480px){
    /* Phone dimensions */

    .header-container .center-brand .center-text {
        font-size: 22px;
    }
}
</style>