import { createRouter, createWebHistory } from 'vue-router';
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Index from "../components/Index.vue";
import Order from '@/components/Order.vue';
import BusinessInfo from "@/components/BusinessInfo.vue";
import BusinessList from "@/components/BusinessList.vue";
import Payment from "@/components/Payment.vue";
import OrderList from '@/components/OrderList.vue';
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
        path: '/businessInfo',
        name: 'BusinessInfo',
        component: BusinessInfo
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;