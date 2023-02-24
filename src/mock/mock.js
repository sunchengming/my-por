import Mock from 'mockjs'
import hmoeApi from '../utils/home.js'
//拦截请求
Mock.mock('/home/getData',hmoeApi.getHomeData);
Mock.mock('/home/getCount',hmoeApi.getCountData);