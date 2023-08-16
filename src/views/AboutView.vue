<template>
  <div class="veiw-about-layout">
    <h2>About me</h2>
    <p>{{ paragraph1 }}</p>
    <p>{{ paragraph2 }}</p>
    <div class="icon-container">
      <div v-for="item in interest" :key="item">{{ item.title }}</div>
    </div>
  </div>

  <!-- <div class="veiw-about-layout">
    <div class="container" v-for="(item, index) in containers" :key="index" :class="{ 'even': isEven(index) }">
      <img :src="item.imageSrc" class="image" />
      <div class="text">{{ item.text }}</div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
const paragraph1: string = "  Formerly of Oslo's Michelin-starred restaurants Bagatelle and Ylajali (both now closed) and the youngest chef to be named Norway's best chef, Ellingsen returned home in 2015 to refocus his exacting standards on growing, harvesting and refining the spoils of northern Norway. With honed skills and modern techniques, his fine dining restaurant, which opened in 2020, became an outlet for expressing family memories while retelling the story of Norwegian cuisine through an introspective 23-course tasting menu that changes with the seasons.";

const paragraph2: string = "  Its huge success means that guests are waiting up to six months to book a table and taste the updated, hyper-local dishes that reflect how northern Norway's rural communities once lived and dined.Despite Kvitnes Gård's renown within Norway, when I entered, the atmosphere inside was laidback and informal. Rows of shoes lined the foyer and black-and-white family portraits punctuated the living room walls. Ellingsen handed me an 18th-Century key to my room, where I thawed out for a few minutes before joining the other guests to step back into the blustery afternoon for a closer look at the grounds.";
const interest = [
  { title: 'travel' },
  { title: 'music' },
  { title: 'create' },
  { title: 'comminicate' }
]

const containers = [
  { text: paragraph2, imageSrc: "image1.jpg" },
  { text: paragraph2, imageSrc: "image2.jpg" },
  { text: paragraph2, imageSrc: "image3.jpg" }
]
function isEven(index: number) { return index % 2 === 0; }

</script>



<style lang="scss" scoped>
.veiw-about-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-indent: 2em;
  }

  // display: flex;
  .icon-container {
    width: 100%;
    height: 24%;
    margin: 3% 0 3% 0;
    display: flex;
    flex-direction: row;

    >* {
      width: 25%;
      height: auto;
      margin-right: 10px;
      background-color: aquamarine;
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }
}



// .veiw-about-layout {
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// }

// .container {
//   height: 33%;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// }

// .image {
//   flex: 1;
//   order: 2;
//   height: 100%;
//   background-color: aqua;
// }

// .text {
//   flex: 2;
//   order: 1;
//   height: 100%;
//   padding: 1%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .even .image {
//   order: 1;
// }

// .even .text {
//   order: 2;
// }


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
