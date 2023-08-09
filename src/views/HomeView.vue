<template>
  <div class="veiw-home-layout">
    <div class="part-column customeText">
      <h1 class="name">Heading1</h1>
      <h2 class="title">Heading2</h2>
      <p class="description">Hello</p>
    </div>
    <div class="part-column">
      <v-img :width="300" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
      <div>icon</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.veiw-home-layout {
  width: 100%;
  height: 100%;
  display: flex;

  .part-column {
    flex: 1;

    // h2 {
    //   color: aqua;
    // }

    .name{
      margin: 10% 20% 20% 10%;
      // font-size: 4rem !important;
    }

    .title{
      margin: 10% 20% 5% 10%;
      // font-size: 1rem;
    }
    .description{
      margin: 0 20% 0 10%;
      // font-size: 1rem;
    }

  }

  
}
</style>