<template>
    <p>home页面</p>
    <van-tag type="danger">标签van-tag</van-tag>
    <button id="counter" @click="increment">Count is: {{ count }}</button>
    <p>{{ plusOne }}</p>
    <van-button type="primary">主要按钮</van-button>
    <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="vant-icon">
        <van-icon name="chat-o" badge="99+" />
    </div>
    <router-link tag="span" to="./list">跳转到list</router-link>
    <child ref="roleref" />
</template>
  
<script setup>
// setup的作用：
// 1.变量无需进行 return
// 2.子组件无需手动注册 
// 3.props 的接收方式变化等（比较多）
import { ref, onMounted, nextTick, toRefs, reactive, watchEffect, watch, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { version } from 'vue'
import { computed } from '@vue/reactivity';
import Child from '../components/child.vue'

const route = useRoute()
const router = useRouter()
const roleref = ref()
console.log(route.query)
console.log(router)
console.log(version)
function msg() {
    alert("你好！");
}

provide("msg", msg);

router.beforeEach((to, from) => {
    console.log(to, from)
})
// 响应式状态
const count = ref(0);
// watchEffect():
// 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
watchEffect(() => console.log("watchEffect", count.value))
// watch方法运用
watch(count, (count, prevCount) => {
    console.log("watch", count, prevCount)
})
let checked = ref(Boolean)//设置boolean值
console.log(checked.value)
const state = reactive({
    foo: 1,
    bar: 2
})
// toRef是对原始数据的引用，修改toRef数据时，原始数据也会发生改变，但是视图并不会更新。
// toRefs是将整个对象转化成响应式数据 toRefs(obj)
const fooRef = toRefs(state)
console.log("state", state.foo)
console.log("fooRef", fooRef.foo.value)

// 用来修改状态、触发更新的函数
const increment = async () => {
    // count.value++;
    // console.log(`The initial count is ${count.value}.`)
    count.value++;
    // DOM 还未更新
    console.log(document.getElementById('counter').textContent) // 0
    await nextTick()
    // DOM 此时已经更新
    console.log(document.getElementById('counter').textContent) // 1
}
const plusOne = computed({
    get: () => count.value + 1,
    set: (val) => {
        count.value = val - 1
    }
})
// 生命周期钩子
onMounted(() => {
    roleref.value.foo();
    console.log(roleref.value);
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

.vant-icon {
    display: block;
    float: left;
}
</style>
  