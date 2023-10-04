<template>
  <v-app>
    <div class="d-flex flex-row overflow-hidden">
      <v-main class="main-body">
        <div v-for="(view, index) in views" :key="index" :id="view.value" :ref="el => {dynamicRefList[index] = el }">
          <!-- :class="{ 'layout-home': view.value === 'Home' }" -->
          <component class="customeText" :is="view.component"></component>
        </div>
      </v-main>
      <SideBar class="side-bar" @linkClicked="scrollToView"></SideBar>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue';
import AppBar from './components/common/AppBar.vue'
import SideBar from './components/common/SideBar.vue'
import AboutView from './views/AboutView.vue'
import Contact from './views/ContactView.vue'
import Gallary from './views/GallaryView.vue'
import HelloWorld from './views/helloWorld.vue'
import HomeView from './views/HomeView.vue'
import Project from './views/ProjectView.vue'
import Resume from './views/ResumView.vue'
import Story from './views/StoryView.vue'
import { useI18n } from "vue-i18n";
import axios from "axios";

const { locale } = useI18n({ useScope: 'global' })
axios.defaults.headers.common["Accept-Language"] = locale.value as string

// 響應式引用，獲取所有v-for下的ref
const dynamicRefList = ref([]) as any;

// markRaw vs toRow
// https://www.jianshu.com/p/c0b103082889
const views = ref([
  { value: 'Home', component: markRaw(HomeView) },
  { value: 'About', component: markRaw(AboutView) },
  { value: 'Project', component: markRaw(Project) },
  { value: 'Resume', component: markRaw(Resume) },
  { value: 'Story', component: markRaw(Story) },
  { value: 'Gallary', component: markRaw(Gallary) },
  { value: 'Contact', component: markRaw(Contact) },
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
      behavior: 'smooth',
      block: 'start',
    });
  }
}

</script>

<style lang="scss" scoped>
.side-bar {
  flex: 1;
  height: 100%;
  top: 0;
  right: 0;
  overflow: hidden;
}

.main-body {
  flex: 15;
  height: 100vh;
  overflow: auto;
}

.layout-home {
  height: 60vh;
}

/* @media (min-width: 1024px) {
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
} */
</style>
