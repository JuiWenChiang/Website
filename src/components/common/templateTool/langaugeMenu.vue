<template>
  <v-menu activator="parent" v-model="showMenu" :close-on-content-click="false">
    <v-card>
      <v-list>
        <v-list-item
          @click="handleMenuItemClicked('English')"
          title="English"
        ></v-list-item>
        <v-list-item
          @click="handleMenuItemClicked('繁體中文')"
          title="繁體中文"
        ></v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { useI18n } from "vue-i18n";
import type { Axios } from "axios";
import Cookies from "js-cookie";

const axios = inject("axios") as Axios;
const { t, locale, availableLocales } = useI18n({ useScope: "global" });

const showMenu = ref(false);
const handleMenuItemClicked = (localeValue: string) => {
  showMenu.value = false;
  locale.value = localeValue;
  Cookies.set("locale", localeValue);
  axios.defaults.headers.common["Accept-Language"] = localeValue;
};
</script>