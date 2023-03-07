<template>
    <div class="home">
        <input type="text" name="" id="">
    </div>
</template>
<script setup>
import { onActivated, onDeactivated } from 'vue';
onActivated(() => {
    console.log("----------activatedkeepAlive--------")
}),
onDeactivated(() => {
    console.log("----------deactivatedkeepAlive--------")
}) 
</script>