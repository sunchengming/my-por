import { createApp } from 'vue'
import { Button, Cell, CellGroup, Icon  } from 'vant'
import router from './router'
import App from './App.vue'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(router)
app.use(Button).use(Cell).use(CellGroup).use(Icon )
app.mount('#app')
