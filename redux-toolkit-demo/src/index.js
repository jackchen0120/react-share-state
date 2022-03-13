/*
 * @Description: 程序入口文件
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-10 20:09:52
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.less";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
