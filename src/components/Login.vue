<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router";

//输入框信息
const telephone = ref('');
const password = ref('');

const router = useRouter();
const register = () => {
  router.push("/register");
}
const index = () => {
  if (telephone.value === '' || password.value === '') {
    alert("登录信息输入不完整，请输入完整")
    router.push('/');
  } else {
    alert("登录成功，即将跳转至首页")
    router.push("/index");
  }
}
</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">用户登录</div>
    <div class="grow">
      <div class="pt-3 pl-3">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">手机号码：</lable>
        <input v-model="telephone" placeholder="手机号码" class="outline-0 text-3"/>
      </div>
      <div class="pt-3 pl-3">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">密码：</lable>
        <input type="password" v-model="password" placeholder="密码" class="outline-0 text-3"/>
      </div>
      <div class="p-3 text-center">
        <button @click="index" class="bg-green text-white p-2 rounded w-full font-bold">登录</button>
      </div>
      <div class="pl-3 pr-3  text-center">
        <button @click="register" class="bg-gray-200  p-2 rounded w-full font-bold text-gray-500 ">注册新用户</button>
      </div>
    </div>
    <div class="border border-t-gray-3 font-100 text-3 p-3 ">
      <div class="flex  justify-around text-gray-400">
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'house']"/>
          <span class="text-center">首页</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']"/>
          <span class="text-center">发现</span>
        </div>
        <div  class="flex flex-col items-center justify-between">
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