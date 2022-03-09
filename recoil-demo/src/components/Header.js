import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { cartState } from "../store";

function Header() {
  const { totalCartNum } = useRecoilValue(cartState);

  return (
    <div className="header">
      <NavLink to="/">
        <Button className="title" type="link">
          我的书店
        </Button>
      </NavLink>
      {/* <div className="title">我的书店</div> */}
      <NavLink to="/cart">
        <Badge count={totalCartNum}>
          <Button
            type="primary"
            style={{ background: "#1890ff", borderColor: "#1890ff" }}
            shape="round"
            icon={<ShoppingCartOutlined />}
          />
        </Badge>
      </NavLink>
    </div>
  );
}

export default Header;
