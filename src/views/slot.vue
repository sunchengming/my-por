<template>
    <div class="demo1">
        <slotChildren v-slot:one="slotonevalue1">
                <div>匿名插入文本1</div>
                {{ slotonevalue1.value1 }}
        </slotChildren>
        <br>
        <slotChildren v-slot:two="slotonevalue2">
                <div>匿名插入文本2</div>
                {{ slotonevalue2.value2 }}
        </slotChildren>
        <br>
        <slotChildren v-slot:three="slotonevalue3">
                <div>匿名插入文本3</div>
                {{ slotonevalue3.value3 }}
        </slotChildren>
    </div>
</template>
<script setup>
import slotChildren from '../components/slotChild.vue'
</script>
 
