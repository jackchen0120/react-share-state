/*
 * @description: webpack 配置
 * @author: Jack Chen @懒人码农
 * @Date: 2022-03-10 16:46:35
 * @LastEditors: Jack Chen
 * @LastEditTime: 2022-03-15 09:17:22
 */
const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  devServer: {
    port: "5555",
  },
  webpack: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#049d04" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
