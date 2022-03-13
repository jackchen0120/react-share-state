/*
 * @Description: 自定义Hooks
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-10 16:04:48
 */
import { useRecoilState } from "recoil";
import { cart } from "./atoms";

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({
    ...item,
  })), // 拷贝原数据
  index: items.findIndex((item) => item.id === id), // 获取满足条件的索引位置
});

// 递增
export const useIncrementItem = () => {
  const [items, setItems] = useRecoilState(cart);
  console.log('cartList===', items)

  return (product) => {
    const { clone, index } = cloneIndex(items, product.id);
    console.log('clone===', clone, product)

    if (index !== -1) {
      clone[index].amount += 1;
      setItems(clone);
    } else {
      setItems([...clone, { ...product, amount: 1 }]);
    }
  };
};

// 递减
export const useDecrementItem = () => {
  const [items, setItems] = useRecoilState(cart);

  return (product) => {
    const { clone, index } = cloneIndex(items, product.id);

    if (clone[index].amount !== 1) {
      clone[index].amount -= 1;
      setItems(clone);
    }
  }
}

// 删除
export const useRemoveItem = () => {
  const [items, setItems] = useRecoilState(cart);

  return (product) => {
    setItems(items.filter(item => item.id !== product.id));
  }
}
