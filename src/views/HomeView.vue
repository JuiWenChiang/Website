<template>
  <div class="veiw-home-layout">
    <div class="h-100 w-50 justify-center align-center pa-10">
      <h1 class="font-weight-medium" > Hello,</h1>
      <div>
        <!-- <svg class="circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="50" fill="#F44336" />
        </svg> -->
        <h1 class="font-weight-medium text">I'm Jui Wen Chiang.</h1>
      </div>
    </div>
    <div class="h-100 w-50 pa-5 d-flex flex-column align-end justify-center">
      <p class="text-h5 my-5">a developer, a designer</p>
      <div class="my-2">
        <!-- <v-icon icon="mdi-email-edit-outline" size="large" color="green"></v-icon> -->
        <span>juiwenchiang@gmail.con</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title: string = "There remains a sense of timelessness to experiencing the austere peaks and glassy lochs of the Scottish Highlands or the gently undulating downs and dales of England."
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

// .Poppins {
//   font-family: 'Poppins', serif !important;
// }

.container {
  // width: 100%;
  // height: 100%;

  position: relative;
  /* 父容器设置为相对定位 */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.text{
  // position: absolute;
  // z-index: 10;
}
.circle {
  // width: 100%;
  // height: 100%;
  // position: absolute;
  // left: 10;
  // top: 1;
  // z-index: 5;
}

.veiw-home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>