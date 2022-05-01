<template>
    <div
        class="iv-landing-header"
        :class="{ 'opaque-header': !isTransparent }"
    >
        <div class="left-items-container">
            <span class="left-option-numeral">I</span>
            <span class="left-option-numeral">II</span>
            <span class="left-option-numeral">III</span>
            <span class="left-option-numeral">IV</span>
        </div>
        <div class= "center-brand">
            <span class="center-text">INDIVISUAL</span>
        </div>
        <div class="right-items-container">
            <span class="right-option-text">SONGS</span>
            <span class="right-option-text">NEWS</span>
            <span class="right-option-text">ABOUT US</span>
            <span class="right-option-text">CONTACT</span>
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

        .left-option-numeral {
            font-size: 20px;
            margin: 0 0 0 36px;

            cursor: pointer;

            &:hover {
                color: #FF7700;
            }
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

        .right-option-text {
            font-size: 13px;
            margin: 0 36px 0 0;

            cursor: pointer;

            &:hover {
                color: #FF7700;
            }
        }
    }
}
</style>