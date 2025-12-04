// utils/request.js - 网络请求封装

const BASE_URL = 'https://your-api-domain.com/api' // 替换为实际的API地址

/**
 * 封装wx.request
 * @param {String} url 请求地址
 * @param {Object} data 请求参数
 * @param {String} method 请求方法
 * @param {Object} header 请求头
 */
function request(url, data = {}, method = 'GET', header = {}) {
  return new Promise((resolve, reject) => {
    // 获取 token（优先使用异步方法，降级到同步）
    wx.getStorage({
      key: 'token',
      success: (res) => {
        sendRequest(res.data || '', url, data, method, header, resolve, reject)
      },
      fail: () => {
        sendRequest('', url, data, method, header, resolve, reject)
      }
    })
  })
}

// 实际发送请求的函数
function sendRequest(token, url, data, method, header, resolve, reject) {
  wx.request({
    url: BASE_URL + url,
    data,
    method,
    timeout: 10000, // 设置超时时间 10 秒
    header: {
      'content-type': 'application/json',
      'Authorization': token,
      ...header
    },
      success: (res) => {
        if (res.statusCode === 200) {
          // 请求成功
          if (res.data.code === 0 || res.data.success) {
            resolve(res.data)
          } else {
            // 业务错误
            wx.showToast({
              title: res.data.message || '请求失败',
              icon: 'none'
            })
            reject(res.data)
          }
        } else if (res.statusCode === 401) {
          // 未授权，跳转登录
          wx.showToast({
            title: '请先登录',
            icon: 'none'
          })
          // 清除token（使用异步方法）
          wx.removeStorage({
            key: 'token',
            success: () => {
              // 跳转登录页
              setTimeout(() => {
                wx.redirectTo({
                  url: '/pages/login/login'
                })
              }, 1500)
            }
          })
          reject(res)
        } else {
          // 其他错误
          wx.showToast({
            title: '网络错误',
            icon: 'none'
          })
          reject(res)
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

/**
 * GET 请求
 */
function get(url, data = {}, header = {}) {
  return request(url, data, 'GET', header)
}

/**
 * POST 请求
 */
function post(url, data = {}, header = {}) {
  return request(url, data, 'POST', header)
}

/**
 * PUT 请求
 */
function put(url, data = {}, header = {}) {
  return request(url, data, 'PUT', header)
}

/**
 * DELETE 请求
 */
function del(url, data = {}, header = {}) {
  return request(url, data, 'DELETE', header)
}

/**
 * 文件上传
 */
function uploadFile(filePath, name = 'file', formData = {}) {
  return new Promise((resolve, reject) => {
    // 获取 token
    wx.getStorage({
      key: 'token',
      success: (res) => {
        doUpload(res.data || '', filePath, name, formData, resolve, reject)
      },
      fail: () => {
        doUpload('', filePath, name, formData, resolve, reject)
      }
    })
  })
}

// 实际上传文件的函数
function doUpload(token, filePath, name, formData, resolve, reject) {
  wx.uploadFile({
    url: BASE_URL + '/upload',
    filePath,
    name,
    formData,
    header: {
      'Authorization': token
    },
      success: (res) => {
        const data = JSON.parse(res.data)
        if (data.code === 0 || data.success) {
          resolve(data)
        } else {
          wx.showToast({
            title: data.message || '上传失败',
            icon: 'none'
          })
          reject(data)
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

module.exports = {
  request,
  get,
  post,
  put,
  del,
  uploadFile
}

