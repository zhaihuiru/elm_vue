<script setup lang="ts">
import {useRouter} from "vue-router";
import BusinessInfo from "@/components/BusinessInfo.vue";

const router = useRouter();
const index = () => {
  router.push("/index");
}
const orderList = () => {
  router.push("/orderList");
}
const businessInfo = () => {
  router.push("/businessInfo");
}
const merchants = ([
  {
    id: 1,
    name: '万家饺子（软件园E18店）',
    desc: '各种饺子炒菜',

  },
  {
    id: 2,
    name: '小锅饭豆腐馆（全运店）',
    desc: '特色美食',
    img: 'https://via.placeholder.com/60x60?text=豆腐',
  },
  {
    id: 3,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
  {
    id: 4,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
  {
    id: 5,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
  {
    id: 6,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
  {
    id: 7,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
  {
    id: 8,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
  {
    id: 9,
    name: '麦当劳麦乐送（全运路店）',
    desc: '汉堡薯条',
    img: 'https://via.placeholder.com/60x60?text=麦当劳',
  },
]);
</script>

<template>


  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">商家列表</div>
    <div class="grow">
      <div
          class="flex items-start justify-start pl-2 w-100 h-30 border-b border-gray-2 cursor-pointer"
          v-for="merchant in merchants" :key="merchant.id">
        <img src="../img/sj01.png" alt="商家图片" class="w-25 h-25 rounded mr-2 mt-2"/>
        <div class="mt-2">
          <div @click="businessInfo" class="font-bold text-4.5 text-gray-6 pl-2.5 pt-3">{{ merchant.name }}</div>
          <div class="text-gray-500 text-sm mt-1 pl-2.5">¥15起送 | ¥3配送</div>
          <div class="text-gray-600 text-sm pl-2.5 pt-1">{{ merchant.desc }}</div>
        </div>

      </div>
    </div>

    <div class="pb-0">
      &nbsp;
    </div>
    <div>&nbsp;</div>

    <div class="bottom-0 left-0 right-0 position-fixed bg-white">
      <div class="border mb-0 border-t-gray-3 font-100 text-3 p-3 ">
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
  </div>

</template>

<style scoped>

</style>