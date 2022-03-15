/*
 * @description: 自定义 Hooks
 * @author: Jack Chen @懒人码农
 * @Date: 2022-03-15 09:12:59
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 15:10:45
 */

import { useStores } from "./";

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({
    ...item,
  })),
  index: items.findIndex((item) => item.id === id),
});

// 递增
export const useIncrementItem = () => {
  const store = useStores();

  return (product) => {
    const { clone, index } = cloneIndex(store.cart.cartList, product.id);

    if (index !== -1) {
      clone[index].amount += 1;
      store.cart.totalCartData([...clone]);
    } else {
      store.cart.totalCartData([...clone, { ...product, amount: 1 }]);
    }
  };
};

// 递减
export const useDecrementItem = () => {
  const store = useStores();

  return (product) => {
    const { clone, index } = cloneIndex(store.cart.cartList, product.id);

    if (clone[index].amount !== 1) {
      clone[index].amount -= 1;
      store.cart.totalCartData([...clone]);
    }
  };
};

// 删除
export const useRemoveItem = () => {
  const store = useStores();

  return (product) => {
    store.cart.totalCartData(store.cart.cartList.filter((item) => item.id !== product.id));
  };
};

