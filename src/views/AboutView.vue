<template>
  <v-timeline class="ma-5">
    <v-timeline-item v-for="(item, index) in  TimelineData " :key="index" :dot-color="item.color" :icon="item.icon"
      fill-dot>
      <v-card>
        <v-card-title class="text-h7 text-center" :style="{ color: item.color }">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <span v-for="(tag, itag) in item.tag" :key="itag">
            <v-chip class="mr-2" size="small" color="green">{{ tag }}</v-chip>
          </span>
          <p class="font-weight-bold">{{ item.period }}</p>
          <p>{{ item.content }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import DefaultData from '@/stores/defaultData.json';

const TimelineData = DefaultData.timeline;

</script>



<style lang="scss" scoped>
.v-timeline--vertical.v-timeline {
  grid-row-gap: 0px;
}

// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
</style>
