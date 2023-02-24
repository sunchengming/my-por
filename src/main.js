import { createApp } from 'vue'
import { Button, Cell, CellGroup, Icon,Tag} from 'vant'
import router from './router'
import App from './App.vue'
import 'vant/lib/index.css'
import './mock/mock.js'
import ElementPlus from 'element-plus';
const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.use(Button).use(Cell).use(CellGroup).use(Icon).use(Tag)
app.mount('#app')


