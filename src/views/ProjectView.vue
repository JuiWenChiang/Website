<template>
  <div class="w-100 h-100 d-flex flex-column align-center justify-center">
    <v-sheet
      class="-100 h-100 ma-1 elevation-2 rounded-lg"
      v-for="(item, index) in ProjectsData"
      :key="index"
    >
      <v-row class="-100 h-100 card-style rounded-lg" no-gutters>
        <v-col class="w-100 h-100 pa-2" cols="4">
          <v-card class="w-100 h-100 elevation-0">
            <v-img :src="item.image" cover></v-img>
          </v-card>
        </v-col>
        
        <v-col class="pa-2" cols="8">
          <v-card class="w-100 h-100 elevation-0">
            <v-card-text class="w-100 h-90 d-flex flex-column align-center justify-center" >
              <p class="text-center">
                {{ t(`project.${item.dictionary}.title`) }}
              </p>
              <div class="w-100 h-100 d-flex align-center justify-center ma-1">
                <v-chip
                  class="mr-1"
                  v-for="tag in item.tag"
                  :key="tag"
                  size="small"
                >
                  {{ tag }}
                </v-chip>
              </div>
              <p>{{ t(`project.${item.dictionary}.summary`) }}</p>
            </v-card-text>
            <v-card-actions class="reveal-button">
              <v-btn color="teal-accent-4" @click="item.reveal = true">
                {{ t(`common.button.revealDescription`) }}
              </v-btn>
            </v-card-actions>

            <v-slide-x-reverse-transition>
              <v-card
                v-if="item.reveal === true"
                class="card-reveal"
              >
                <v-card-text>
                  <p>{{ t(`project.${item.dictionary}.information`) }}</p>
                </v-card-text>
                <v-card-actions class="reveal-button">
                  <v-btn
                    color="teal-accent-4"
                    @click="item.reveal = !item.reveal"
                  >
                    {{ t(`common.button.revealSummary`) }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-x-reverse-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type StyleValue } from "vue";
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";

const { t } = useI18n();
const ProjectsData = ref(DefaultData.project);
</script>

<style lang="scss" scoped>
.v-sheet {
  height: 30vh;
  width: 80%;
}

.v-img {
  width: 100%;
  height: 100%;
}

.card-reveal {
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(150deg, #fff1eb 0%, #ace0f9 80%);
}

.reveal-button {
  width: 100%;
  height: 10%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: flex-end;
}

// .overlay-image {
//   background: linear-gradient(
//       to right,
//       rgba(255, 255, 255, 0.355),
//       rgb(255, 255, 255) 80%
//     ),
//     url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat;
// }

// .overlay-image-left {
//   background: linear-gradient(
//       to left,
//       rgba(255, 255, 255, 0.355),
//       rgb(255, 255, 255) 80%
//     ),
//     url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat;
// }

// 漸層加邊界羽化
// .overlay-image {
//   background: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg")
//     no-repeat;
//   position: relative;
// }
// .overlay-image::after {
//   position: absolute;
//   content: "";
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   box-shadow: 20px 0 10px 10px #ffffff inset;
// }
</style>