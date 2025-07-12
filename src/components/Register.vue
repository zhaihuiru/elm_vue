<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

//输入框信息
const telephone = ref('');
const password = ref('');
const confirmPassword = ref('');
const username = ref('');
const gender = ref('');

const login = () => {
  if (telephone.value==='' || password.value==='' || confirmPassword.value==='' || username.value==='' || gender.value==='') {
    alert("注册信息输入不完整，请输入完整")
    router.push('/register');
  }else{
    if (password.value === confirmPassword.value) {
      alert("注册成功，即将跳转至登录界面")
      router.push('/');
    } else {
      alert("两次密码输入不一致，请修改")
      router.push('/register');
    }
  }
}
</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">用户注册</div>
    <div class="grow">
      <div class="pt-3 pl-3 ">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">手机号码：</lable>
        <input v-model="telephone" placeholder="手机号码" class="outline-0 text-3"/>
      </div>
      <div class="pt-3 pl-3">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">密码：</lable>
        <input type="password" v-model="password" placeholder="密码" class="outline-0 text-3"/>
      </div>
      <div class="pt-3 pl-3">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">确认密码：</lable>
        <input type="password" v-model="confirmPassword" placeholder="确认密码" class="outline-0 text-3"/>
      </div>
      <div class="pt-3 pl-3">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">用户姓名：</lable>
        <input v-model="username" placeholder="用户姓名" class="outline-0 text-3"/>
      </div>
      <div class="p-3">
        <lable class="w-5.5em inline-block font-bold text-gray-500 text-3">性别：</lable>
        <label class="mr-4 text-3 text-gray-500">
          <input type="radio" v-model="gender" name="gender" value="male" >
          男
        </label>
        <label class="mr-4 text-3 text-gray-500">
          <input type="radio" v-model="gender" name="gender" value="female">
          女
        </label>

      </div>
      <div class="p-3 text-center">
        <button @click="login" class="bg-green text-white p-2 rounded w-full font-bold">注册</button>
      </div>
    </div>


    <div class="border border-t-gray-4 font-100 text-3 p-3 ">
      <div class="flex  justify-around text-gray-400">
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'house']"/>
          <span class="text-center">首页</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']"/>
          <span class="text-center">发现</span>
        </div>
        <div class="flex flex-col items-center justify-between">
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
