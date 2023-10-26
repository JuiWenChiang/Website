<template>
  <div class="d-flex justify-center">
    <v-timeline side="end">
      <v-timeline-item
        v-for="(item, index) in TimelineData"
        :key="index"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <template v-slot:opposite>
          <div class="d-flex flex-column justify-start">
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
        
        <v-card width="800px">
          <v-card-title>
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
            <v-list >
              <v-list-item v-for="(point, index) in item.content" :key="index">
                {{ t(`timeline.${item.dictionary}.content.${point}`) }}
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
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
}

:deep(.v-timeline-item__opposite) {
  width: 145px;
}

:deep(.v-list-item--density-default){
  min-height: 0;
}
</style>
