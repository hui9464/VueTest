import Vue from 'vue';
import VueRouter from "vue-router";

import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import User from './components/User.vue';

Vue.use(VueRouter)

const routes = [
    { path: "/hello", component: HelloWorld },
    { path: "/test", component: Test },
    { path: "/user/:id", component: User },
    // 重定向
    {
        path: '/', redirect: '/hello'
    }
];

const router = new VueRouter({
    routes  
    // (缩写) 相当于 routes: routes
});

export default router;