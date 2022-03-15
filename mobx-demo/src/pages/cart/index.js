/*
 * @Description: 主页
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 14:45:10
 */
import React from "react";
import { Card, Col, Row, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useIncrementItem } from "@/store";
import { observer } from "mobx-react-lite";

const products = [
  {
    key: 1,
    id: 1,
    bookName: "JS权威指南",
    unitPrice: 95,
  },
  {
    key: 2,
    id: 2,
    bookName: "CSS权威指南",
    unitPrice: 125,
  },
  {
    key: 3,
    id: 3,
    bookName: "ES6标准入门",
    unitPrice: 88,
  },
  {
    key: 4,
    id: 4,
    bookName: "JSDOM编程艺术",
    unitPrice: 79,
  },
  {
    key: 5,
    id: 5,
    bookName: "HTML5权威指南",
    unitPrice: 69,
  },
  {
    key: 6,
    id: 6,
    bookName: "HTTP权威指南",
    unitPrice: 55,
  },
  {
    key: 7,
    id: 7,
    bookName: "Web性能实战",
    unitPrice: 76,
  },
  {
    key: 8,
    id: 8,
    bookName: "JS数据结构算法",
    unitPrice: 106,
  },
  {
    key: 9,
    id: 9,
    bookName: "JS高级程序设计",
    unitPrice: 129,
  },
];

function Catalog() {
  const addItem = useIncrementItem();

  return (
    <div className="catalog-box">
      <Row>
        {products.map((item, index) => (
          <Col span={8} className="card-list" key={item.id}>
            <Card className="card">
              <span className="item">{item.bookName}</span>
              <span className="item">
                售价：<em>¥{item.unitPrice}</em>
              </span>
              <Button
                type="primary"
                shape="round"
                size="small"
                icon={<PlusOutlined />}
                onClick={() => addItem(item)}
              >
                购物车
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default observer(Catalog);
