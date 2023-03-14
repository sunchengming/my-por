<template>
    <div class="Father">
        <p>我是父组件</p>
        <isChild :ftext="ftext" @exposeDate="getDate"></isChild>
        <showMessage :str="str" :num="num" :bool="bool" :arr="arr" :obj="obj" :date="date" :a="a" :b="b"
            :getConsole="getConsole" id="abc" class="abcd"></showMessage>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import isChild from '../components/isChild.vue'
import showMessage from '../components/defineProps.vue'
const ftext = ref("父组件-text");
const getDate = (val) => {
    console.log('接受子组件的值', val.value)
}
const str = "吃饭睡觉打豆豆";
const num = 100;
const bool = true;
const arr = ["apple",'orange','lemon'];
const obj = {
    name:'coderXiao',
    age:18
};
const date = new Date();
const a = Symbol("好好学习");
const b = Symbol('天天向上');
//定义方法
const getConsole = ()=>{
    console.log("传递子组件的方法")
}
</script>