<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="route.name" v-if="route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive" />
  </router-view>
</template>

<script>
import Home from './views/home.vue'
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Home
  },
  setup() {
      const route = useRoute();
      return { route }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
