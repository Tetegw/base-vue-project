import axios from 'axios'
import BASE_URL from '../config/baseUrl.js'
import { showLoading, hideLoading } from './loading.js'

axios.defaults.withCredentials = true


// 请求拦截器，loading可以在这里显示
axios.interceptors.request.use(function (config) {
  showLoading()
  return config
}, function (error) {
  hideLoading()
  return Promise.reject(error)
});
// 响应拦截器，未登录可以在这里处理
axios.interceptors.response.use(function (response) {
  hideLoading()
  return response.data
}, function (error) {
  hideLoading()
  return Promise.reject(error)
});

/**
 * ajax异步请求
 * @param {*} payload，接受一个对象
 * url: 请求连接，必传
 * method: 请求方法，必传
 * headers: 请求头，选传
 * params: 请求数据，选传
 * baseUrl: api接口的前缀，选传
 * ..其他的自行添加
 */
function httpServer (payload) {
  console.log('请求的接口域名是', payload.baseUrl || BASE_URL.apiUrl)
  return axios({
    method: (payload.method && payload.method.toLocaleUpperCase()) || 'POST',
    headers: Object.assign({}, { 'content-type': 'application/x-www-form-urlencoded' }, (payload.headers || {})),
    data: payload.params,
    url: (payload.baseUrl || BASE_URL.apiUrl) + payload.url
  })
}


/**
 * ajax异步请求，上传文件
 * @param {*} pyload ，接受一个对象
 * url: 请求连接，必传
 * method: 请求方法，必传
 * headers: 请求头，选传
 * params: 请求数据，选传
 * baseUrl: api接口的前缀，选传
 * ..其他的自行添加
 */
function httpServerFile (pyload) {
  console.log('请求的接口域名是', payload.baseUrl || BASE_URL.apiUrl)
  return axios({
    method: (payload.method && payload.method.toLocaleUpperCase()) || 'POST',
    headers: Object.assign({}, { 'Content-Type': 'multipart/form-data' }, (payload.headers || {})),
    data: payload.params,
    url: (payload.baseUrl || BASE_URL.apiUrl) + payload.url,
  })
}


export {
  httpServer,
  httpServerFile
}