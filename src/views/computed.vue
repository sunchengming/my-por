<template>
    <div class="page">
        <span v-for="p in pageArr" v-text="p" @click="page = p" :class='{ "on": p === page }'>
        </span>
    </div>
    <input type="text" v-model.trim="text" /> <br>
    你的名字: <span v-text="name"></span>

    <br>
    <h1 v-text='num'></h1>
    <h1 v-text='usr.age'></h1>
    <button @click='change'>改变</button>
    <button @click='stopAll'>停止监听</button>
</template>
<script setup>
import { ref, computed, reactive, watch } from 'vue'
const page = ref(1);
const pageArr = computed(() => {
    const p = page.value;
    return p > 3 ? [p - 2, p - 1, p, p + 1, p + 2] : [1, 2, 3, 4, 5]
});
const name = ref('');
const text = computed({
    get() { return name.value.split('-').join('') },
    set(val) { name.value = val.split('').join('-') }
})

// watch监听ref变量、reactive变量的变化
const num = ref(1)
const usr = reactive({ name: '张三', age: 1 })
const change = () => {
    num.value++
    usr.age++
}

const stop1 = watch([num, usr], ([newNum, newUsr], [oldNum, oldUsr]) => {
    // 对ref变量，newNum是新值，oldNum是旧值
    console.log('num', newNum === oldNum) // false
    // 对reactive变量，newUsr和oldUsr相等，都是新值
    console.log('usr', newUsr === oldUsr) // true
})

// watch还可以监听计算属性的变化
const total = computed(() => num.value * 100)
const stop2 = watch(total, (newTotal, oldTotal) => {
    console.log('total', newTotal === oldTotal) // false
})

// 停止watch监听
const stopAll = () => { stop1(); stop2() }
</script>
<style scoped> .page span {
     display: inline-block;
     padding: 5px 15px;
     border: 1px solid #eee;
     cursor: pointer;
 }

 .page span.on {
     color: red;
 }
</style>