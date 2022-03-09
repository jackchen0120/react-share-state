const CracoLessPlugin = require("craco-less");

module.exports = {
  devServer: {
    port: "5555",
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
