import { createRouter, createWebHistory } from 'vue-router';
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Index from "../components/Index.vue";
import Order from '@/components/Order.vue';
import BusinessInfo1 from "@/components/BusinessInfo1.vue";
import BusinessList from "@/components/BusinessList.vue";
import Payment from "@/components/Payment.vue";
import OrderList from '@/components/OrderList.vue';
import MyInfo from "@/components/MyInfo.vue";
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/businessInfo/1',
        name: 'BusinessInfo1',
        component: BusinessInfo1
    },
    {
        path: '/businessInfo/2',
        name: 'BusinessInfo2',
        component: BusinessInfo1
    },
    {
        path: '/businessInfo/3',
        name: 'BusinessInfo3',
        component: BusinessInfo1
    },
    {
        path: '/businessList',
        name: 'BusinessList',
        component: BusinessList
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/orderList',
        name: 'OrderList',
        component: OrderList
    },
    {
        path: '/myInfo',
        name: 'MyInfo',
        component: MyInfo
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;