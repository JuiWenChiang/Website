<template>
  <h1 class="text-center">About Me</h1>
  <v-timeline class="pa-10" side="end">
    <v-timeline-item v-for="(item, index) in TimelineData" :key="index" :dot-color="item.color" :icon="item.icon"
      fill-dot>
      <template v-slot:opposite>
        <div class="d-flex flex-column text-end">
          <p>{{ item.title }}</p>
          <!-- <p>AI Smaert Application Developmen<br> Practical Training Course</p> -->
        </div>
      </template>
      <v-card>
        <v-card-text>
          <span class="font-italic">{{ item.tag + ' , ' + item.period }}</span>
          <div class="my-2">{{ item.content }}</div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import DefaultData from '@/stores/defaultData.json';

const TimelineData: Array<any> = DefaultData.timeline;
</script>



<style lang="scss" scoped>
// .v-timeline--vertical.v-timeline {
//   grid-row-gap: 0px;
// }

// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
</style>
