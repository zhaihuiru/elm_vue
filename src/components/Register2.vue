<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-indigo-500">
    <div class="bg-white p-10 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-4">注册</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="username">用户名</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" v-model="username" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="phone">手机号</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" v-model="phone" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">密码</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password" required />
        </div>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">注册饿了么</button>
      </form>
      <p class="text-center mt-4">点击「注册」，即默认你同意 <a href="#">《饿了么协议》</a></p>
      <p class="text-center">下载 <a href="#">饿了么App</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      phone: '',
      password: ''
    };
  },
  methods: {
    register() {
      // 处理注册逻辑
      console.log('注册信息:', this.username, this.phone, this.password);
    }
  }
};
</script>