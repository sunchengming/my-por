<template>
    <h1 v-text='info.a.b.c'></h1>
    <h1 v-text='info.d'></h1>
    <button @click='change'>改变</button>
</template>
  
<script setup>
import { shallowReactive, isProxy } from 'vue'
const info = shallowReactive({ a: { b: { c: 1 } }, d: 2 })

const change = () => {
    info.d++  // 只改变d，视图自动更新
    info.a.b.c++ // 只改变c，视图不会更新
    // 同时改变c和d，二者都更新
}

console.log(isProxy(info))  // true
console.log(isProxy(info.d))  // false
</script>