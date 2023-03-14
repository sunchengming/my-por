<template>
    <div class="Son">
        <p>我是子组件</p>
        <p>接受到的值:{{ ftext }}</p>
        <button @click="toValue">点击给父组件传值</button>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    const emit = defineEmits(['exposeDate']);
    const stext = ref('我是子组件的值-ftext');
    const toValue = ()=>{
        emit('exposeDate',stext)
    }
    const props = defineProps({
        ftext:{
            type:String
        }
    })
</script>
