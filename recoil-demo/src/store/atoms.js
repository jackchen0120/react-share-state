/*
 * @Description: 定义状态数据
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-10 11:46:22
 */
import { atom } from "recoil";

// 购物车状态数据
export const cart = atom({
  key: "cart", // key 值必须唯一
  default: [], // 定义默认值
})