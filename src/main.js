

import { createApp } from 'vue'
import App from './AppProyecto.vue'
import router from './router/proyecto_router.js'
// import store from './store'

const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')
