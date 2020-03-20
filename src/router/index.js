// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import New from '../components/News';
import Content from '../components/Content';

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [{
        path: '',
        redirect: '/news'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: New
    },
    {
        path: '/content/:aid',
        component: Content
    }
];
const router = new VueRouter({
    // 配置路由与组件之间的应用关系
    routes,
    mode: 'history' // 默认使用赫希，就是url有#，现在修改
});

// 3.将router对象传入Vue实例
export default router