<template>
  <div class="veiw-home-layout">
    <div class="part-column customeText">
      <h1 class="name">Hello World</h1>

      <h1 class="name">JUI WEN<br/> CHIANG</h1>
      <h2 class="title">{{title}}</h2>
      <p class="description">Hello</p>
    </div>
    <div class="part-column">
      <v-img :width="300" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
      <div>icon</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title:string = "There remains a sense of timelessness to experiencing the austere peaks and glassy lochs of the Scottish Highlands or the gently undulating downs and dales of England."
</script>

<style lang="scss" scoped>
.veiw-home-layout {
  width: 100%;
  height: 100%;
  display: flex;

  .part-column {
    flex: 1;

    .name{
      margin-bottom: 20%
      // font-size: 4rem !important;
    }

    // .title{
    //   margin: 10% 20% 5% 10%;
    //   // font-size: 1rem;
    // }
    // .description{
    //   margin: 0 20% 0 10%;
    //   // font-size: 1rem;
    // }

  }

  
}
</style>