import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)
//글로벌 변수 저장소...
app.config.globalProperties.emitter = emitter;

import store from './store.js'


app.use(store).mount('#app')
