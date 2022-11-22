const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/predict",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  ),
    app.use(
      "/math/api/predict",
      createProxyMiddleware({
        target: "http://localhost:9000",
        changeOrigin: true,
      })
    );
};
