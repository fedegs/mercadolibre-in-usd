const CopyPlugin = require("copy-webpack-plugin")

const paths = {
  src: "./src",
  dist: `${__dirname}/dist`,
}

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    productPage: `${paths.src}/scripts/productPage.js`,
    productList: `${paths.src}/scripts/productList.js`,
    popup: `${paths.src}/popup/popup.js`,
    toggle: `${paths.src}/scripts/toggle.js`,
  },
  output: {
    path: `${paths.dist}/scripts`,
    filename: "[name].bundle.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: `${paths.src}/popup/popup.html`, to: `${paths.dist}` },
        { from: "./manifest.json", to: `${paths.dist}` },
      ],
    }),
  ],
}
