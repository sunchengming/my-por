import { createApp } from 'vue'
import { Button, Cell, CellGroup, Icon,Tag,List,Sidebar, SidebarItem,Skeleton,
    SkeletonTitle,
    SkeletonImage,
    SkeletonAvatar,
    SkeletonParagraph,
    Collapse,
    CollapseItem,
    DatePicker,
    Form, Field,Picker,Popup} from 'vant'
import router from './router'
import App from './App.vue'
import 'vant/lib/index.css'
import './mock/mock.js'
import ElementPlus from 'element-plus';
import 'amfe-flexible'
const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.use(Button).use(Cell).use(CellGroup).use(Icon).use(Tag).use(List).use(Sidebar).use(SidebarItem)
.use(Skeleton).use(SkeletonTitle).use(SkeletonImage).use(SkeletonAvatar).use(SkeletonParagraph)
.use(Collapse).use(CollapseItem).use(DatePicker).use(Form).use(Field).use(Picker).use(Popup)

app.mount('#app')


