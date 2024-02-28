<template>
  <div class="veiw-home-layout">
    <div ref="myName" class="name-container"></div>
    <p>a software engineer, a designer</p>
    <div class="h-100 w-50 d-flex flex-column align-center justify-center">
      <v-btn class="ma-2" icon @click="openLink('github')">
        <v-icon icon="mdi-github" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkGithub`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon @click="openLink('linkedin')">
        <v-icon icon="mdi-linkedin" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkLinkedin`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon @click="downloadResume">
        <v-icon icon="mdi-file-account-outline" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkResume`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon @click="sendMail">
        <v-icon icon="mdi-email-edit-outline" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkMail`) }}</v-tooltip>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import * as echarts from 'echarts';

import { contactStore } from "../stores/contact";
import ToolBtn from "../components/common/AppBar.vue";

const contactOutLink = contactStore();
const { openLink, downloadResume, sendMail } = contactOutLink;
const { t } = useI18n();

const myName = ref<any>();
let strokeOption = {
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: 'JUI-WEN CHIANG',
          fontSize: 70,
          fontWeight: 'bold',
          fontFamily: "Fahkwang",
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#000',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 5000,
          loop: true,
          keyframes: [
            {
              percent: 0.7, // 描完文字邊框
              style: {
                fill: 'transparent',
                lineDashOffset: 200, // 保持填充黑色
                lineDash: [200, 0]
              }
            },
            {
              percent: 0.8, // 文字邊框填滿黑色
              style: {
                fill: 'black',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              percent: 0.9, // 停留在填充黑色
              style: {
                fill: 'black',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              percent: 1, // 等待5秒後重新開始
              style: {
                fill: 'black',
                lineDashOffset: 200,
                lineDash: [200, 0]
              },
              wait: 5000 // 5秒等待時間
            }
          ]
        }
      }
    ]
  }
};
onMounted(() => {
  const strokeChart = echarts.init(myName.value);

  strokeChart.setOption(strokeOption);
  strokeChart.resize()
})

</script>

<style lang="scss" scoped>
.name-container {
  width: 100%;
  height: 30%;
}

.veiw-home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/imgs/test.svg');
  background-size: cover;
}
</style>