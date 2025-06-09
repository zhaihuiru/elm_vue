<template>
  <div id="app">
    <router-view></router-view>
<!--    <Payment></Payment>-->
  </div>
</template>

<script setup lang="ts">

import Index from "@/components/Index.vue";
import BusinessInfo from "@/components/BusinessInfo.vue";
import BusinessList from "@/components/BusinessList.vue";
import OrderList from "@/components/OrderList.vue";
import Payment from "@/components/Payment.vue";
</script>
