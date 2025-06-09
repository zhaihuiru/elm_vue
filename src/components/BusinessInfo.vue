<script setup lang="ts">
import {useRouter} from "vue-router";
import { ref, computed } from 'vue';

const router = useRouter();
const order = () => {
  router.push('/order');
}

const businessInfo = ref([
  {
    name: '纯肉鲜肉（水饺）',
    describe: '新鲜猪肉',
    price: 15,
    quantity: 2,
    img: '/img/sp01.png'
  },
  {
    name: '玉米鲜肉（水饺）',
    describe: '玉米鲜肉',
    price: 16,
    quantity: 1,
    img: '/img/sp02.png'
  },
  {
    name: '虾仁三鲜（蒸饺）',
    describe: '虾仁三鲜',
    price: 22,
    quantity: 0,
    img: '/img/sp03.png'
  },
  {
    name: '素三鲜（蒸饺）',
    describe: '素三鲜',
    price: 15,
    quantity: 0,
    img: '/img/sp04.png'
  }
])

function addItem(index: number) {
  businessInfo.value[index].quantity++;
}

function removeItem(index: number) {
  if (businessInfo.value[index].quantity > 0) {
    businessInfo.value[index].quantity--;
  }
}

const deliveryFee = 2;
const cartTotal = computed(() =>
    businessInfo.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
const cartCount = computed(() =>
    businessInfo.value.reduce((count, item) => count + item.quantity, 0)
);

</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">商家信息</div>
    <div class="grow">
      <div class="flex flex-wrap items-center justify-center pt-2 rounded-lg">
        <img src="../img/sj01.png" class="w-40 h-30 rounded"/>
      </div>
      <div class="flex flex-wrap items-center justify-center pt-3 text-5.5 font-bold rounded-lg">
        万家饺子（软件园E18店）
      </div>
      <div class="flex flex-wrap items-center justify-center pt-1 text-3.5 text-gray-5">
        ¥15起送 ¥3配送
      </div>
      <div class="flex flex-wrap items-center justify-center pt-1 text-3.5 text-gray-5">
        各种饺子炒菜
      </div>

      <div class="p-3" v-for="(item, index) in businessInfo" :key="index">
        <div class="flex items-center justify-between pb-3">
          <img src="../img/sp01.png" class="w-20 h-20 rounded" />
          <div class="flex-1 pl-4">
            <div class="text-base font-semibold">{{ item.name }}</div>
            <div class="text-sm text-gray-500">{{ item.describe }}</div>
            <div class="text-sm text-gray-500">¥{{ item.price }}</div>
          </div>
          <div class="flex items-center">
            <button @click="removeItem(index)" class="px-2 text-xl text-gray-600">－</button>
            <span class="px-1">{{ item.quantity }}</span>
            <button @click="addItem(index)" class="px-2 text-xl text-green-500">＋</button>
          </div>
        </div>
      </div>


    </div>

    <div class="pb-1">
      &nbsp;
    </div>
    <div>&nbsp;</div>

    <div class="fixed bottom-0 left-0 w-full flex items-center justify-between bg-gray-800 text-white ">
      <div class="flex items-center">
        <div class="relative">
          <div class="relative w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </div>
          <div v-if="cartCount > 0" class="absolute top-0 right-0 bg-red-500 rounded-full text-xs px-1">
            {{ cartCount }}
          </div>
        </div>
        <div>
          <div class="pl-3 text-lg font-semibold">¥{{ cartTotal.toFixed(2) }}</div>
          <div class="pl-3 text-sm text-gray-300">另需配送费¥{{ deliveryFee }}</div>
        </div>

      </div>
      <button @click="order" class="bg-green-500 text-white px-5 py-3 text-lg">去结算</button>
    </div>


  </div>
</template>

<style scoped>

</style>