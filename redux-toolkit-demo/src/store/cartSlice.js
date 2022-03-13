/*
 * @Description: 创建切片处理
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 20:01:40
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-11 16:53:30
 */

import { createSlice } from "@reduxjs/toolkit";
import actionType from "./actionType";

export const cartSlice = createSlice({
  name: actionType.CART_ACTION, // 命名空间，在调用 action 的时候会默认的设置为 action 的前缀
  initialState: {
    // state 数据的初始值
    totalCost: 0, // 合计总金额
    totalCartNum: 0, // 统计购物车数量
    cartList: [], // 购物车列表数据
  },
  reducers: {
    // 这里的属性会自动的导出为 actions，在组件中可以直接通过 dispatch 进行触发
    totalCartData: (state, { payload }) => {
      state.cartList = payload;
      state.totalCartNum = payload.reduce((a, b) => a + b.amount, 0); // 合计总金额
      state.totalCost = payload.reduce((a, b) => a + b.amount * b.unitPrice, 0);  // 统计购物车数量
    },
  },
});

// 导出 actions
export const { totalCartData } = cartSlice.actions;

// 导出 reducer，在创建 store 时使用到
export default cartSlice.reducer;
