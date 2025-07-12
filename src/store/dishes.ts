// store/dishes.ts
import { defineStore } from "pinia";

// 定义菜品类型
interface Dish {
    id: number;
    name: string;
    price: number;
    store: string;
}

export const useDishesStore = defineStore("dishes", {
    state: () => ({
        selectedDishes: [] as Dish[] // 用于存储点单数据
    }),
    actions: {
        addDish(dish: Dish) {
            this.selectedDishes.push(dish); // 添加菜品到订单
        },
        clearDishes() {
            this.selectedDishes = []; // 清空订单
        }
    }
});