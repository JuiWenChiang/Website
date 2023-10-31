<template>
  <!-- <DynamicScroller></DynamicScroller> -->
  <!-- https://github.com/starkwang/vue-virtual-collection -->
  <!-- https://ismail9k.github.io/vue3-carousel/getting-started.html -->

  <div class="w-100 h-100 d-flex align-center justify-center">
    <v-carousel
      class="w-50 h-50"
      cycle
      interval="5000"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>

  <div class="w-100 h-100 d-flex flex-row align-center justify-center">
    <div class="testImage">
      <v-row no-gutters class="d-flex flex-row align-center justify-center">
        <v-col cols="6">
          <v-img
            width="450"
            height="500"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <h2>About My Story</h2>
          <p>{{ t("about.experience") }}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.testImage {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  // background-color: aqua;
}

.story-container {
  height: 50vh;
  width: 80%;
  // display: flex;
  // align-items: center;
  // justify-items: center;
  // margin: 10%;
}

// .story-container {
//   width: 100%;
//   height: 650px;
//   display: flex;
//   align-items: center;
//   justify-items: center;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.6),
//       rgba(255, 255, 255, 0.6)
//     ),
//     url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat
//       center center fixed;
//   background-size: cover;
// }
</style>