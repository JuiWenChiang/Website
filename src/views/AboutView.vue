<template>
  <v-parallax src="/imgs/pexels_JohannesPlenio.jpg" class="pa-8">
    <p class="text-center">Hi there,</p>
    <v-row>
      <v-col cols="4">
        <v-img :aspect-ratio="1" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover></v-img>
      </v-col>
      <v-col>
        <p>{{ p1 }}</p>
        <p>{{ p2 }}</p>
      </v-col>
    </v-row>

    <!-- <div class="d-flex flex-column">
      <div style="width: 50%;">
        <v-img :aspect-ratio="1" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover></v-img>
      </div>
      <div style="width: 50%;">
        <p class="pa-2 ">
          I'm Jui-Wen, Chiang, a software developer with a background in art and design. I’m passionate about
          crafting
          interfaces that are not only visually appealing but also user-friendly. My journey into development was driven
          by my
          love for combining aesthetics and functionality and loves learning new things and thinking on their feet.
        </p>
      </div>
    </div> -->

    <!-- <v-container>
      <v-row>
        <v-col cols="4">
          <v-img :aspect-ratio="1" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover></v-img>
        </v-col>
        <v-col cols="6">
          <p class="pa-2 ">
            I'm Jui-Wen, Chiang, a software developer with a background in art and design. I’m passionate about
            crafting
            interfaces that are not only visually appealing but also user-friendly. My journey into development was driven
            by my
            love for combining aesthetics and functionality and loves learning new things and thinking on their feet.
          </p>
          <p class="pa-2 px-10">
            Beyond coding, I enjoy solo travel, watching musicals, and painting. While working and traveling in Australia,
            I even
            participated in a local community art exhibition. I’m constantly seeking new experiences and challenges
            because
            stagnation just isn’t my style.
          </p>
        </v-col>
      </v-row>
    </v-container> -->
  </v-parallax>

  <!-- Not adopted:timeline -->
  <!-- <div class="d-flex justify-center">
    <div class="w-100 h-100 d-flex justify-center">
      <v-timeline side="end">
        <v-timeline-item class="w-100 h-100" v-for="(item, index) in TimelineData" :key="index" :dot-color="item.color"
          :icon="item.icon" fill-dot>
          <template v-slot:opposite>
            <div class="opposite-container">
              <v-sheet class="d-flex" v-for="ind in item.skills" :key="ind">
                <div class="d-flex align-center pa-1">
                  <div>
                    <component class="pa-1" v-if="ind.isCustom" :is="customIcon(ind.icon)"></component>
                    <CIcon class="pa-1" width="30px" v-else :icon="ind.icon" />
                  </div>
                  <p>{{ ind.name }}</p>
                </div>
              </v-sheet>
            </div>
          </template>
          <template v-slot:default>
            <v-card class="body-container">
              <v-card-title class="w-100 h-100">
                {{ t(`timeline.${item.dictionary}.title`) }}
              </v-card-title>
              <v-card-text>
                <span class="font-italic text-green">
                  {{
                    t(`timeline.${item.dictionary}.tag`) +
                    " , " +
                    t(`timeline.${item.dictionary}.period`)
                  }}
                </span>
                <v-list>
                  <v-list-item v-for="(point, index) in item.content" :key="index">
                    {{ t(`timeline.${item.dictionary}.content.${point}`) }}
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </template>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";
import IconAutoCad from "../components/icons/IconAutoCad.vue";
import IconFastAPI from "../components/icons/IconFastAPI.vue";
import IconDx from "../components/icons/IconDx.vue";
import { ref, markRaw, onMounted } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t } = useI18n();
const TimelineData: Array<any> = DefaultData.timeline;

const p1 = "I'm Jui-Wen, Chiang, a software developer with a background in art and design. I’m passionate about crafting interfaces that are not only visually appealing but also user-friendly. My journey into development was driven by my love for combining aesthetics and functionality and loves learning new things and thinking on their feet."

const p2 = "Beyond coding, I enjoy solo travel, watching musicals, and painting. While working and traveling in Australia, I even participated in a local community art exhibition. I’m constantly seeking new experiences and challenges because stagnation just isn’t my style."

// onMounted(() => {
//   AOS.init();
//   AOS.refresh();
//   // AOS.init({
//   //   // 全域設定:
//   //   disable: false, //用於啟用或停用 AOS 動畫效果
//   //   startEvent: 'DOMContentLoaded', //初始化 AOS 的事件
//   //   initClassName: 'aos-init', // 初始化後添加到元素上的類別
//   //   animatedClassName: 'aos-animate', // 動畫過程中添加到元素上的類別
//   //   // useClassNames: false, // 如果為 true，則將 data-aos 的內容作為類別添加到捲動元素上
//   //   useClassNames: true, // 如果為 true，則將 data-aos 的內容作為類別添加到捲動元素上

//   //   disableMutationObserver: false, // 用於停用自動突變偵測
//   //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   //   offset: 120, // 以像素(px)為單位，水平移動
//   //   delay: 0, // 延遲時間，範圍：0~ 3000
//   //   duration: 400, // 動畫時間，範圍：0~ 3000
//   //   easing: 'ease', // 動畫曲線。默認為 ease。
//   //   // once: false, // 是否重複觸發動畫
//   //   // mirror: false, // 是否超過滾動範圍時，做移出的動畫效果
//   //   once: true, // 是否重複觸發動畫
//   //   mirror: true, // 是否超過滾動範圍時，做移出的動畫效果
//   //   anchorPlacement: 'top-bottom', // 滾動方向觸發動畫，預設由上到下
//   // });
// });

const customIcon = (name: string) => {
  switch (name) {
    case "IconAutoCad":
      return IconAutoCad;
    case "IconDx":
      return IconDx;
    case "IconFastAPI":
      return IconFastAPI;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
.v-timeline {
  width: 90%;
  height: 100%;
}

.opposite-container {
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-self: start;
}

.body-container {
  width: 60vw;
}

:deep(.v-list-item--density-default) {
  min-height: 0;
}
</style>
