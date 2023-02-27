<template>
        <div class="demo1">
                <Child>
                        <template #smallTurnip>
                                小萝卜
                        </template>
                        <template #midTurnip>
                                中萝卜
                        </template>
                        <template #bigTurnip>
                                大萝卜
                        </template>
                </Child>
                <Child v-slot="slotProps">
                        My name is {{ slotProps.personName }} and I am {{ slotProps.age }} years old this year
                </Child>
                <ul>
                        <ol v-for="item of countData">
                                {{ item }}
                        </ol>
                </ul>
                <van-list modelValue="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                        <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
        </div>
</template>
<script setup>
import Child from '../components/slotChild.vue'
import { ref, reactive, onMounted } from "vue"
import axios from 'axios'
let countData = reactive([]);
const list = reactive([]);
const loading = ref(false);
const finished = ref(false);
const onLoad = () => {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                        list.push(list.length + 1);
                }

                // 加载状态结束
                loading.value = false;

                // 数据全部加载完成
                if (list.length >= 40) {
                        finished.value = true;
                }
        }, 1000);
};
const getTableList = async () => {
        await axios.get("/slotChild/dataList").then((res) => {
                if (res.data.code == 200) {
                        for (var i in res.data.data.items) {
                                countData.push(res.data.data.items[i].productId)
                        };
                        console.log(countData)
                }
        });
}
onMounted(() => {
        getTableList();
})
</script>
 
