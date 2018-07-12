# nodecloud

> node cloud

## Build Setup

``` bash
npm install     安装依赖
npm run dev     开发
npm run test    打测试包
npm run build   打生产包
```

## 目录结构
- src
  - api           请求接口，按模块划分
  - assets        静态文件，比如img，字体图标，公用css等
  - components    公用组件
  - config        配置文件（如：baseUrl的区分，接口地址汇总）
  - router        路由配置
  - store         vuex状态管理
  - utils         一些工具（如，http请求再次封装，loading的显示隐藏）
  - view          项目的页面组件，按模块划分
  - App.vue       项目根组件
  - main.js       项目入口
- static          静态文件，不会被打包


## 介绍

- 支持less
  ```html
  <style lang="less" scoped></style>
  ```
- vue-router
  > 文档地址：[vue-router](https://router.vuejs.org/zh/guide/#html)
- vue-vuex
  > 文档地址：[vue-vuex](https://vuex.vuejs.org/zh/guide/)
- axios
  接口请求，使用第三方axios异步请求库
  > 文档地址： [axios](https://github.com/axios/axios)





