<template>
  <div class="gallary-text green-color-text">{{ t(`gallary.summary`) }}</div>
  <div class="ma-2 d-flex justify-center">
    <v-sheet class="w-100 h-100 pa-2" v-for="(elemArray, index) in groupedArray" :key="index">
      <div class="w-100 h-100 d-flex align-start flex-column mb-6">
        <div class="w-100 h-100 py-2" v-for="(itme, ind) in elemArray" :key="ind">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-img :src=itme.image></v-img>
              <v-overlay class="overlay-color" :model-value="(isHovering as boolean)" contained>
                <span class="overlay-text">{{ itme.title }}</span>
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
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";

const { t } = useI18n();
const GalleryData = ref(DefaultData.gallery);

const colsSize = 3;
const groupedArray = Array.from({ length: colsSize }, (_, i) => {
  const start = Math.floor(i * GalleryData.value.length / colsSize);
  const end = Math.floor((i + 1) * GalleryData.value.length / colsSize);
  return GalleryData.value.slice(start, end);
});
</script>

<style lang="scss" scoped>
.gallary-text {
  font-size: 1.5rem;
  text-align: center;
  // font-weight: bold;
  padding-top: 5rem;
  padding-bottom: 2rem;
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