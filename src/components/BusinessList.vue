<script setup lang="ts">
import { useRouter } from "vue-router";
import BusinessInfo1 from "@/components/BusinessInfo1.vue";
import Bottom from "@/components/Bottom.vue";
import sj01 from '@/img/sj01.png';
import sj02 from '@/img/sj02.png';
import sj04 from '@/img/sj04.png';
import sp01 from '@/img/sp01.png';
import sp02 from '@/img/sp02.png';
import sp03 from '@/img/sp03.png';
import sp04 from '@/img/sp04.png';
import sp05 from '@/img/sp05.png';
import sp06 from '@/img/sp06.png';
import sp07 from '@/img/sp07.png';
import sp08 from '@/img/sp08.png';
import sp09 from '@/img/sp09.png';
import sp10 from '@/img/sp10.png';
import sp11 from '@/img/sp11.png';
import sp12 from '@/img/sp12.png';

const router = useRouter();

const businessInfo = (id: number) => {
  router.push(`/businessInfo/${id}`);
};

const merchants = [
  {
    id: 1,
    name: '万家饺子（软件园E18店）',
    desc: '各种饺子',
    img: sj01,
    minOrder: 15,
    deliveryFee: 3,
    dishes: [
      { name: '纯肉饺子', price: 15, img: sp01 },
      { name: '玉米饺子', price: 16, img: sp02 },
      { name: '虾仁三鲜', price: 22, img: sp03 },
      { name: '素三鲜', price: 15, img: sp04 },
    ],
  },
  {
    id: 2,
    name: '小锅饭豆腐馆（全运店）',
    desc: '特色美食',
    img: sj02,
    minOrder: 20,
    deliveryFee: 5,
    dishes: [
      { name: '招牌豆腐', price: 15, img: sp05 },
      { name: '小锅饭', price: 20, img: sp06 },
      { name: '凉拌菜', price: 18, img: sp07 },
      { name: '特色牛肉', price: 20, img: sp09 },
    ],
  },
  {
    id: 3,
    name: '米村拌饭（全运路店）',
    desc: '各种家常菜',
    img: sj04,
    minOrder: 10,
    deliveryFee: 2,
    dishes: [
      { name: '青椒肉丝', price: 20, img: sp08 },
      { name: '水蒸蛋', price: 13, img: sp10 },
      { name: '香辣牛肉', price: 22, img: sp11 },
      { name: '麻辣豆腐', price: 15, img: sp12 },
    ],
  },

];
</script>

<template>
  <div class="flex flex-col h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">商家列表</div>

    <div class="flex-1 overflow-y-auto">
      <div class="border-b border-gray-200 p-3" v-for="merchant in merchants" :key="merchant.id">
        <div class="flex items-start mb-4">
          <img :src="merchant.img" alt="商家图片" class="w-25 h-25 rounded object-cover mr-3"/>

          <div class="flex-1">
            <div @click="businessInfo(merchant.id)" class="font-bold text-gray-800 text-lg mb-1 mt-3 cursor-pointer hover:text-primary">
              {{ merchant.name }}
            </div>
            <div class="text-gray-500 text-sm mb-1">¥{{ merchant.minOrder }}起送 | ¥{{ merchant.deliveryFee }}配送</div>
            <div class="text-gray-600 text-sm">{{ merchant.desc }}</div>
          </div>
        </div>

        <div class="ml-15 w-75">
          <div class="flex overflow-x-auto pb-2 scrollbar-hide">
            <div v-for="(dish, index) in merchant.dishes" :key="index" class="flex-shrink-0 w-24">
              <div class="flex flex-col items-center">
                <img :src="dish.img" alt="菜品图片" class="w-20 h-20 rounded object-cover"/>
                <span class="text-sm mt-1 text-center w-full truncate">{{ dish.name }}</span>
                <span class="text-xs text-red-500">¥{{ dish.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-0">
      &nbsp;
    </div>
    <div>&nbsp;</div>

    <Bottom />
  </div>
</template>
.scrollbar-hide::-webkit-scrollbar {
display: none;
}
.scrollbar-hide {
-ms-overflow-style: none;
scrollbar-width: none;
}
<style scoped>

</style>