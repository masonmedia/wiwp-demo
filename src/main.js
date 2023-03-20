import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// So your total Bootstrap import statement will be:
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/styles.scss"
// import './assets/main.css'
import "bootstrap"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
