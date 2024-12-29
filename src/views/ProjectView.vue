<template>
  <div>
    <v-row class="align-center py-2" v-for="(item, index) in ProjectsData" :key="index">
      <v-col :order="index % 2 === 0 ? 0 : 2" cols="4">
        <v-img :src="item.image" cover></v-img>
      </v-col>
      <v-col>
        <div class="d-flex flex-column justify-center">
          <p class="project_title"> {{ t(`project.${item.dictionary}.title`) }}</p>
          <div>
            <v-chip class="mr-1" size="small" color="#4CAF50" variant="outlined" v-for="tag in item.tag" :key="tag">
              {{ tag }}
            </v-chip>
          </div>
          <p class="summary-text"> {{ t(`project.${item.dictionary}.summary`) }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
  
  <!-- layout 1:animation -->
  <!-- <div class="w-100 d-flex flex-column align-center justify-center">
    <template v-for="(item, index) in ProjectsData" :key="index">
      <div class="test card-layout" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
        <h2 class="font-weight-black">{{ t(`project.${item.dictionary}.title`) }}</h2>
        <v-chip class="mr-1" v-for="tag in item.tag" :key="tag" size="small"> {{ tag }} </v-chip>
        <p class="bg-surface-light pt-4">
          Australia's leader has called Elon Musk an "arrogant billionaire" in an escalating feud over X's reluctance to
          remove
          footage of a church stabbing.
          On Monday, an Australian court ordered Mr Musk's social media firm - formerly called Twitter - to hide videos
          of last
          week's attack in Sydney.
          X previously said it would comply "pending a legal challenge".
          Prime Minister Anthony Albanese's criticism followed Mr Musk using a meme to accuse his government of
          censorship.
        </p>
      </div>
    </template>
  </div> -->

  <!-- layout 2:row card -->
  <!-- <div class="w-100 h-100 d-flex flex-column align-center justify-center">
    <v-sheet class="-100 h-100 ma-1 elevation-2 rounded-lg" v-for="(item, index) in ProjectsData" :key="index">
      <v-row class="-100 h-100 card-style rounded-lg" no-gutters>
        <v-col class="w-100 h-100 pa-2" cols="4">
          <v-card class="w-100 h-100 elevation-0">
            <v-img :src="item.image" cover></v-img>
          </v-card>
        </v-col>
        <v-col class="pa-2" cols="8">
          <v-card class="w-100 h-100 elevation-0">
            <v-card-text class="w-100 h-90 d-flex flex-column align-center justify-center">
              <p class="text-center">
                {{ t(`project.${item.dictionary}.title`) }}
              </p>
              <div class="w-100 h-100 d-flex align-center justify-center ma-1">
                <v-chip class="mr-1" v-for="tag in item.tag" :key="tag" size="small">
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
              <v-card v-if="item.reveal === true" class="card-reveal">
                <v-card-text>
                  <p>{{ t(`project.${item.dictionary}.information`) }}</p>
                </v-card-text>
                <v-card-actions class="reveal-button">
                  <v-btn color="teal-accent-4" @click="item.reveal = !item.reveal">
                    {{ t(`common.button.revealSummary`) }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-x-reverse-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div> -->
</template>

<script setup lang="ts">
import { ref, computed, type StyleValue } from "vue";
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";

const { t } = useI18n();
const ProjectsData = ref(DefaultData.project);

// https://www.pexels.com/photo/person-using-a-computer-and-holding-a-credit-card-and-receipts-4968390/
</script>

<style lang="scss" scoped>
.project_title {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
}

.summary-text {
    padding: 1rem 0;
    line-height: 1.5;
}

.card-layout {
  width: 60%;
  // margin: 20px;
  // clear: both;
  // height: 200px;
  // background: #FFF;
  // border-radius: 2px;
  margin: 12vh 0;
  padding: 10px;
}

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