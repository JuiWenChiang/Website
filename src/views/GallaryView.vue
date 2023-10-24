<template>
  <h1 class="text-center">Gallery</h1>
  <v-row no-gutters>
    <v-col cols="" class="pa-2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props">
          <v-img src="/imgs/Season new.jpg"></v-img>
          <v-overlay class="overlay-color" :model-value="isHovering" contained>
            <span class="overlay-text">Season</span>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="3" class="pa-2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props">
          <v-img src="/imgs/Keeper.jpg"></v-img>
          <v-overlay :model-value="isHovering" contained scrim="#036358">
            <span>Hello</span>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="3" class="pa-2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props">
          <v-img src="/imgs/Beginning.jpg"></v-img>
          <v-overlay :model-value="isHovering" contained scrim="#036358">
            <span>Hello</span>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultData from "../stores/defaultData.json";

const GalleryData = DefaultData.gallery;
const show = ref(false);
</script>

<style lang="scss" scoped>
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