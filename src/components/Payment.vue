<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import Bottom from "@/components/Bottom.vue";

const router = useRouter();
const selectedPayment = ref('');

const index = () => {
  if (!selectedPayment.value) {
    alert("请选择支付方式")
  }else{
    alert("支付成功，即将跳转至首页")
    router.push("/index");
  }
}
</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">在线支付</div>
    <div class="grow">
      <div>
        <div class="text-gray px-5 py-5 text-4">订单信息：</div>
        <div class="flex color-gray">
          <div class="text-gray pl-5 text-4 font-bold">万家饺子（软件园E18店）</div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="pt-1"/>
          <div class="pl-30 font-bold text-red">¥49</div>
        </div>
        <div>
          <div class="flex p-5 items-center" @click="selectedPayment = 'alipay'">
            <input type="radio"
                   class="form-radio h-5 w-5 text-blue-600"
                   :checked="selectedPayment === 'alipay'">
            <img src="../img/alipay.png" height="32" width="120" class="ml-3"/>
          </div>

          <div class="flex p-5 items-center" @click="selectedPayment = 'wechat'">
            <input type="radio"
                   class="form-radio h-5 w-5 text-blue-600"
                   :checked="selectedPayment === 'wechat'">
            <img src="../img/wechat.png" height="32" width="120" class="ml-3"/>
          </div>

          <div class="mt-10 px-5">
            <button @click="index" class="w-full bg-primary text-white py-3 rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors">
              确认支付
            </button>
          </div>

        </div>
      </div>
    </div>

    <Bottom/>
  </div>
</template>

<style scoped>

</style>