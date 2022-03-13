/*
 * @description: 头部组件
 * @author: Jack Chen @懒人码农
 * @Date: 2022-03-10 16:46:35
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-11 16:37:19
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function Header() {
  const { totalCartNum } = useSelector((state) => state.cart);

  return (
    <div className="header">
      <NavLink to="/">
        <Button className="title" type="link">
          我的书店
        </Button>
      </NavLink>

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
