/*
 * @description: mobx 相关操作
 * @author: Jack Chen @懒人码农
 * @Date: 2022-03-15 10:10:36
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 15:31:06
 */

// 1.定义数据 2.数据响应式处理 3.定义 action 4.实例化并导出 store
import { makeAutoObservable } from "mobx";

class Cart {
  // 定义数据
  totalCost = 0; // 合计总金额
  totalCartNum = 0; // 统计购物车数量
  cartList = []; // 购物车列表数据

  // 响应式处理
  constructor() {
    makeAutoObservable(this);
  }

  // 定义 action 函数
  totalCartData = (items) => {
    this.cartList = items;
    this.totalCartNum = this.cartList.reduce((a, b) => a + b.amount, 0); // 统计购物车数量
    this.totalCost = this.cartList.reduce(
      (a, b) => a + b.amount * b.unitPrice,
      0
    ); // 合计总金额
  };
}

// 实例化并导出 store
const cartStore = new Cart();
export default cartStore;
