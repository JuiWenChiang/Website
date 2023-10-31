<template>
  <v-layout>
    <v-navigation-drawer floating permanent>
      <div class="d-flex justify-center">
        <v-btn class="justify-center" icon>
          <v-icon icon="mdi-translate"></v-icon>
          <v-tooltip activator="parent" location="start">
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

const { t } = useI18n({ useScope: "global" });

// Define the custom event 'linkClicked'
const emit = defineEmits(["linkClicked"]);
const meanuText = ref<string>("Home");

// Menu Item
const drawer = ref(false);
const handleMenuItemClicked = () => {
  drawer.value = false;
};

const listItem: any[] = [
  { title: "Home", value: "Home" },
  { title: "Story", value: "Story" },
  { title: "Experience", value: "About" },
  { title: "Project", value: "Project" },
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
.veiw-sidebar-layout {
  background-image: url('/imgs/Sidebar.svg');
  background-size: cover;
}

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