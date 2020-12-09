var path = require("path")
//1. 导入express
var express = require('express')
//2. 创建express服务器
var app = express()
const { servers } =require("./server")
// const { createProxyMiddleware } = require('http-proxy-middleware');
// 请求接口的IP
// const targetUrl = "http://161.117.177.81:8691";

app.use(express.static(path.join(__dirname, './')));

// app.use('^/api/', createProxyMiddleware({ target: targetUrl, changeOrigin: true }));
servers()
//4. 绑定端口
app.listen(6060)
console.log('启动6060')

