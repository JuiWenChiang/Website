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
            <v-sheet v-for="ind in item.skill" :key="ind">
              <v-icon :icon="ind.icon" size="x-large"></v-icon>
              <span>{{ ind.name }}</span>
            </v-sheet>
          </div>
        </template>
        <v-card>
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
            <p>
              {{ t(`timeline.${item.dictionary}.content`) }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";

const { t } = useI18n();
const TimelineData: Array<any> = DefaultData.timeline;
</script>

<style lang="scss" scoped>
.v-timeline {
  width: 90%;
}

:deep(.v-timeline-item__opposite) {
  width: 145px;
}
</style>
