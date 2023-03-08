<template>
  <div>list页面</div>
  <button id="counter" @click="increment">{{ count }}</button>
  <button @click="myFn">点击</button>
  {{ state }}aaa
  <button @click="goBack">back</button>
  <child />
  <div id="nav" style="margin-top: 20px;">
    <router-link to="/useKeepAlive">useKeepAlive</router-link> |
    <router-link to="/keepAlive">keepAlive</router-link>
  </div>  
</template>
  
<script>
import { nextTick, toRefs, reactive, provide } from 'vue'
import { useRouter } from 'vue-router';
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
    let obj = reactive({ name: 'in' });
    let state = toRefs(obj);
    const router = useRouter();

    function myFn() {
      state.name.value = "out"
    }
    function msg() {
      alert("你好！");
    }
    function goBack() {
      router.back()
    }
    provide("msg", msg);
    return {
      state,
      myFn,
      msg,
      goBack
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
  