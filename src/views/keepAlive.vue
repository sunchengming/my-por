<template>
    <div class="keepAlive">
        <input type="text">
    </div>
</template>
<script setup>
import { onActivated, onDeactivated } from "vue"
onActivated(()=>{
    console.log("----------activatedkeepAlive--------")
}) 
onDeactivated(()=>{
    console.log("----------deactivatedkeepAlive--------")
})
</script>
<style></style>