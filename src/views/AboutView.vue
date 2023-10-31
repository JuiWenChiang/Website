<template>
  <h1 class="text-center">- Experience -</h1>
  <div class="w-100 h-100 d-flex justify-center">
    <v-timeline side="end">
      <v-timeline-item
        class="w-100 h-100"
        v-for="(item, index) in TimelineData"
        :key="index"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <template v-slot:opposite>
          <div class="opposite-container">
            <v-sheet class="d-flex" v-for="ind in item.skills" :key="ind">
              <div class="d-flex align-center pa-1">
                <div>
                  <component
                    class="pa-1"
                    v-if="ind.isCustom"
                    :is="customIcon(ind.icon)"
                  ></component>
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
                <v-list-item
                  v-for="(point, index) in item.content"
                  :key="index"
                >
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

const { t } = useI18n();
const TimelineData: Array<any> = DefaultData.timeline;

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
