import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 驗證
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 驗證規則
import AllRules from '@vee-validate/rules'
// 加入語言
import { localize } from '@vee-validate/i18n'
import tw from '@vee-validate/i18n/dist/locale/zh_TW.json'

// Loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// sweetalert
import SweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// google material-symbols
import 'material-symbols'

import App from './App.vue'

// 加入全部規則
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

// 加入多國語系
localize({ tw })
configure({
  generateMessage: localize('tw')
  // validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(SweetAlert)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VLoading', Loading)
app.mount('#app')
