<script setup lang="ts">
import {useRouter} from "vue-router";
import Bottom from "@/components/Bottom.vue";

const router = useRouter();

const order = () => {
  router.push("/order");
}

</script>

<template>
  <div class="flex-col flex h-full min-h-screen">
    <div class="p-3 text-center bg-primary text-white font-medium text-xl">我的订单</div>
    <div class="grow">
      <div>
        <div class="text-gray px-5 py-5 text-4">未支付订单信息：</div>
        <div class="flex color-gray">
          <div class="text-gray pl-5 text-4 font-bold">万家饺子（软件园E18店）</div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="pt-1"/>
          <div class="pl-20">¥49</div>
          <div class="pl-2">
            <div @click="order" class="bg-orange rounded text-white ">去支付</div>
          </div>
        </div>
        <div class="flex color-gray pt-2">
          <div class="text-gray pl-5 text-4 font-bold">小锅饭豆腐馆（全运店）</div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="pt-1"/>
          <div class="pl-23">¥55</div>
          <div class="pl-2">
            <div @click="order" class="bg-orange rounded text-white ">去支付</div>
          </div>
        </div>

      </div>

      <div>
        <div class="text-gray px-5 py-5 text-4">已支付订单信息：</div>
        <div class="flex color-gray">
          <div class="text-gray pl-5 text-4 font-bold">万家饺子（软件园E18店）</div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="pt-1"/>
          <div class="pl-32">¥49</div>

        </div>
        <div class="flex color-gray pt-2">
          <div class="text-gray pl-5 text-4 font-bold">小锅饭豆腐馆（全运店）</div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="pt-1"/>
          <div class="pl-35">¥55</div>
        </div>

      </div>
    </div>

    <Bottom/>
  </div>
</template>

<style scoped>

</style>