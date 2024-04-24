<template>
  <div class="w-100 d-flex  flex-column align-center justify-center">
    <template v-for="(item, index) in ProjectsData" :key="index">
      <div class="test card-layout" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
        <h2 class="font-weight-black">{{ t(`project.${item.dictionary}.title`) }}</h2>
        <v-chip class="mr-1" v-for="tag in item.tag" :key="tag" size="small"> {{ tag }} </v-chip>
        <p class="bg-surface-light pt-4">
          Australia's leader has called Elon Musk an "arrogant billionaire" in an escalating feud over X's reluctance to
          remove
          footage of a church stabbing.
          On Monday, an Australian court ordered Mr Musk's social media firm - formerly called Twitter - to hide videos
          of last
          week's attack in Sydney.
          X previously said it would comply "pending a legal challenge".
          Prime Minister Anthony Albanese's criticism followed Mr Musk using a meme to accuse his government of
          censorship.
        </p>
      </div>
    </template>
  </div>

  <!-- <div class="w-100 d-flex  flex-column align-center justify-center">
    <template v-for="(item, index) in ProjectsData" :key="index">
      <v-card class="card-layout" elevation="3" rounded-xl
        prepend-icon="$vuetify">
        <template v-slot:title>
          <span class="font-weight-black">{{ t(`project.${item.dictionary}.title`) }}</span>
        </template>
        <template v-slot:subtitle>
          <v-chip class="mr-1" v-for="tag in item.tag" :key="tag" size="small"> {{ tag }} </v-chip>
        </template>
        <v-card-text class="bg-surface-light pt-4">
          Australia's leader has called Elon Musk an "arrogant billionaire" in an escalating feud over X's reluctance to
          remove
          footage of a church stabbing.
          On Monday, an Australian court ordered Mr Musk's social media firm - formerly called Twitter - to hide videos
          of last
          week's attack in Sydney.
          X previously said it would comply "pending a legal challenge".
          Prime Minister Anthony Albanese's criticism followed Mr Musk using a meme to accuse his government of
          censorship.
          On Tuesday, Mr Albanese told ABC News that Mr Musk "thinks he's above the law but also above common decency".
          Last week Australia's eSafety Commissioner, an independent regulator, threatened X and other social media
          companies
          with hefty fines if they did not remove videos of the stabbing at the Assyrian Christ the Good Shepherd
          church, which
          police have called a terror attack.
          X has argued the order is "not within the scope of Australian law".
          The commissioner sought a court injunction after saying it was clear that X was allowing users outside
          Australia to
          continue accessing footage.
          "I find it extraordinary that X chose not to comply and are trying to argue their case," Mr Albanese told a
          press
          briefing.
          In a subsequent series of online posts, Mr Musk wrote: "I'd like to take a moment to thank the PM for
          informing the
          public that this platform is the only truthful one." Another depicted a Wizard of Oz-style path to "freedom"
          leading
          to an X logo.
          Earlier, he also criticised eSafety Commissioner Julie Inman Grant personally, describing her as "Australian
          censorship commissar".
          Mr Albanese defended Ms Inman Grant, saying she was protecting Australians.
          "Social media needs to have social responsibility with it. Mr Musk is not showing any," he said.
          Monday's injunction will be in place until close of business on Wednesday, at which point a second hearing is
          due to
          take place.
        </v-card-text>
      </v-card>
    </template>
  </div> -->


  <!-- <div class="w-100 h-100 d-flex flex-column align-center justify-center">
    <v-sheet class="-100 h-100 ma-1 elevation-2 rounded-lg" v-for="(item, index) in ProjectsData" :key="index">
      <v-row class="-100 h-100 card-style rounded-lg" no-gutters>
        <v-col class="w-100 h-100 pa-2" cols="4">
          <v-card class="w-100 h-100 elevation-0">
            <v-img :src="item.image" cover></v-img>
          </v-card>
        </v-col>
        <v-col class="pa-2" cols="8">
          <v-card class="w-100 h-100 elevation-0">
            <v-card-text class="w-100 h-90 d-flex flex-column align-center justify-center">
              <p class="text-center">
                {{ t(`project.${item.dictionary}.title`) }}
              </p>
              <div class="w-100 h-100 d-flex align-center justify-center ma-1">
                <v-chip class="mr-1" v-for="tag in item.tag" :key="tag" size="small">
                  {{ tag }}
                </v-chip>
              </div>
              <p>{{ t(`project.${item.dictionary}.summary`) }}</p>
            </v-card-text>
            <v-card-actions class="reveal-button">
              <v-btn color="teal-accent-4" @click="item.reveal = true">
                {{ t(`common.button.revealDescription`) }}
              </v-btn>
            </v-card-actions>
            <v-slide-x-reverse-transition>
              <v-card v-if="item.reveal === true" class="card-reveal">
                <v-card-text>
                  <p>{{ t(`project.${item.dictionary}.information`) }}</p>
                </v-card-text>
                <v-card-actions class="reveal-button">
                  <v-btn color="teal-accent-4" @click="item.reveal = !item.reveal">
                    {{ t(`common.button.revealSummary`) }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-x-reverse-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div> -->

</template>

<script setup lang="ts">
import { ref, computed, type StyleValue } from "vue";
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";

const { t } = useI18n();
const ProjectsData = ref(DefaultData.project);
</script>

<style lang="scss" scoped>
.card-layout {
  width: 60%;
  // margin: 20px;
  // clear: both;
  // height: 200px;
  // background: #FFF;
  // border-radius: 2px;
  margin: 12vh 0;
  padding: 10px;
}

.v-sheet {
  height: 30vh;
  width: 80%;
}

.v-img {
  width: 100%;
  height: 100%;
}

.card-reveal {
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(150deg, #fff1eb 0%, #ace0f9 80%);
}

.reveal-button {
  width: 100%;
  height: 10%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: flex-end;
}

// .overlay-image {
//   background: linear-gradient(
//       to right,
//       rgba(255, 255, 255, 0.355),
//       rgb(255, 255, 255) 80%
//     ),
//     url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat;
// }

// .overlay-image-left {
//   background: linear-gradient(
//       to left,
//       rgba(255, 255, 255, 0.355),
//       rgb(255, 255, 255) 80%
//     ),
//     url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat;
// }

// 漸層加邊界羽化
// .overlay-image {
//   background: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg")
//     no-repeat;
//   position: relative;
// }
// .overlay-image::after {
//   position: absolute;
//   content: "";
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   box-shadow: 20px 0 10px 10px #ffffff inset;
// }</style>