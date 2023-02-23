<template>
  <div class="childClass">
      <p>childClass</p>      
      <button @click="increment" >Count is: {{ count }}</button>
      <button @click="msg">我是按钮</button>
      <span v-pre>{{ this will not be compiled }}</span>
  </div>  
  <router-view/>
</template>
<script setup>
import { ref, onMounted,computed ,inject} from 'vue'

// 响应式状态
const count = ref(0);
const foo = ()=>{
  console.log("foo")
}
const count1 = ref(1)
const plusOne = computed(() => {return count1.value + 1})
console.log(plusOne.value) // 2

defineExpose({
  foo
})
let msg = inject("msg");

// 用来修改状态、触发更新的函数
const increment =()=>{
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.childClass{
  display: block;
  width: 100%;
  height: 100px;
}
</style>
