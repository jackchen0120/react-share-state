import { useSelector, useDispatch } from "react-redux";
import { totalCartData } from "@/store/cartSlice";

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({
    ...item,
  })),
  index: items.findIndex((item) => item.id === id),
});

// 递增
export const useIncrementItem = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  return (product) => {
    const { clone, index } = cloneIndex(cartList, product.id);

    if (index !== -1) {
      clone[index].amount += 1;
      dispatch(totalCartData([...clone]));
    } else {
      dispatch(totalCartData([...clone, { ...product, amount: 1 }]));
    }
  };
};

// 递减
export const useDecrementItem = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  return (product) => {
    const { clone, index } = cloneIndex(cartList, product.id);

    if (clone[index].amount !== 1) {
      clone[index].amount -= 1;
      dispatch(totalCartData([...clone]));
    }
  };
};

// 删除
export const useRemoveItem = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  return (product) => {
    dispatch(totalCartData(cartList.filter(item => item.id !== product.id)))
  };
};
