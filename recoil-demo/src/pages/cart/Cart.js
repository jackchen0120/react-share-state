import React from "react";
import { Table, Space } from "antd";
import CartButtons from "./CartButtons";
import { useRecoilValue } from "recoil";
import { cart, cartState } from "../../store";

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
  const tableData = useRecoilValue(cart);
  const { totalCost } = useRecoilValue(cartState);

  const footerDom = () => {
    return (
      <>
        合计：<span className="total">¥{totalCost}</span>
      </>
    );
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        size="middle"
        footer={footerDom}
      />
    </>
  );
}

export default Cart;
