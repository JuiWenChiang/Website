<template>
  <v-layout>
    <v-navigation-drawer floating permanent>
      <SelectTemplate select-type="language"></SelectTemplate>
      <v-list class="list-body" density="compact" nav>
        <v-list-item class="text-center">{{ meanuText }}</v-list-item>
        <v-list-item v-for="item in listItem" :key="item" :value="item.value">
          <v-icon
            icon="mdi-circle-medium"
            @click="handleLinkClick(item.value)"
          ></v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SelectTemplate from "./templateTool/selectTemplate.vue";

// Define the custom event 'linkClicked'
const emit = defineEmits(["linkClicked"]);
const meanuText = ref<string>("Home");

const listItem: any[] = [
  { title: "Home", value: "Home" },
  { title: "About", value: "About" },
  { title: "Story", value: "Story" },
  { title: "Project", value: "Project" },
  // { title: 'Resume', value: 'Resume' },
  { title: "Gallary", value: "Gallary" },
  { title: "Contact", value: "Contact" },
];

// 點擊觸發前往該頁面
function handleLinkClick(value: string) {
  meanuText.value = value;
  emit("linkClicked", value);
}
</script>

<style lang="scss" scoped>
.list-body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>