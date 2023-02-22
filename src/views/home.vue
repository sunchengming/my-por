<template>
    <p>home页面</p>
    <button @click="increment">Count is: {{ count }}</button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="success">朴素按钮</van-button>
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <van-button plain hairline type="success">细边框按钮</van-button>
    <van-button disabled type="primary">禁用状态</van-button>
    <van-button disabled type="success">禁用状态</van-button>
    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="success" loading-text="加载中..." />
    <van-button square type="primary">方形按钮</van-button>
    <van-button round type="success">圆形按钮</van-button>
    <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-icon name="chat-o" badge="99+" />
    <router-link tag="span" to="./list">跳转到list</router-link>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { version } from 'vue'

const route = useRoute()
const router = useRouter()
console.log(route.query)
console.log(router)
console.log(version)


router.beforeEach((to, from) => {
 console.log(to,from)
})
// 响应式状态
const count = ref(0);
let checked = ref(false)

// 用来修改状态、触发更新的函数
function increment() {
    count.value++;
    console.log(`The initial count is ${count.value}.`)
}

// 生命周期钩子
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  