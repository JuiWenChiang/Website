import { createI18n } from 'vue-i18n'
import en_US from "./en_US.json"
import zh_TW from "./zh_TW.json"
import { en, zhHant } from "vuetify/locale"
import Cookies from 'js-cookie'

const messages = {
  "en_US": {
    $vuetify: { ...en },
    ...en_US
  },
  "zh_TW": {
    $vuetify: { ...zhHant },
    ...zh_TW
  }
}

const i18n = createI18n({
  legacy: false,
  locale: Cookies.get("locale") ? Cookies.get("locale") : navigator.language,
  fallbackLocale: 'en_US', // 若locale不是英文或繁中則呈現英文
  messages
})

export default i18n