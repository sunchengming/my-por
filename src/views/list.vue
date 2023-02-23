<template>
  <div>list页面</div>
  <button id="counter" @click="increment">{{ count }}</button>
  <button @click="myFn">点击</button>
  {{ state }}aaa
  <button @click="$router.go(-1)">back</button>
  <child />
</template>
  
<script>
import { nextTick, toRef, ref,toRefs,reactive } from 'vue'
import Child from '../components/child.vue'
export default {
  components: { Child },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    async increment() {
      this.count++
      // DOM 还未更新
      console.log(document.getElementById('counter').textContent) // 0
      await nextTick()
      // DOM 此时已经更新
      console.log(document.getElementById('counter').textContent) // 1
    }
  },
  setup() {
    let obj =reactive({ name: 'in' }) ;
    let state = toRefs(obj)

    function myFn() {
      state.name.value = "out"
    }
    return {
      state,
      myFn
    }
  }
}
</script>
<!-- 用setup之后的优化：在 script-setup 模式下，只需要导入组件即可，编译器会自动识别并启用。 -->
<!-- <script setup>
import { ref, nextTick } from 'vue'
const count = ref(0)
const increment = async()=>{
      count.value++;
      // DOM 还未更新
      console.log(document.getElementById('counter').textContent) // 0
      await nextTick()
      // DOM 此时已经更新
      console.log(document.getElementById('counter').textContent) // 1
    }
</script> -->
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  