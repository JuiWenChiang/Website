<template>
  <div class="story-container">
    <div class="d-flex flex-column align-center justify-center">
      <h1>Story</h1>
      <p>{{ t("about.experience") }}</p>
    </div>
  </div>
  <div class="d-flex flex-row align-center justify-center">
    <div class="testImage">
      <v-row no-gutters class="d-flex flex-row align-center justify-center">
        <v-col cols="6">
          <v-img
            width="450"
            height="500"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <h2>Title</h2>
          <p>
            I am a software development engineer with a background in art and
            design. I have experience in both graphic and three-dimensional art,
            and I have merged the creativity of art with the practicality of
            technology.I enjoy learning and trying new things, which is why I
            pursued a career in lighting design in China from scratch,
            eventually successfully completing a prominent restaurant's lighting
            design project. I also decided to work and holiday in Australia
            after sharing life experiences with friends. Furthermore, my
            interest in artificial intelligence led me to take a course and work
            as an engineer in the field. Additionally, I started learning to
            play the guzheng (a traditional Chinese musical instrument) after
            being deeply moved by a piece of music.
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.testImage {
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
  // background-color: aqua;
}

.story-container {
  width: 100%;
  height: 650px;
  display: flex;
  align-items: center;
  justify-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat
      center center fixed;
  background-size: cover;
}
</style>