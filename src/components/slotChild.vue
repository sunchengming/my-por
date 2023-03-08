
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
            <slot personName="xiaoyue" age="18" name="myPerson"></slot>
        </div>
        <div>
            <tbody class="tbody">
                <tr v-for="item in list" :key="item.id">
                    <slot :user="item" name="mySlot"></slot>
                </tr>
            </tbody>
        </div>
    </div>
</template> 
<script setup>
import { reactive } from "vue"
const list = reactive([
    { id: 1, name: "张三", state: false },
    { id: 2, name: "李四", state: false },
    { id: 3, name: "王五", state: false },
])
</script>
 
<style scoped>
.tbody{
    width: 100%;
    height: 100px;
}
.tbody tr{
    width: 33.33%;
    background: red;
}
</style>