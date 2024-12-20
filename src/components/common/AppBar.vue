<template>
	<v-app-bar style="  background-image: url('/imgs/test.svg');background-size: cover;">
		<v-btn icon><v-icon>mdi-home-outline</v-icon></v-btn>
		<div>JUI WEN CHIANG</div>
		<v-spacer></v-spacer>
		<template v-for="item in listItem">
			<v-btn variant="text" @click="handleLinkClick(item.value)"> {{ item.title }} </v-btn>
		</template>
		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon icon="mdi-translate"></v-icon>
			<v-tooltip activator="parent" location="start">
				{{ t("common.language") }}
			</v-tooltip>
			<LangaugeMenu @close:menu="handleMenuItemClicked"></LangaugeMenu>
		</v-btn>
	</v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from 'vue-i18n';
import LangaugeMenu from "../common/templateTool/langaugeMenu.vue";

const { t } = useI18n({ useScope: 'global' })

// Define the custom event 'linkClicked'
const emit = defineEmits(["linkClicked"]);
const meanuText = ref<string>("Home");

// Menu Item
const listItem: Array<{ [key: string]: any }> = [
	{ title: "Home", value: "SelfIntroduction" },
	// { title: "Home", value: "Home" },
	// { title: "About", value: "About" },
	{ title: "Project", value: "Project" },
	{ title: "Gallary", value: "Gallary" },
	{ title: "Contact", value: "Contact" },
	// { title: "Test", value: "Test" },
	// { title: "Story", value: "Story" },
];

// 點擊觸發前往該頁面
const handleLinkClick = (value: string) => {
	meanuText.value = value;
	emit("linkClicked", value);
};

// Language
const drawer = ref(false);
const handleMenuItemClicked = () => { drawer.value = false };
</script>