module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true,
    },
  },
  transpileDependencies: ["quasar"],
  devServer: {
    port: 8080, //端口號
    host: "localhost", //主機名
    https: false, //協議
    open: true, //啟動時是否自動打開瀏覽器
    // 開發環境代理配置
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL, //在.env.development中配置的目標服務器
        ws: true, //proxy websockets
        //啟動代理
        // 同時接收數據請求，如此服務端和服務端進行數據交互不會有跨域問題
        changeOrigin: true,
        pathRewrite: {
          // 將 /dev-api替換為''，即是把/dev-api移除
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
  lintOnSave: false, // 關閉格式檢查
  productionSourceMap: false, //打包時不會生成.map文件，加速打包
};
