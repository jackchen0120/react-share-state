/*
 * @Description: 购物车列表
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 15:45:20
 */
import React from "react";
import { Table } from "antd";
import CartButtons from "./CartButtons";

import { observer } from "mobx-react-lite";
import { useStores } from "@/store";

const columns = [
  {
    title: "书名",
    dataIndex: "bookName",
    key: "bookName",
    align: "center",
  },
  {
    title: "售价",
    dataIndex: "unitPrice",
    key: "unitPrice",
    align: "center",
    render: (text) => <span>¥{text}</span>,
  },
  {
    title: "数量",
    dataIndex: "amount",
    key: "amount",
    align: "center",
  },
  {
    title: "总价",
    key: "totalPrice",
    align: "center",
    render: (text, record) => <span>¥{record.amount * record.unitPrice}</span>,
  },
  {
    title: "操作",
    key: "action",
    align: "center",
    render: (text) => (
      <>
        <CartButtons item={text} />
      </>
    ),
  },
];

function Cart() {
  const store = useStores();
  const tableData = store.cart.cartList;

  const footerDom = () => {
    return (
      <>
        合计：<span className="total">¥{store.cart.totalCost}</span>
      </>
    );
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ hideOnSinglePage: true }}
        size="middle"
        footer={footerDom}
      />
    </>
  );
}

export default observer(Cart);
