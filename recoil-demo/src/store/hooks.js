import { useRecoilState } from "recoil";
import { cart } from "./atoms";

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({
    ...item,
  })),
  index: items.findIndex((item) => item.id === id),
});

// 加量
export const useIncrementItem = () => {
  const [items, setItems] = useRecoilState(cart);

  return (product) => {
    const { clone, index } = cloneIndex(items, product.id);

    if (index !== -1) {
      clone[index].amount += 1;
      setItems(clone);
    } else {
      setItems([...clone, { ...product, amount: 1 }]);
    }
  };
};

// 减量
export const useDecrementItem = () => {
  const [items, setItems] = useRecoilState(cart);
  const removeItem = useRemoveItem();

  return (product) => {
    const { clone, index } = cloneIndex(items, product.id);

    if (clone[index].amount !== 1) {
      clone[index].amount -= 1;
      setItems(clone);
    } else {
      // removeItem(product);
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
