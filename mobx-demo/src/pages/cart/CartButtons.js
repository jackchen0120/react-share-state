/*
 * @description: 操作按钮组件
 * @author: Jack Chen @懒人码农
 * @Date: 2022-03-15 09:12:59
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 15:45:26
 */
import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

import { useIncrementItem, useDecrementItem, useRemoveItem } from "@/store";

function CartButtons(props) {
  const { item } = props;
  const increment = useIncrementItem();
  const decrement = useDecrementItem();
  const remove = useRemoveItem();

  return (
    <>
      <Button
        onClick={() => decrement(item)}
        style={{ background: "#ddd", borderColor: "#ddd" }}
      >
        -
      </Button>
      <Button onClick={() => increment(item)} type="primary">
        +
      </Button>
      <Button onClick={() => remove(item)} type="primary" danger>
        x
      </Button>
    </>
  );
}

CartButtons.propTypes = {
  item: PropTypes.object, // PropTypes.object.isRequired
};

export default CartButtons;
