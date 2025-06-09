import { createApp } from 'vue'
import App from './App.vue'

import router from './router';


import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/main.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'//同一个图标的其他系列

library.add(fas,far)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');