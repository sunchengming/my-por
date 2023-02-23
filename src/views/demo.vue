<template>
    <div id="el" ref="el">123</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
   console.log(document.getElementById('el').textContent)
})
</script>
<style scoped></style>