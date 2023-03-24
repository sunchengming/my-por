<template>
    <div class="home-container">
        <h3>update使用</h3>
        <hr />
        <input type="text" name="" id="" class="form-control" v-focus />
    </div>
    <h1 v-text='num'></h1>
    <button @click='num++'>自增</button>
    <p>{{ toRefsValue.name.value }}</p>
    <h1 v-text='info.a.b.c'></h1>
  <button @click='changeC'>更新[c]属性</button>

  <h1 v-text='info.d'></h1>
  <button @click='changeD'>更新[d]属性</button>
</template>
<script setup>
import { ref, shallowRef, triggerRef,toRef,reactive,toRefs } from 'vue'
const vFocus = {
    mounted: (el) => el.focus()
}
const num = ref(100);
let user = {name:"张三",age:10};
let toUser = toRef(reactive(user),'name');
let toRefsValue = toRefs(reactive(user))
console.log(toRefsValue.name.value)

let info = shallowRef({a:{b:{c:1}}, d:2})

const changeC = () => {
  info.value.a.b.c++
  triggerRef(info) // 强制渲染更新
}

const changeD = () => {
  info.value.d++
  triggerRef(info) // 强制渲染更新
}
</script>
<style></style>