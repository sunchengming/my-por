// src/router/index.js
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'
const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(() => import(`../views/home.vue`)),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/list',
      name: 'list',
      component: defineAsyncComponent(() => import(`../views/list.vue`)),
      meta: {
        title: '列表页',
      },
    },
    {
      path: '/ajaxDemo',
      name: 'ajaxDemo',
      component: defineAsyncComponent(() => import(`../views/home.vue`)),
      meta: {
        title: 'ajaxDemo',
      },
    },
    {
      path: '/slot',
      name: 'slot',
      component: defineAsyncComponent(() => import(`../views/slot.vue`)),
      meta: {
        title: 'slot',
      },
    },
    {
      path: '/lIndex',
      name: 'lIndex',
      component: defineAsyncComponent(() => import(`../views/lIndex.vue`)),
      meta: {
        title: 'index',
      },
    },
    {
      path:'/useKeepAlive',
      name:"useKeepAlive",
      component:defineAsyncComponent(()=>import('../views/useKeepAlive.vue')),
      meta:{
        title:"缓存页面",
        keepAlive:true
      }
    },
    {
      path:'/keepAlive',
      name:"keepAlive",
      component:defineAsyncComponent(()=>import('../views/keepAlive.vue')),
      meta:{
        title:"缓存页面",
        keepAlive:true
      }
    },
    {
      path:'/doc',
      name:"doc",
      component:defineAsyncComponent(()=>import('../views/doc.vue'))
    },
    {
      path:'/isFather',
      name:"isFather",
      component:defineAsyncComponent(()=>import('../views/isFather.vue'))
    },
    {
      path:'/isChild',
      name:"isChild",
      component:defineAsyncComponent(()=>import('../components/isChild.vue'))
    },
    {
      path:'/defineProps',
      name:"defineProps",
      component:defineAsyncComponent(()=>import('../components/defineProps.vue'))
    },
    {
      path:'/slot2',
      name:"slot2",
      component:defineAsyncComponent(()=>import('../views/slot2.vue'))
    },
    {
      path:'/slotChild2',
      name:"slotChild2",
      component:defineAsyncComponent(()=>import('../components/slotChild2.vue'))
    },
    {
      path:'/update',
      name:"update",
      component:defineAsyncComponent(()=>import('../views/update.vue'))
    },
    {
      path:'/test',
      name:"test",
      component:defineAsyncComponent(()=>import('../views/test.vue'))
    },
    {
      path:'/watch',
      name:"watch",
      component:defineAsyncComponent(()=>import('../views/watch.vue'))
    },
    {
      path:'/computed',
      name:"computed",
      component:defineAsyncComponent(()=>import('../views/computed.vue'))
    },
    {
      path: '/*',
      redirect: '/',
    },
  ]
})
// 全局路由守卫
router.beforeEach((to, from, next)=>{
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})
router.afterEach((to, from)=>{
  // console.log(to, from)
  console.log('afterEach')
})
export default router