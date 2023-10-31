<template>
  <v-app>
    <div class="Container">
      <v-main class="Main-Body">
        <div
          v-for="(view, index) in views"
          :key="index"
          :id="view.value"
          :ref="
            (el) => {
              dynamicRefList[index] = el;
            }
          "
        >
          <component
            class="CustomeStyle Component-View"
            :is="view.component"
          ></component>
        </div>
      </v-main>
      <SideBar @linkClicked="scrollToView"></SideBar>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, markRaw } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";

import SideBar from "./components/common/SideBar.vue";
import AboutView from "./views/AboutView.vue";
import Contact from "./views/ContactView.vue";
import Gallary from "./views/GallaryView.vue";
import HomeView from "./views/HomeView.vue";

import Project from "./views/ProjectView.vue";
import Resume from "./views/ResumView.vue";
import Story from "./views/StoryView.vue";
import Footer from "./views/FooterView.vue";


// 響應式引用，獲取所有v-for下的ref
const dynamicRefList = ref([]) as any;

// 目標為個人'商業'網站

// markRaw vs toRow
// https://www.jianshu.com/p/c0b103082889
const views = ref([
  { value: "Home", component: markRaw(HomeView) },
  { value: "Story", component: markRaw(Story) }, // 改為about
  { value: "Experience", component: markRaw(AboutView) }, // 改為經驗
  { value: "Project", component: markRaw(Project) },
  // { value: "Gallary", component: markRaw(Gallary) },
  { value: "Footer", component: markRaw(Footer) },

  // { value: "Contact", component: markRaw(Contact) },
]);

function scrollToView(viewValue: string) {
  if (dynamicRefList.value) {
    for (let item of dynamicRefList.value) {
      // console.log('item', item)
    }
  }

  const targetView = document.getElementById(viewValue);
  if (targetView) {
    targetView.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
</script>

<style lang="scss" scoped>
.Container {
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 90px;
  // background-image: url("/imgs/test.svg");
  // background-size: cover;
}

.Main-Body {
  height: 100vh;
  overflow: auto;
  // padding: 2%;
}

@media (min-width: 1024px) {
  .side-bar {
    width: 200px;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
