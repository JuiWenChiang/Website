import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.css";
import type { IconAliases } from "vuetify";

const customAliases: IconAliases = {
  ...aliases,
//   barLine: Barline,
//   blockSymbol: Blocksymbol,
//   dataGrid: Datagrid,
//   gauge: Gauge,
//   icon: Icon,
//   iframe: Iframe,
//   image: Image,
//   list: List,
//   pie: Pie,
//   progressBar: Progressbar,
//   text: Text,
//   textCard: Textcard,
//   waterBox: Waterbox,
}

// 主題顏色
// const customTheme = {
//   dark: false,
//   colors: {
//     background: "#3d569a",
//     surface: "#0b2f5399",
//     primary: "#000000",
//     "primary-1": "#0059FF",
//     "card-background": "#ffffff",
//     secondary: "#03DAC6",
//     "secondary-darken-1": "#018786",
//     error: "#B00020",
//     info: "#2196F3",
//     success: "#4CAF50",
//     warning: "#f44336",
//   },
// };

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases: customAliases,
    sets: {
      mdi,
    },
  },
  // theme: {
  //   defaultTheme: "customTheme",
  //   themes: {
  //     customTheme,
  //   },
  // },
});
