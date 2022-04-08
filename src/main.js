import { createApp } from 'vue'
import App from './App.vue'
import translater from './plugins/translater.js'
import { Ru, En } from './plugins/dictionary.js'
import theme from './plugins/theme.js'
//import './style.css'

const app = createApp(App);
app.use( translater, { Ru, En } )
app.use( theme )
app.mount('#app')