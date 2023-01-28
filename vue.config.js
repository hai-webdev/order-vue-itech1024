
module.exports = {
  // 选项...
  devServer: {
    proxy: {
      "/api": {
        //访问路径，可以自己设置，
        target: "http://conference.itechclub.cn/", //代理接口，即后端运行所在的端口
        changeOrigin: true, //设置是否跨域
        ws: true,
        pathRewrite: {
          //访问路径重写
          "^/api": "",
        },
      },
    },
  },
};
