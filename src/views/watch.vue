<template>
    <h1 v-text='num'></h1>
    <h1 v-text='usr.age'></h1>
    <button @click='change'>改变</button>
    <button @click='stopAll'>停止监听</button>
  </template>
  
  <script setup>
    import { ref, reactive, watch, computed } from 'vue'
  
    // watch监听ref变量、reactive变量的变化
    const num = ref(1)
    const usr = reactive({name:'张三',age:1})
    const change = () => {
      num.value++
      usr.age++
    }
    const stop1 = watch([num,usr], ([newNum,newUsr],[oldNum,oldUsr]) => {
      // 对ref变量，newNum是新值，oldNum是旧值
      console.log('num', newNum === oldNum) // false
      // 对reactive变量，newUsr和oldUsr相等，都是新值
      console.log('usr', newUsr === oldUsr) // true
    })
  
    // watch还可以监听计算属性的变化
    const total = computed(()=>{return num.value*100})
    const stop2 = watch(total, (newTotal, oldTotal) => {
      console.log('total', total,newTotal,oldTotal) // false
    })
  
    // 停止watch监听
    const stopAll = () => { stop1(); stop2() }
  </script>

<!-- watch

作用：用于监听响应式变量的变化，组件初始化时，它不执行。
语法：const stop = watch(x, (new,old)=>{})，调用stop() 可以停止监听。
语法：const stop = watch([x,y], ([newX,newY],[oldX,oldY])=>{})，调用stop()可以停止监听。 -->