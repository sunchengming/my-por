
<template>
    <div>
        <slot name='one' :value1="child1"> 这就是默认值1</slot>
        <slot name='two' :value2="child2"> 这就是默认值2 </slot>
        <slot name='three' :value3="child3"> 这就是默认值3 </slot>
        <!-- <div>我是孩子插槽</div> -->
    </div>
</template>
<script setup>
import { ref } from "vue"
const child1 = ref("数据1")
const child2 = ref("数据2")
const child3 = ref("数据3")
</script>
 
<style scoped></style>