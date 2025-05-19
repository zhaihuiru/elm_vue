<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from "@/TodoItem.vue";

let newTaskText= ref("abc");
let todoList = ref([
  { id: 1, text: "吃饭", completed: false },
  { id: 2, text: "睡觉", completed: false },
  { id: 3, text: "打豆豆", completed: false }
]);

function onAddClicked(){
  if (newTaskText.value.trim() === "") {
    alert("请输入待办事项");
    return;
  }
  const newTask = new todoItem(Date.now(), newTaskText.value);
  todoList.value.push(newTask);
}

class todoItem {
  id: number;
  text: string;
  completed: boolean;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
    this.completed = false;
  }
}

function onDeleteClicked(id: number) {
  const index = todoList.value.findIndex(item => item.id === id);
  if (index !== -1) {
    todoList.value.splice(index, 1);
  }
}
</script>

<template>
  <div class="w-60em mx-auto bg-gray-2 h-20em">
    <div class="text-4xl text-center">Todo List</div>
    <div class="w-20em mx-auto mt-2em flex justify-between">
        <el-input type="text" class="w-3/4 mr-1" placeholder="添加一个新的待办事项" v-model="newTaskText" />
        <el-button type="success" @click="onAddClicked()"> 添加 </el-button>
    </div>

    <div class="mt-2em mx-2em">
      <TodoItem v-for="item in todoList" :key="item.id" :itemData="item" @onDeleteClicked="onDeleteClicked"></TodoItem>
    </div>
  </div>
</template>
