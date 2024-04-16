<template>
    <v-app-bar elevation="1">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
		<!-- <v-app-bar-title class="title" >
			<div>Application Bar</div>
		</v-app-bar-title> -->
		<v-toolbar-title>Application Bar</v-toolbar-title>
        <!-- <v-app-bar-title style="width: 30%;">Application Bar</v-app-bar-title> -->
		<template v-for="item in listItem">
			<v-btn variant="text"> {{ item.title }} </v-btn>
		</template>
		<div class="d-flex justify-center">
			<v-btn class="justify-center" icon>
			<v-icon icon="mdi-translate"></v-icon>
			<v-tooltip activator="parent" location="bottom">
				{{ t("common.language") }}
			</v-tooltip>
			<LangaugeMenu @close:menu="handleMenuItemClicked"></LangaugeMenu>
			</v-btn>
		</div>
		<!-- <v-list class="list-body" density="compact" nav>
			<v-list-item class="text-center">{{ meanuText }}</v-list-item>
			<v-list-item
			rounded="circle"
			v-for="item in listItem"
			:key="item"
			:value="item.value"
			>
			<v-icon
				icon="mdi-circle-medium"
				size="large"
				@click="handleLinkClick(item.value)"
			></v-icon>
			</v-list-item>
		</v-list> -->
    </v-app-bar>
	<!-- <v-snackbar :model-value="props.modelValue" v-bind="finalOptions" style="white-space: pre-line;"
		@update:model-value="emit('update:modelValue', $event)" location="top" color="white">
		{{ props.text }}
		<template v-slot:actions>
			<v-btn color="blue" variant="flat" @click="emit('update:modelValue', false)">
				{{ t('common.button.close') }}
			</v-btn>
		</template>
	</v-snackbar> -->
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from 'vue-i18n';
import LangaugeMenu from "../common/templateTool/langaugeMenu.vue";

const { t } = useI18n({ useScope: 'global' })
const props = withDefaults(defineProps<{
	modelValue: boolean;
	options?: Object;
	text: string;
	customtimeout?:number;
}>(), {
	modelValue: false,
	options: () => {
		return {}
	},
})


const defaultOptions = {
	timeout: props.customtimeout !== undefined ? props.customtimeout : 2000
}
const finalOptions = ref({ ...defaultOptions, ...props.options })
// Define the custom event 'linkClicked'
const emit = defineEmits(["linkClicked"]);
const meanuText = ref<string>("Home");

// Menu Item
const drawer = ref(false);
const handleMenuItemClicked = () => {
  drawer.value = false;
};

const listItem: any[] = [
  { title: "Home", value: "Home" },
  { title: "Story", value: "Story" },
  { title: "Experience", value: "About" },
  { title: "Project", value: "Project" },
  { title: "Gallary", value: "Gallary" },
  // { title: "Contact", value: "Contact" },
];

// 點擊觸發前往該頁面
function handleLinkClick(value: string) {
  meanuText.value = value;
  emit("linkClicked", value);
}

</script>


<style lang="scss" scoped>
.multiline-snackbar {
  white-space: pre-line;
}
</style>
<!-- <template>
    <v-app-bar height="50" color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Title</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<style lang="scss" scoped>
v-toolbar__content{
    box-shadow: none;
}
</style> -->
