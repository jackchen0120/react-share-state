/*
 * @Description: store 存储入口文件
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 16:46:35
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 16:12:20
 */

import React from "react";
import cartStore from "./modules/cartStore";

// 通过组件树提供了一个传递数据的方法，从而避免在每一个层级手动的传递 props 属性。
export const stores = React.createContext({
  cart: cartStore,
});

export const useStores = () => React.useContext(stores);

export { useIncrementItem, useDecrementItem, useRemoveItem } from "./hooks";
