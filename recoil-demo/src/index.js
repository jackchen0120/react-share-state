/*
 * @Description: 程序入口文件
 * @Author: Jack Chen @懒人码农
 * @Date: 2022-03-10 09:38:32
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-10 10:37:28
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.less";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
