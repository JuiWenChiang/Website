<template>
    <template v-if="props.btnType === 'save'">
        <v-btn icon :disabled="props.disabled" variant="tonal" :size="props.btnSize" :class="{ 'mr-1': !noMarginRight }">
            <v-icon :size="getIconSize" icon="mdi-check-bold"></v-icon>
            <v-tooltip activator="parent" location="top">Test</v-tooltip>
        </v-btn>
    </template>
    <!-- <template v-else-if="props.btnType === 'link'">
        <v-btn icon :disabled="props.disabled" variant="tonal" :size="props.btnSize" :class="{ 'mr-1': !noMarginRight }"
            @click="clickHandler">
            <v-icon :size="getIconSize" icon="mdi-link-variant"></v-icon>
            <v-tooltip activator="parent" location="top">{{ t('common.button.link') }}</v-tooltip>
        </v-btn>
    </template> -->
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { useRouter } from "vue-router";
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n({ useScope: 'global' })
// Tool instances
// const router = useRouter();

// interface //
type BtnType = 'default' | 'save' | 'cancel' | 'copy' | 'edit' | 'link' | 'delete' | 'edit-pencil' | 'new-queue' | 'play-queue' | 'history-queue';
type BtnSizeType = 'small' | 'x-small';

interface ListDataBtnProp {
    btnType?: BtnType;
    linkUrl?: string;
    prefixUrl?: string;
    icon?: string;
    disabled?: boolean;
    btnSize?: BtnSizeType;
    noMarginRight?: boolean;
}
// props ( read only ) : All props form a one-way-down binding between the child property and the parent one
const props = withDefaults(defineProps<ListDataBtnProp>(), {
    btnType: 'default',
    prefixUrl: '',
    linkUrl: '',
    disabled: false,
    btnSize: 'small',
});

const getIconSize = computed(() => {
    let iconSize: string;
    switch (props.btnSize) {
        case 'small':
            iconSize = 'x-large';
            break;
        case 'x-small':
            iconSize = 'large';
            break;
        default:
            iconSize = 'x-large';
            break;
    }
    return iconSize;
})


// 設定前置預設click事件與方法。
// const clickHandler = computed(() => {
//     if (props.btnType === 'link') {
//         return () => link(props.prefixUrl, props.linkUrl);
//     } else {
//         return null;
//     }
// })

// FUNCTIONS
// const link = (prefixUrl: string, url: string): void => {
//     if (!prefixUrl) {
//         prefixUrl = '';
//     }
//     if (url.trim()) {
//         router.push(`${prefixUrl}${url}`)
//     }
// }

</script>