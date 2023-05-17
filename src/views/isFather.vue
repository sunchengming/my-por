<template>
    <div class="Father">
        <p>我是父组件</p>
        <isChild :ftext="ftext" @exposeDate="getDate"></isChild>
        <showMessage :str="str" :num="num" :bool="bool" :arr="arr" :obj="obj" :date="date" :a="a" :b="b"
            :getConsole="getConsole" id="abc" class="abcd"></showMessage>
        <p v-text="aa"></p>
    </div>
    <div v-for="item in 2" :key="item" :ref="setItemRef">1</div>
    <div>
        <button @click="person.name += '~'">修改姓名</button>
        <button @click="person.age++">增长年龄</button>
        <button @click="person.job.j1.salary++">张薪</button>
    </div>
</template>
<script setup>
import { ref, provide, getCurrentInstance, reactive, inject,watch,watchEffect } from 'vue'
import isChild from '../components/isChild.vue'
import showMessage from '../components/defineProps.vue'
const { proxy } = getCurrentInstance();
console.log(proxy.$attrs, proxy.$arr([
    { id: "1", name: "李白" },
    { id: "2", name: "杜甫" },
    { id: "3", name: "白居易" },
    { id: "4", name: "项羽" },
    { id: "5", name: "小米" },
    { id: "1", name: "红米" },
    { id: "1", name: "诺基亚" },
    { id: "2", name: "真我" }
]))
const aa = ref("");
const ftext = ref("父组件-text");
const getDate = (val) => {
    aa.value = val.value
    console.log('接受子组件的值', val.value)
}
const str = "吃饭睡觉打豆豆";
const num = 100;
const bool = true;
const arr = ["apple", 'orange', 'lemon'];
const obj = {
    name: 'coderXiao',
    age: 18
};
const date = new Date();
const a = Symbol("好好学习");
const b = Symbol('天天向上');
//定义方法
const getConsole = () => {
    console.log("传递子组件的方法")
}
const msg = ref("hello world");
provide("msg", msg)

const list = reactive([])
const setItemRef = (el) => {
    list.push(el);
    console.log(list)
}
console.log('全局provide-inject', inject('user'))

let person = reactive({
    name:"张三",
    age:18,
    job:{
        j1:{
            salary:20
        }
    }
})
watchEffect(()=>{
    const x2 = person.job.j1.salary;
    console.log(x2)
})
</script>