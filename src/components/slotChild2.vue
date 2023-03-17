<template>
    <div class="Son">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list" :key="item.id">
                <slot :user="item"></slot>
            </tr>
        </tbody>

        <p>我是子组件</p>
        <button @click="toValue">点击给父组件传值</button>
    </div>
</template>
<script setup>
import { ref, reactive,onMounted } from 'vue';
const list = ref([
    { id: 1, name: "张三", status: false },
    { id: 2, name: "李四", status: true },
    { id: 3, name: "王五", status: false }
])
// setup 语法糖写法
//用defineEmits()来定义子组件要抛出的方法,语法defineEmits(['要抛出的方法'])
const emit = defineEmits(['exposeData'])

const stext = reactive({
    num: 123,
    age: 21,
    flag: false,
    myObj:{
        a:"张三"
    }
})
onMounted(()=>{
    emit('exposeData', stext)
})
</script>
<style>
* {
    font-size: 16px;
}
</style>