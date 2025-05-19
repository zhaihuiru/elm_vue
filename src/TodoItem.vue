<script setup lang="ts">
let {itemData} = defineProps(["itemData"]);
let emits = defineEmits(["onDeleteClicked"]);

function onDeleteClicked(id: number) {
  emits("onDeleteClicked", id);
}


</script>

<template>
  <div class="flex justify-between items-center mb-2">
    <div class="w-3/4">
      <el-checkbox v-model="itemData.completed">{{ itemData.text }}</el-checkbox>
    </div>
    <el-button type="danger" @click="onDeleteClicked(itemData.id)">删除</el-button>
<!--    <el-button type="danger" @click="onDeleteClicked(item.id)">删除</el-button>-->
  </div>
</template>

<style scoped>

</style>