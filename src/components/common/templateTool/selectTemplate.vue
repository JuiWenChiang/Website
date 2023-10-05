<template>
  <template v-if="props.selectType === 'language'">
    <v-select class="pa-2" rounded="pill" variant="solo" hide-details :items="availableLocales"
      :model-value="locale" @update:model-value="changeLocale($event)">
      <template #selection="{ item }">
        <v-icon> {{ getItemIcon(item) }} </v-icon>
      </template>
    </v-select>
  </template>
  <template v-else>
    <v-select label="Select" :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming',
    ]">
    </v-select>
  </template>
</template>

<script setup lang="ts">
import { ref, watch, inject, computed } from "vue";
import { useI18n } from "vue-i18n";
import type { Axios } from "axios";
import Cookies from "js-cookie";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });
const axios = inject("axios") as Axios;

type SelectType = "default" | "language";
type BtnSizeType = "small" | "x-small";

interface ListDataBtnProp {
  selectType?: SelectType;
  linkUrl?: string;
  prefixUrl?: string;
  icon?: string;
  disabled?: boolean;
  btnSize?: BtnSizeType;
  noMarginRight?: boolean;
}
// props ( read only ) : All props form a one-way-down binding between the child property and the parent one
const props = withDefaults(defineProps<ListDataBtnProp>(), {
  btnType: "default",
  prefixUrl: "",
  linkUrl: "",
  disabled: false,
  btnSize: "small",
});

const getIconSize = computed(() => {
  let iconSize: string;
  switch (props.btnSize) {
    case "small":
      iconSize = "x-large";
      break;
    case "x-small":
      iconSize = "large";
      break;
    default:
      iconSize = "x-large";
      break;
  }
  return iconSize;
});

function getItemIcon(item: any) {
  let iconShap = "mdi-alpha-e-circle";
  switch (item.value) {
    case "English":
      iconShap = "mdi-alpha-e-circle";
      break;
    case "繁體中文":
      iconShap = "mdi-alpha-t-circle";
      break;
  }
  return iconShap;
}

function changeLocale(localeValue: string) {
  locale.value = localeValue;
  Cookies.set("locale", localeValue);
  axios.defaults.headers.common["Accept-Language"] = localeValue;
}
</script>

<style lang="scss" scoped>
</style>