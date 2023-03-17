<template>
    <SlotChild @exposeData="getData" :ftext="ftext">
        <template #default="{ user }">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td><input type="checkBox" :checked="user.status"></td>
        </template>
    </SlotChild>
    <!-- 自定义属性必须要v-开头 -->
    <input type="text" v-focus />
    <input type="checkBox" :checked="flag">
    <div class="aa">{{ a }}</div>
</template>
<script setup>
import SlotChild from '../components/slotChild2.vue'
import { onMounted, ref, nextTick, reactive } from 'vue'

const ftext = ref('我是父组件-text')
const flag = ref(Boolean)
const myaa = reactive({
    obj: {}
})
const getData = (val) => {
    myaa.obj = val
}
// 在模板中启用 v-focus  directives
const vFocus = {
    mounted: (el) => el.focus()
}
const aa = ref("")
onMounted(() => {   
    nextTick(()=>{
        aa = myaa.obj.myObj.a
    })
    
})
</script>
<style scoped>
* {
    font-size: 16px;
}

td {
    width: 30%;
}
</style>



