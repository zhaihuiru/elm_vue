<template>
  <div class="flex flex-col min-h-screen bg-gray-100">

    <div class="bg-white p-4">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
          <img src="../img/userImg/yhtx01.png" alt="用户头像">
        </div>
        <div class="ml-3">
          <p class="text-lg font-bold">{{ phone }}</p>
          <div class="flex items-center text-sm text-gray-500">
            <span class="bg-gray-200 px-2 py-1 rounded mr-2">白银会员</span>
            <span>7月会员特权已到账</span>
            <button class="ml-2 text-blue-500">去解锁</button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white mt-4 p-4 grid grid-cols-3 gap-4">
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-orange-500">0.3折</div>
        <p class="text-sm">超级吃货卡</p>
        <p class="text-xs text-gray-400">购卡即享优惠</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-yellow-400">0</div>
        <p class="text-sm">吃货豆</p>
        <p class="text-xs text-gray-400">0豆可用</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-red-500">2</div>
        <p class="text-sm">红包卡券</p>
        <p class="text-xs text-gray-400">2张红包可用</p>
      </div>
    </div>

    <div class="bg-white mt-4 p-4 grid grid-cols-2 gap-4">
      <div>
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold mb-2">我的关注</p>
          <div class="w-16 h-16 rounded bg-blue-100 flex items-center justify-center text-blue-500 text-xl font-bold">
            +
          </div>
          <p class="text-sm text-gray-500 mt-2">暂无关注</p>
          <p class="text-xs text-gray-400">添加店铺，找店不迷路</p>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold mb-2">常点的店</p>
          <div class="w-16 h-16 rounded bg-blue-100 flex items-center justify-center text-blue-500 text-xl font-bold">
            +
          </div>
          <p class="text-sm text-gray-500 mt-2">暂无店铺</p>
          <p class="text-xs text-gray-400">再逛逛看买点啥</p>
        </div>
      </div>
    </div>

    <div class="bg-white mt-4 p-4 grid grid-cols-4 gap-4">
      <div v-for="(item, index) in moreFunc" :key="index" class="flex flex-col items-center cursor-pointer" @click="handleMoreFunc(item)">
        <font-awesome-icon :icon="item.icon" class="text-xl mb-1" />
        <span class="text-sm">{{ item.text }}</span>
      </div>
    </div>

    <Bottom/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faMapLocationDot, faHeadset, faTrophy, faClockRotateLeft,} from "@fortawesome/free-solid-svg-icons";

const router = useRouter();
const phone = ref("159****4019");

const moreFunc = [
  { icon: faMapLocationDot, text: "我的地址" },
  { icon: faHeadset, text: "我的客服" },
  { icon: faTrophy, text: "超赚挑战" },
  { icon: faClockRotateLeft, text: "浏览记录" },
];

const handleMoreFunc = (item: { text: string }) => {
  alert(`点击了【${item.text}】功能`);
};
</script>

<style scoped>

</style>