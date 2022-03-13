import { selector } from "recoil";
import { cart } from "./atoms";

export const cartState = selector({
  key: "cartState",
  get: ({get}) => {
    const totalCost = get(cart).reduce((a, b) => a + b.amount * b.unitPrice, 0); // 合计总金额
    const totalCartNum = get(cart).reduce((a, b) => a + b.amount, 0); // 统计加入购物车数量

    return {
      totalCost,
      totalCartNum
    }
  }
})