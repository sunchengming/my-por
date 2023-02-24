<template>
    <div id="el" ref="el">123</div>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">
                    <div class="user-info">
                        <p class="name">Admin</p>
                        <p class="role">超管</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间:<span>2022-7-21</span></p>
                    <p>上次登录地点:<span>北京</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top:20px" height="450px">
                <el-table :data="tableData">
                    <el-table-column v-for="(item, index) in tableHeader" :key="index" :prop="index" :label="item">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top:20px">
            <div class="count-num">
                <el-card shadow="hover" :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData">
                    <component class="icons" :is="item.icon" :style="{ background: item.color }"></component>
                    <div class="count-detail">
                        <p class="number">￥{{ item.value }}</p>
                        <p class="text">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
    <router-link tag="span" to="./list">跳转到list</router-link>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import axios from 'axios'

const el = ref()

let tableData = ref([]);          //直接导入数据会不会成功需要引入ref初始化
let countData = ref([]);
const tableHeader = {
    name: '课程',
    todayBuy: '今日销量',
    monthBuy: '本月销量',
    totalBuy: '总销量',
};

const getTableList = async () => {
    await axios.get("/home/getData").then((res) => {
        console.log(res);
        if (res.data.code == 200) {
            tableData.value = res.data.data;
        }
    });
}

const getCountList = async () => {
    await axios.get("/home/getCount").then((res) => {
        console.log(res);
        if (res.data.code == 200) {
            countData.value = res.data.data;
        }
    });
}
onMounted(() => {
    getTableList(),
    getCountList(),
    console.log(document.getElementById('el').textContent)
})
onBeforeRouteLeave((e) => {
    console.log(e)
})

</script>
<style scoped></style>