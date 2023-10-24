<template>
  <v-layout>
    <v-navigation-drawer floating permanent>
      <div class="d-flex justify-center">
        <v-btn class="justify-center" icon="mdi-plus" variant="text">
          <component :is="langIcon"></component>
          <v-tooltip activator="parent" location="bottom">
            {{ t("common.language") }}
          </v-tooltip>
          <LangaugeMenu @close:menu="handleMenuItemClicked"></LangaugeMenu>
        </v-btn>
      </div>
      <v-list class="list-body" density="compact" nav>
        <v-list-item class="text-center">{{ meanuText }}</v-list-item>
        <v-list-item
          rounded="circle"
          v-for="item in listItem"
          :key="item"
          :value="item.value"
        >
          <v-icon
            icon="mdi-circle-medium"
            size="large"
            @click="handleLinkClick(item.value)"
          ></v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import { watch, computed, ref, markRaw } from "vue";
import { useI18n } from "vue-i18n";
import LangaugeMenu from "../common/templateTool/langaugeMenu.vue";
import IconEcosystem from "../icons/IconEcosystem.vue";
import IconTooling from "../icons/IconTooling.vue";

const { t, locale } = useI18n({ useScope: "global" });

// Define the custom event 'linkClicked'
const emit = defineEmits(["linkClicked"]);
const meanuText = ref<string>("Home");

// Menu Item
const drawer = ref(false);
const handleMenuItemClicked = () => {
  drawer.value = false;
};

// switch Language SVG
const langIcon = computed(() => {
  switch (locale.value) {
    case "English":
      return IconEcosystem;
    case "繁體中文":
      return IconTooling;
    default:
      locale.value = 'English'
      return IconEcosystem;
  }
});

const listItem: any[] = [
  { title: "Home", value: "Home" },
  { title: "About", value: "About" },
  { title: "Project", value: "Project" },
  { title: "Story", value: "Story" },
  { title: "Gallary", value: "Gallary" },
  // { title: "Contact", value: "Contact" },
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
  height: 80%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>