/*
 * @description: 头部组件
 * @author: Jack Chen @懒人码农
 * @Date: 2022-03-10 16:46:35
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 15:44:36
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

// observer: 监控当前组件使用到的由 MobX 跟踪的 observable state, 当状态发生变化时通知 React 更新视图
import { observer } from "mobx-react-lite";
import { useStores } from "@/store";

function Header() {
  const store = useStores();

  return (
    <div className="header">
      <NavLink to="/">
        <Button className="title" type="link">
          我的书店
        </Button>
      </NavLink>

      <NavLink to="/cart">
        <Badge count={store.cart.totalCartNum}>
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

export default observer(Header);
