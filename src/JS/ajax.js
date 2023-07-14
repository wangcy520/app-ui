import axios from 'axios'
import vm from '../main'
import toast from "@/components/toast";
// import Vue from 'vue'

const PRODUCT_URL = 'http://120.77.70.11:8099'
const MOCK_URL = 'http://120.77.70.11:8099'
let http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? PRODUCT_URL : MOCK_URL
})
// 请求拦截器
http.interceptors.request.use(
  config => {
    // 设置token，Content-Type
    var token = window.localStorage.getItem('token')
    config.headers['accessToken'] = token
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    // 请求显示loading效果
    if (config.loading === true) {
      vm.$loading.show()
    }
    return config
  },
  error => {
    vm.$loading.hide()
    return Promise.reject(error)
  }
)
// 响应拦截器
http.interceptors.response.use(
  res => {
    vm.$loading.hide()
    // token失效，重新登录
    if (res.data.code === 401) {
      //  重新登录
    }
    return res
  },
  error => {
    vm.$loading.hide()
    return Promise.reject(error)
  }
)

function get (url, data, loading=true) {
  return new Promise((resolve, reject) => {
    http.get(url)
      .then(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

function post (url, data, loading=true) {
  return new Promise((resolve, reject) => {
    http.post(url, data, { loading: loading })
      .then(
        response => {
        
          if(response.status==200){
          
            if(response.data.code==200){
              resolve(response)
            }else{
             
             toast({
                msg: response.data.message,
                 type: 'fail'
              })

              if(response.data.message.indexOf('解析token错误')!=-1){
                window.localStorage.removeItem('token')
               
              }
             
            }
          }
          
        },
        err => {
        
          toast({
            msg: 'wrong',
             type: 'fail'
          })
          reject(err)
        }
      )
      .catch(error => {
        debugger
        reject(error)
      })
  })
}


export { get, post }
