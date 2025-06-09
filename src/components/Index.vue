<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();
const orderList = () => {
  router.push("/orderList");
}
const businessInfo = () => {
  router.push("/businessInfo");
}
const businessList = () => {
  router.push("/businessList");
}

const merchants = ref([
  {
    name: '万家饺子（软件园E18店）',
    image: '../img/sj01.png',
    stars: '4.9',
    monthlySales: 345,
    minOrder: 15,
    deliveryFee: 3,
    distance: '3.22km',
    deliveryTime: '30分钟',
    newUserDiscount: '饿了么新用户首单立减9元',
    specialOffer: '特价商品5元起'
  },
  {
    name: '小锅饭豆腐馆（全运店）',
    image: '../img/sj02.png',
    stars: '5.0',
    monthlySales: 12,
    minOrder: 15,
    deliveryFee: 3,
    distance: '3.22km',
    deliveryTime: '30分钟',
    newUserDiscount: '饿了么新用户首单立减9元',
    specialOffer: '特价商品5元起'
  },
  {
    name: '麦当劳麦乐送（全运路店）',
    image: '../img/sj03.png',
    stars: '4.9',
    monthlySales: 345,
    minOrder: 15,
    deliveryFee: 3,
    distance: '3.22km',
    deliveryTime: '30分钟',
    newUserDiscount: '饿了么新用户首单立减9元',
    specialOffer: '特价商品5元起'
  }
]);

const isFixed = ref(false);

const handleScroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let width = document.documentElement.clientWidth;
  isFixed.value = scroll > width * 0.12;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="p-2 bg-primary">
    <div class="p-1 text-white font-bold">
      <font-awesome-icon :icon="['fas', 'location-dot']"/>
      云南省昆明市呈贡区云南大学
      <font-awesome-icon :icon="['fas', 'caret-down']"/>
    </div>
  </div>
    <div class="flex p-2 bg-primary">
      <div class="flex items-center w-full bg-white rounded-1" :class="{ 'fixed top-0 left-0 right-0 z-10 bg-white shadow': isFixed }">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-gray-400 ml-3 text-center"/>
        <input type="text" placeholder="搜索饿了么商家、商品名称"
               class="flex-1 py-2 px-3 text-3 outline-none placeholder-gray-400 "/>
      </div>
    </div>


  <div>
    <div class="flex flex-wrap justify-around mt-4 text-3 text-gray-5">
      <div class="flex flex-col items-center justify-between">
        <img src="../img/dcfl01.png" height="36" width="49"/>
        <span class="text-center">美食</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <img src="../img/dcfl02.png" height="36" width="49"/>
        <span class="text-center">早餐</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <img src="../img/dcfl03.png" height="36" width="49"/>
        <span class="text-center">跑腿代购</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <img src="../img/dcfl04.png" height="36" width="49"/>
        <span class="text-center">汉堡披萨</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <img src="../img/dcfl05.png" height="36" width="49"/>
        <span class="text-center">甜品饮品</span>
      </div>
    </div>
    <div>
      <div class="flex flex-wrap justify-around mt-4 text-3 text-gray-5">
        <div class="flex flex-col items-center justify-between">
          <img src="../img/dcfl06.png" height="36" width="49"/>
          <span class="text-center">速食简餐</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="../img/dcfl07.png" height="36" width="49"/>
          <span class="text-center">地方小吃</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="../img/dcfl08.png" height="36" width="49"/>
          <span class="text-center">米粉面馆</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="../img/dcfl09.png" height="36" width="49"/>
          <span class="text-center">包子粥铺</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <img src="../img/dcfl10.png" height="36" width="49"/>
          <span class="text-center">炸鸡炸串</span>
        </div>
      </div>
    </div>
  </div>

  <div class="p-2 relative w-full overflow-hidden">
    <img src="../img/index_banner.png" class="w-full h-auto object-cover" height="260" width="840">
    <div class="absolute inset-0 flex flex-col justify-center items-start px-8 ">
      <div class="text-4 font-bold mb-1 text-black">品质套餐</div>
      <div class="text-3 mb-4 text-gray-400">搭配齐全吃得好</div>
      <div class="text-3 mb-4 text-yellow-500">立即抢购 ></div>
    </div>
  </div>

  <div class="flex justify-center items-center ">
    <div class="pl-5 pt-1 bg-secondary h-12 w-96 flex items-center">
      <img src="../img/super_member.png" height="30" width="30"/>
      <div class="pl-3 pt-0.5 text-third font-bold">超级会员</div>
      <div class="pl-1 pt-0.5 text-third text-3 font-bold">·</div>
      <div class="pl-1 pt-0.5 text-third text-3">每月享超值权益</div>
      <div class="pl-20 pt-0.5 text-third text-3">立即开通 ></div>
    </div>
  </div>

  <div class="p-4">
    <div class="flex items-center justify-center font-300">— 推荐商家 —</div>
    <div class="flex justify-between items-center mb-4 text-3 pt-5 pl-3 pr-3">
      <div>
        综合排序
        <font-awesome-icon :icon="['fas', 'caret-down']"/>
      </div>

      <div>距离最近</div>
      <div>销量最高</div>
      <div>
        筛选
        <font-awesome-icon :icon="['fas', 'filter']"/>
      </div>
    </div>
  </div>


  <div>
    <div class="flex items-start justify-start pl-2 w-100 h-40 border-b border-gray"
         v-for="(merchant, index) in merchants" :key="index">
      <img src="../img/sj01.png" class="w-18 h-20 pt-2"/>
      <div class="pl-2">
        <div class="flex">
          <div @click="businessInfo" class="text-3.75 font-bold text-gray-8">{{ merchant.name }}</div>
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="sm" class="flex pt-1 items-end justify-end"/>
        </div>
        <div class="flex pt-2">
          <font-awesome-icon :icon="['fas', 'star']" size="2xs" style="color: #FFD43B;"/>
          <font-awesome-icon :icon="['fas', 'star']" size="2xs" style="color: #FFD43B;"/>
          <font-awesome-icon :icon="['fas', 'star']" size="2xs" style="color: #FFD43B;"/>
          <font-awesome-icon :icon="['fas', 'star']" size="2xs" style="color: #FFD43B;"/>
          <font-awesome-icon :icon="['fas', 'star']" size="2xs" style="color: #FFD43B;"/>
          <div class=" text-3 text-gray-500 pl-2">{{ merchant.stars }} 月售{{ merchant.monthlySales }}单</div>
          <div class="flex pl-25 pt-1">
            <div class="flex text-2 bg-primary text-white rounded items-center justify-center w-10 h-3 ">蜂鸟专送</div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex text-3 text-gray-500 pt-2">￥{{ merchant.minOrder }}起送 | ￥{{
              merchant.deliveryFee
            }}配送
          </div>
          <div class="flex text-3 text-gray-500 pt-2 items-end">{{ merchant.distance }} | {{
              merchant.deliveryTime
            }}
          </div>
        </div>
        <div class=" pt-2">
          <div class="text-3 text-gray-500 rounded-full border-gray-500">各种饺子</div>
          <div class="pt-2 flex">
            <div class="flex w-5 text-3 text-white pl-1 rounded bg-green-500">新</div>
            <div class="text-black text-3 pl-1">{{ merchant.newUserDiscount }}</div>
          </div>

          <div class="pt-1 flex">
            <div class="flex w-5 text-3 text-white pl-1 rounded bg-orange-500">新</div>
            <div class="text-black text-3 pl-1">{{ merchant.specialOffer }}</div>
          </div>

        </div>
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
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'house']"/>
          <span class="text-center">首页</span>
        </div>
        <div @click="businessList" class="flex flex-col items-center justify-between">
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
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>