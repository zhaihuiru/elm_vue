<template>
  <div id="app">
    <router-view></router-view>
<!--    <MyInfo></MyInfo>-->
<!--<Login></Login>-->
  </div>
</template>

<script setup lang="ts">

import Index from "@/components/Index.vue";
import BusinessInfo1 from "@/components/BusinessInfo1.vue";
import BusinessList from "@/components/BusinessList.vue";
import OrderList from "@/components/OrderList.vue";
import Payment from "@/components/Payment.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import MyInfo from "@/components/MyInfo.vue";
</script>
