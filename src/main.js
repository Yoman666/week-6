import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// 引入自訂義的樣式
import './assets/all.scss'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
// app.component('Form', Form)
// app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
