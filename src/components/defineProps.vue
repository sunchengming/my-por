<template>
    <div>
        <h3>字符串: {{props.str}}</h3>
    <h4>数字: {{props.num}}</h4>
    <h4>布尔: {{props.bool}}</h4>
    <h4>数组: {{props.arr}}</h4>
    <h4>对象: {{props.obj}}</h4>
    <h4>日期: {{props.date}}</h4>
    <h4>Symbol: {{props.a}} - {{props.b}}</h4>
    </div>
    
</template>
<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        str: String,
        num: Number,
        bool: Boolean,
        arr: Array,
        obj: Object,
        date: Date,
        getConsole: Function,
        message: Object,
        a: Symbol,
        b: Symbol
    })
    
    props.getConsole()
</script>