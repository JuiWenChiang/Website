<template>
  <v-app>
    <AppBar @linkClicked="scrollToView"></AppBar>
    <div class="mainbody-container">
      <v-main class="mainbody">
        <div v-for="(view, index) in views" :key="index" :id="view.value" :ref="(el) => { dynamicRefList[index] = el; }">
          <component class="CustomeStyle view-component" :is="view.component"></component>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, markRaw, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import AOS from 'aos';

// import SideBar from "./components/common/SideBar.vue";
import AppBar from "./components/common/AppBar.vue";
import AboutView from "./views/AboutView.vue";
import Contact from "./views/ContactView.vue";
import Gallary from "./views/GallaryView.vue";
import HomeView from "./views/HomeView.vue";
import Project from "./views/ProjectView.vue";
import Resume from "./views/ResumView.vue";
import Story from "./views/StoryView.vue";
import Footer from "./views/FooterView.vue";
import TestView from "./views/TestView.vue";
import SelfIntroductionHomeView from "./views/SelfIntroduction_HomeView.vue";

AOS.init();
window.addEventListener('load', AOS.refresh)
// onMounted(() => {
//   AOS.init();
// });

// 響應式引用，獲取所有v-for下的ref
const dynamicRefList = ref<Array<any>>([]);

// 點擊觸發前往該頁面
const scrollToView = (viewValue: string) => {
  const targetView = document.getElementById(viewValue);
  if (targetView) {
    targetView.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// markRaw vs toRow https://www.jianshu.com/p/c0b103082889
// look for AppBar.vue
const views = [
  { value: "SelfIntroduction", component: markRaw(SelfIntroductionHomeView) },
  // { value: "Home", component: markRaw(HomeView) },    // text
  // { value: "About", component: markRaw(AboutView) },  // timeline
  { value: "Project", component: markRaw(Project) },  // animation text
  { value: "Gallary", component: markRaw(Gallary) },  // images
  // { value: "Contact", component: markRaw(Contact) },  // contact from
  // { value: "Test", component: markRaw(TestView) },
  // { value: "Story", component: markRaw(Story) },
  { value: "Footer", component: markRaw(Footer) },
];
</script>

<style lang="scss" scoped>
.mainbody-container {
  display: grid;
  display: flex;
  justify-content: center;
}

.mainbody {
  height: 100vh;
  max-width: 80%; // width of all pages
}

.view-component{
  // margin-top: 5rem;
  // margin-bottom: 5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
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