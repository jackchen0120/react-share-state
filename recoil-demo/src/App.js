/*
 * @Description: 根组件
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-10 10:36:24
 */
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from "./components/Header"; // 头部组件
import Footer from "./components/Footer"; // 底部组件
import Catalog from "./pages/cart"; // 主页
import Cart from "./pages/cart/Cart"; // 购物车列表
import "./App.less"; // 公共样式

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Header />
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
