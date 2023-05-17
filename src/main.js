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
//全局自定义组件
// app.directive('focus',{
//     mounted(el){
//         el.focus()
//     }
// })
// 全局封装对象去重方法
let $arr = (arr,initArr=[])=>{
    arr.forEach(item=>{
        let isFind = initArr.find(cell=> cell.id === item.id)
        if(!isFind) {
            initArr.push(item)
        }
    })
    return initArr
} 

// const uniqueArr = arr.filter((item, index, self) => {
//     // 利用findIndex方法找到第一个与当前元素id相等的元素索引
//     const i = self.findIndex(t => t.id === item.id);
//     // 如果当前索引等于当前元素在self中的最初出现位置索引，则表示元素符合要求，不是重复元素，保留
//     return i === index;
//   });
app.config.globalProperties.$arr = $arr;
app.provide('user', 'administrator');
app.mount('#app')


