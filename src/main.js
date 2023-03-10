import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  size: 'small',
  locale
})

app.mount('#app')
