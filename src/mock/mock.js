import Mock from 'mockjs'
import hmoeApi from '../utils/home.js'
import slotChild from '../utils/slotChild.js'
//拦截请求
Mock.mock('/home/getData',hmoeApi.getHomeData);
Mock.mock('/home/getCount',hmoeApi.getCountData);
Mock.mock('/slotChild/dataList',slotChild.dataList);