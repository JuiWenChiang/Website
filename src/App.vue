<template>
  <v-app>
    <!-- <AppBar></AppBar> -->
    <div class="home-container">
      <SideBar class="side-bar" @linkClicked="scrollToView"></SideBar>
      <v-main class="main-body">
        <div v-for="(view, index) in views" :key="index" :id="view.value" :ref="el => { dynamicRefList[index] = el }"
          :class="{ 'layout-home-height': view.value === 'home' }">
          <component :is="view.component"></component>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue';
import AppBar from './components/common/AppBar.vue'
import SideBar from './components/common/SideBar.vue'

import About from './components/snippets/About.vue'
import Contact from './components/snippets/Contact.vue'
import Home from './components/snippets/Home.vue'
import Project from './components/snippets/Project.vue'
import Resume from './components/snippets/Resume.vue'
import Story from './components/snippets/Story.vue'

// 響應式引用，獲取所有v-for下的ref
const dynamicRefList = ref([]) as any;

// markRaw vs toRow
// https://www.jianshu.com/p/c0b103082889
const views = ref([
  { value: 'home', component: markRaw(Home) },
  { value: 'about', component: markRaw(About) },
  { value: 'contact', component: markRaw(Contact) },
  { value: 'project', component: markRaw(Project) },
  { value: 'resume', component: markRaw(Resume) },
  { value: 'story', component: markRaw(Story) },
]);

function scrollToView(viewValue: string) {
  if (dynamicRefList.value) {
    for (let item of dynamicRefList.value) {
      console.log('item', item)
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

<style scoped>
.home-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.side-bar {
  width: 10%;
  /* 固定在左側 */
  height: 100%;
}

.main-body {
  width: 80%;
  /* 根據內容延伸高度 */
  height: 100vh;
  overflow-y: auto;
}

.layout-home-height {
  height: 60%;
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
