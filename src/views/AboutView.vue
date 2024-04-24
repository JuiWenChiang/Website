<template>
  <h1 class="text-center">- Experience -</h1>
  <h1 class="text-center" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
    test</h1>
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
