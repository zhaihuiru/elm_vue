<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
const orderThings = [
{ name: '纯肉鲜肉（水饺）', quantity: 2, price: 15 },
{ name: '玉米鲜肉（水饺）', quantity: 1, price: 16 }
];
const payment = () => {
  router.push("/payment");
}
const deliveryFee = 3;
const total = orderThings.reduce((sum, item) => sum + item.price, 0) + deliveryFee;
</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">确定订单</div>
    <div class="grow">
      <div class="bg-primary text-white pl-2 pt-2 text-3.5" >
        订单配送至:
      </div>
      <div class="bg-primary text-white pl-2 text-5.5 font-bold" >
        昆明市呈贡区云南大学楸苑一栋
        <font-awesome-icon :icon="['fas', 'chevron-right']" size="sm" class="pl-14"/>
      </div>
      <div class="bg-primary text-white pl-2 pb-1 text-3.5" >
        翟女士 15968214019
      </div>
      <div class="p-3 border-b border-gray-300">
        <div class="text-4 font-bold text-gray-500">万家饺子（软件园E18店）</div>
      </div>
      <div class="p-3 ">
        <div v-for="(item, index) in orderThings" :key="index" class="flex justify-between ">
          <div class="flex items-center justify-center pt-1 text-gray-500">
            <img src="../img/sp01.png" class="w-13 h-15 pt-2"/>
            <span class="pl-2 w-">{{ item.name }}</span>×
            <span class="">{{ item.quantity }}</span>
            <div class="text-4 pl-32">¥{{ item.price }}</div>
          </div>
        </div>
        <div class="text-gray-500 flex">
          <div class="pt-6">配送费</div>
          <div class="pl-75 pt-6">¥{{ deliveryFee }}</div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 w-full flex items-center justify-between bg-gray-800 text-white ">
      <div class="flex items-center">
        <div class="text-5 font-bold text-white bg-gray-8 justify-center flex pl-35">¥{{ total }}</div>
      </div>
      <button @click="payment" class="bg-green-500 text-white px-5 py-3 text-lg">去支付</button>
    </div>
  </div>



</template>

<style scoped>

</style>