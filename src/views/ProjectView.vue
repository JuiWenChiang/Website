<template>
  <h1 class="text-center">Project</h1>
  <v-row no-gutters class="d-flex flex-row justify-space-evenly">
    <v-col
      v-for="(item, index) in ProjectsData"
      :key="index"
      cols="3"
    >
      <v-card class="h-100 w-100 d-flex flex-column">
        <div class="pa-2">
          <v-img class="rounded" cover :src="item.image"></v-img>
        </div>
        <div>
          <v-card-title class="text-center">
            {{ t(`project.${item.dictionary}.title`) }}
          </v-card-title>
          <v-card-text>
            <v-chip
              class="mr-1"
              v-for="tag in item.tag"
              :key="tag"
              color="green"
              size="x-small"
            >
              {{ tag }}
            </v-chip>
            <p class="mt-3">
              {{ t(`project.${item.dictionary}.summary`) }}
            </p>
          </v-card-text>
        </div>
        <v-card-actions class="mt-auto align-end justify-end">
          <v-btn color="teal-accent-4" @click="item.reveal = true">
            Information
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="item.reveal === true"
            class="v-card--reveal d-flex flex-column"
          >
            <v-card-text>
              <p>{{ t(`project.${item.dictionary}.information`) }}</p>
            </v-card-text>
            <v-card-actions class="align-end justify-end">
              <v-btn color="teal-accent-4" @click="item.reveal = !item.reveal">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";

const { t } = useI18n();
const ProjectsData = ref(DefaultData.project);
</script>

<style lang="scss" scoped>
.v-col-3 {
  flex: 0 0 30%;
  max-width: 30%;
}

.v-card--reveal {
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
}
</style>