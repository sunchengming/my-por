<template>
    <div class="Son">
        <p>我是子组件</p>
        <p>接受到的值:{{ ftext }}</p>
        <button @click="toValue">点击给父组件传值</button>
    </div>
    <h1 v-text="msg"></h1>
</template>
<script setup>
import { ref, inject } from 'vue'

// defineEmits 用于声明父组件传递过来的自定义事件。
const emit = defineEmits(['exposeDate']);
const stext = ref('我是子组件的值-ftext');

const toValue = () => {
    emit('exposeDate', stext)
}

// defineProps 用于接收父组件传递过来的自定义属性。 
const props = defineProps({
    ftext: {
        type: String
    }
})
const msg = inject('msg')
</script>
