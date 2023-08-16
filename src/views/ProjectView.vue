<template>
    <v-timeline align="start">
        <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
            <v-card>
                <v-card-title :class="['text-h6', `bg-${item.color}`]">
                    Lorem Ipsum Dolor
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                    <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                        convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                        salutandi sententiae.</p>
                    <v-btn :color="item.color" variant="outlined">
                        Button
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>

    <!-- <div class="veiw-project-layout">
        <div class="projetc" v-for="item in projects" :key="item">
            <span class="title">{{ item.title }}</span>
            <span class="tag">{{ item.tag }}</span>
        </div>
    </div> -->
</template>

<script setup lang="ts">
const projects: object[] = [
    { title: 'Dashboard', tag: 'Font-end' },
    { title: 'Identify Website', tag: 'NLP' },
    { title: 'Deepheart', tag: 'NLP' },
    { title: 'Dashboard', tag: 'Font-end' }
]

let items = [
    {
        color: 'red-lighten-2',
        icon: 'mdi-star',
    },
    {
        color: 'purple-lighten-2',
        icon: 'mdi-book-variant',
    },
    {
        color: 'green-lighten-1',
        icon: 'mdi-airballoon',
    },
    {
        color: 'indigo-lighten-2',
        icon: 'mdi-layers-triple',
    },
]

</script>

<style lang="scss" scoped>
.veiw-project-layout {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //lex-direction: column;
    justify-content: center;
    align-items: center;

    .projetc {
        flex: 1 0 50%;
        height: 50%;
        width: 50%;
        background: limegreen;
        border: 1px solid #eee;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            color: white;
            font-size: 1.5rem;
        }

        .tag {
            color: rgb(152, 152, 152);
            font-size: 1rem;
        }
    }


    //   background-color: aquamarine;
    //   background-image:url("/imgs/test.jpeg")
}
</style>