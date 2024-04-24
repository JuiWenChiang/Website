<template>


  <!-- <h2 class="text-center">Travel</h2>
  <div class="w-100 h-100 d-flex align-center justify-center">
    <v-window class="w-50 h-50" v-model="window" show-arrows>
      <v-window-item v-for="n in length" :key="n">
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props">
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            <v-overlay class="overlay-color" :model-value="isHovering" contained>
              <span class="overlay-text">Card {{ n }}</span>
            </v-overlay>
          </v-card>
        </v-hover>
      </v-window-item>
    </v-window>
  </div> -->


  <!-- <DynamicScroller></DynamicScroller> -->
  <!-- https://github.com/starkwang/vue-virtual-collection -->
  <!-- https://ismail9k.github.io/vue3-carousel/getting-started.html -->

  <!-- <div class="w-100 h-100 d-flex align-center justify-center">
    <v-carousel class="w-50 h-50" cycle interval="5000" hide-delimiters :show-arrows="false">
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>
  </div> -->

  <div class="w-70 h-100 d-flex flex-row align-center justify-center">
    <v-sheet class="w-100 h-100 d-flex flex-row align-center justify-center">
      <v-row no-gutters>
        <v-col cols="6" class="pa-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              <v-overlay class="overlay-color" :model-value="isHovering" contained>
                <span class="overlay-text">Season</span>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              <v-overlay :model-value="isHovering" contained scrim="#036358">
                <span>Hello</span>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              <v-overlay :model-value="isHovering" contained scrim="#036358">
                <span>Hello</span>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              <v-overlay :model-value="isHovering" contained scrim="#036358">
                <span>Hello</span>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
  <!-- <div class="testImage">
    <v-row no-gutters class="d-flex flex-row align-center justify-center">
      <v-col cols="6">
        <v-img width="450" height="500" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
      </v-col>
      <v-col cols="6">
        <h2>About My Story</h2>
        <p>{{ t("about.experience") }}</p>
      </v-col>
    </v-row>
  </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref, computed, type StyleValue } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
let window = ref(2)
let length = ref(3)

let hab = [
  { title: '旅遊' },
  { title: '古箏' },
  { title: '插畫' }
]

</script>

<style lang="scss" scoped>
.view-layout {
  width: 90%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-items: center;
}

.overlay-color {
  background: linear-gradient(rgba(88, 88, 88, 0.1), rgba(88, 88, 88, 0.5));
}

.overlay-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  color: rgb(255, 255, 255);
}

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
// }</style>