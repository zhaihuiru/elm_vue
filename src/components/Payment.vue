<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const register = () => {
  router.push("/register");
}
const index = () => {
  router.push("/index");
}
const orderList = () => {
  router.push("/orderList");
}
</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">在线支付</div>
    <div class="grow">
      <div>
        <div class="text-gray px-5 py-5 text-4">订单信息：</div>
        <div class="flex color-gray">
          <div class="text-gray pl-5 text-4 font-bold">万家饺子（软件园E18店）</div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="pt-1"/>
          <div class="pl-30 font-bold text-red">¥49</div>
        </div>
        <div>
          <div class="flex p-5">
            <img src="../img/alipay.png" height="32" width="120"/>
            <font-awesome-icon :icon="['fas', 'check']" size="2xl" style="color: #63E6BE;" class="pl-50"/>
          </div>
          <div class="flex pl-5 pt-3">
            <img src="../img/wechat.png" height="32" width="120"/></div>
          </div>
      </div>

    </div>
    <div class="border border-t-gray-3 font-100 text-3 p-3 ">
      <div class="flex  justify-around text-gray-400">
        <div @click="index" class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'house']"/>
          <span class="text-center">首页</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']"/>
          <span class="text-center">发现</span>
        </div>
        <div @click="orderList" class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
          <span class="text-center">订单</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'user']"/>
          <span class="text-center">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>