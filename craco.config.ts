/* craco.config.js */
import path from 'path';
// import MineCssExtractPlugin from 'mini-css-extract-plugin';
// import WebpackBar from 'webpackbar';
module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
    },
    // plugins: [
    //   //进度条显示
	  //   new WebpackBar()
	  // ]
  }
};
export default module
