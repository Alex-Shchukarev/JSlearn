import { createApp } from 'vue'
import App from './App.vue'
import translater from './plugins/translater.js'
import { Ru, En } from './plugins/dictionary.js'
import './theme.css'
import './style.css'

const app = createApp(App);
app.use( translater, { Ru, En } )
app.mount('#app')