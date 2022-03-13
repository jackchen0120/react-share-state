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
