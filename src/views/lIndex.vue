<template>
    <div class="index">
        <div class="left">
            <van-skeleton title avatar :row="1" :loading="loading">
                <div class="sidebar">
                    <img src="../assets/logo.png" alt="">
                    <div class="myTitle">
                        <div class="title1">吴刚</div>
                        <div class="title2">C2017301</div>
                    </div>
                </div>
            </van-skeleton>
            <div>
                <van-cell title="资源池" icon="shop-o" :border="false"></van-cell>
                <van-cell title="厂商考勤管理" icon="shop-o" :border="false"></van-cell>
                <van-collapse v-model="activeNames" :border="false">
                    <van-collapse-item title="标题2" name="2" icon="shop-o" :border="false">
                        <div @click="tip">技术无非</div>
                    </van-collapse-item>
                </van-collapse>
                <van-cell title="资流程查询源池" icon="shop-o" :border="false"></van-cell>
                <van-cell title="考勤流程" icon="shop-o" :border="false"></van-cell>
                <van-cell title="离场流程" icon="shop-o" :border="false"></van-cell>
                <van-cell title="日报管理" icon="shop-o" :border="false"></van-cell>
                <van-cell title="报表" icon="shop-o" :border="false"></van-cell>
                <van-cell title="考勤统计报表" icon="shop-o" :border="false"></van-cell>
                <van-cell title="开发人员工时报表" icon="shop-o" :border="false"></van-cell>
                <van-cell title="结算数据报表" icon="shop-o" :border="false"></van-cell>
            </div>
        </div>
        <div class="right">
            <van-icon name="calendar-o" size="40" @click="toShowTime" />
            <div class="dataPicker" v-if="ifshowPicker">
                <van-date-picker v-model="currentDate" title="选择日期" :min-date="minDate" :max-date="maxDate"
                    @confirm="dataConfirm" />
            </div>
            <div class="dataTime">
                选择的时间:{{ currentDate[0] }}-{{ currentDate[1] }}--{{ currentDate[2] }}
            </div>
            <van-field v-model="result1" is-link readonly name="picker" label="选择器" placeholder="点击选择城市"
                @click="showPicker1 = true" />
            <van-popup v-model:show="showPicker1" position="bottom">
                <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker1 = false" />
            </van-popup>
            <van-field v-model="result2" is-link readonly name="datePicker" label="时间选择" placeholder="点击选择时间"
                @click="showPicker2 = true" />
            <van-popup v-model:show="showPicker2" position="bottom">
                <van-date-picker @confirm="onConfirm2" @cancel="showPicker2 = false" />
            </van-popup>
            <van-form @failed="onFailed">
                <van-cell-group inset>
                    <!-- 通过 pattern 进行正则校验 -->
                    <van-field v-model="value1" name="pattern" placeholder="正则校验"
                        :rules="[{ pattern, message: '请输入正确内容' }]" />
                    <!-- 通过 validator 进行函数校验 -->
                    <van-field v-model="value2" name="validator" placeholder="函数校验"
                        :rules="[{ validator, message: '请输入正确内容' }]" />
                    <!-- 通过 validator 返回错误提示 -->
                    <van-field v-model="value3" name="validatorMessage" placeholder="校验函数返回错误提示"
                        :rules="[{ validator: validatorMessage }]" />
                    <!-- 通过 validator 进行异步函数校验 -->
                    <van-field v-model="value4" name="asyncValidator" placeholder="异步函数校验"
                        :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script setup >
import { ref, onMounted } from "vue"
import { showToast,closeToast, showLoadingToast } from "vant";
const loading = ref(false);
const activeNames = ref(['1']);
const currentDate = ref(['2021', '01', '01']);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 5, 1);
const ifshowPicker = ref(false);
const tip = () => {
    showToast('敬请期待');
}
const toShowTime = () => {
    if (ifshowPicker.value == false) {
        ifshowPicker.value = true
    } else {
        ifshowPicker.value = false
    }

}
const dataConfirm = (e) => {
    console.log(e)
    ifshowPicker.value = false
}
const result1 = ref('');
const showPicker1 = ref(false);
const columns = [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
];

const onConfirm = ({ selectedOptions }) => {
    result1.value = selectedOptions[0]?.text;
    showPicker1.value = false;
};
const result2 = ref('');
const showPicker2 = ref(false);
const onConfirm2 = ({ selectedValues }) => {
    result2.value = selectedValues.join('/');
    showPicker2.value = false;
};


const value1 = ref('');
const value2 = ref('');
const value3 = ref('abc');
const value4 = ref('');
const pattern = /\d{6}/;

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val) => /1\d{10}/.test(val);

// 校验函数可以直接返回一段错误提示
const validatorMessage = (val) => `${val} 不合法，请重新输入`;

// 校验函数可以返回 Promise，实现异步校验
const asyncValidator = (val) =>
    new Promise((resolve) => {
        showLoadingToast('验证中...');

        setTimeout(() => {
            closeToast();
            resolve(val === '1234');
        }, 1000);
    });

const onFailed = (errorInfo) => {
    console.log('failed', errorInfo);
};
onMounted(() => {

})
</script>
<style lang="less" scoped>
.index {
    width: 100%;
    margin-top: -10px;

    .left {
        height: 100vh;
        width: 4rem;
        background: #212529;
        float: left;

        .van-sidebar {
            width: 4rem;
        }

        .sidebar {
            width: 4rem;
            position: relative;

            img {
                position: absolute;
                width: 20px;
                height: 20px;
                border: 10px;
                left: 10px;
                top: 10px;
            }

            .myTitle {
                margin-top: 10px;
                margin-bottom: 15px;

                .title1,
                .title2 {
                    font-size: 10px;
                    padding-top: 6px;
                    text-align: left;
                    padding-left: 40px;
                    color: #fff;
                }
            }

        }


        .van-cell {
            width: 4rem;
            background-color: #212529;
            color: #fff;

            :deep(.van-sidebar-item__text) {
                font-size: 2px;
            }
        }

        .van-collapse-item {
            width: 4rem;

            :deep(.van-collapse-item__title) {
                background: #212529 !important;
                color: #fff;
            }

            :deep(.van-collapse-item__wrapper .van-collapse-item__content) {
                background: #212529;
                color: #fff;
            }
        }
    }

    .right {
        width: 6rem;
        float: right;

        .van-icon {
            margin-top: 20px;
            float: left;
        }

        .dataPicker {
            margin-top: 10px;
        }

        .dataTime {
            margin-top: 30px;
            font-size: 16px;
        }
    }
}
</style>