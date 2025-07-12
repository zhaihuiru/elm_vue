<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const index = () => {
  router.push("/index");
};

const orderList = () => {
  router.push("/orderList");
};

const businessList = () => {
  router.push("/businessList");
};

const myInfo = () => {
  router.push("/myInfo");
}
</script>

<template>
  <div class="bottom-0 left-0 right-0 position-fixed bg-white">
    <div class="border mb-0 border-t-gray-3 font-100 text-3 p-3">
      <div class="flex justify-around text-gray-400">
        <div @click="index" class="flex flex-col items-center justify-between cursor-pointer">
          <font-awesome-icon :icon="['fas', 'house']" />
          <span class="text-center">首页</span>
        </div>
        <div @click="businessList" class="flex flex-col items-center justify-between cursor-pointer">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          <span class="text-center">发现</span>
        </div>
        <div @click="orderList" class="flex flex-col items-center justify-between cursor-pointer">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          <span class="text-center">订单</span>
        </div>
        <div @click="myInfo" class="flex flex-col items-center justify-between cursor-pointer">
          <font-awesome-icon :icon="['fas', 'user']" />
          <span class="text-center">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 可以根据需要添加样式 */
</style>