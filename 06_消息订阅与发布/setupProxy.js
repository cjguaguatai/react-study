const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
      proxy.createProxyMiddleware('/search', {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
        //   '^/search': '',
        },
      }),
     
    );
  };