// 分各种环境，来配置不同的接口域名
// 生产域名
let baseUrl = {
  apiUrl: 'http://pre.com/v2/',
}

if (process.env.NODE_ENV === 'development') {
  // 开发域名
  baseUrl = {
    apiUrl: 'http://dev.com/v2/',
  }
} else if (process.env.NODE_ENV === 'test') {
  // 测试域名
  baseUrl = {
    apiUrl: 'http://test.com/v2/',
  }
}

export default baseUrl
