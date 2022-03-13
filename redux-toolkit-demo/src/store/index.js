/*
 * @Description: Redux 存储入口文件
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 16:46:35
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-11 16:55:31
 */

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configureStore 创建一个 redux 数据
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { useIncrementItem, useDecrementItem, useRemoveItem } from "./hooks";
