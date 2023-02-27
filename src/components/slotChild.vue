
<template>
    <div>
        <!-- 大萝卜 -->
        <div>
            <slot name="bigTurnip"></slot>
        </div>
        <!-- 小萝卜 -->
        <div>
            <slot name="smallTurnip"></slot>
        </div>
        <!-- 中萝卜 -->
        <div>
            <slot name="midTurnip"></slot>
        </div>
        <div>
            <slot personName="xiaoyue" age="18"></slot>
        </div>       
    </div>
    
</template>
<script setup>

</script>
 
<style scoped></style>