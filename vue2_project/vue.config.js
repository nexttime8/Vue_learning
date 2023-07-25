const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    // proxy: {
    //   "/api1": {
    //     target: "http://localhost:5000",
    //     pathRewrite: { "^/api1": "" },
    //     // ws: true,
    //     changeOrigin: true,
    //   },
    //   "/api2": {
    //     target: "http://localhost:5001",
    //     pathRewrite: { "^/api2": "" },
    //     // ws: true,
    //     changeOrigin: true,
    //   },
    // },
    // proxy: "http://localhost:5000", // 这样请求的时候即使写了不存在的基础路径，也会被忽略，正常显示
    open: true,
  },
  lintOnSave: false, // 关闭语法检查
})

// devServer { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? }
