<template>
    <!-- <h1 class="text-center">Gallery</h1> -->
    <!-- style="width: 80%;" -->
    <div class="ma-2 d-flex justify-center" style="padding: 5%;">
      <!-- <v-container></v-container> -->
      <v-sheet class="w-100 h-100 pa-2" v-for="(elemArray, index) in imagesSrc" :key="index">
        <div class="w-100 h-100 d-flex align-start flex-column mb-6">
          <div class="w-100 h-100 py-2" v-for="(itme, ind) in elemArray" :key="ind">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props">
                <v-img :src=itme></v-img>
                <v-overlay class="overlay-color" :model-value="(isHovering as boolean)" contained>
                  <span class="overlay-text">{{ itme }}</span>
                </v-overlay>
              </v-card>
            </v-hover>
          </div>
        </div>
      </v-sheet>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultData from "../stores/defaultData.json";

interface Image {
  src: string
}

type ImageArray = string[][]

// const imagesSrc = ref<any>([
//   ["/imgs/Season.jpg", "/imgs/Keeper.jpg"],
//   ["/imgs/Godnesse.jpg", "/imgs/Inside.jpg"],
//   ["/imgs/MistyImpression.jpg", "/imgs/Traditional.jpg"]
// ])
// const imagesSrc = ref<Image[][]>([
//   [{ src: "/imgs/Season.jpg" }, { src: "/imgs/Keeper.jpg" }],
//   [{ src: "/imgs/Godnesse.jpg" }, { src: "/imgs/Inside.jpg" }],
//   [{ src: "/imgs/MistyImpression.jpg" }, { src: "/imgs/Traditional.jpg" }]
// ])


const imagesSrc: any = {
  "colsLine1": [
    "/imgs/Season.jpg",
    "/imgs/Keeper.jpg"
  ],
  "colsLine2": [
    "/imgs/Godnesse.jpg",
    "/imgs/Inside.jpg"
  ],
  "colsLine3": [
    "/imgs/MistyImpression.jpg",
    "/imgs/Traditional.jpg"
  ]
};


const GalleryData = DefaultData.gallery;
const show = ref(false);
</script>

<style lang="scss" scoped>
.gallary-layout {
  width: 100%;
  // height: 100vh;
}

:deep(.v-overlay__content) {
  width: 100%;
  height: 100%;
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
</style>