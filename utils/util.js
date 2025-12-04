// utils/util.js - 工具函数

/**
 * 格式化时间
 * @param {Date} date 日期对象
 * @param {String} format 格式化字符串
 */
const formatTime = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  return format
    .replace('YYYY', year)
    .replace('MM', formatNumber(month))
    .replace('DD', formatNumber(day))
    .replace('HH', formatNumber(hour))
    .replace('mm', formatNumber(minute))
    .replace('ss', formatNumber(second))
}

/**
 * 获取当前日期
 */
const getCurrentDate = () => {
  return formatTime(new Date(), 'YYYY-MM-DD')
}

/**
 * 获取当前时间
 */
const getCurrentTime = () => {
  return formatTime(new Date(), 'HH:mm:ss')
}

/**
 * 获取当前日期时间
 */
const getCurrentDateTime = () => {
  return formatTime(new Date())
}

/**
 * 时间戳转日期
 * @param {Number} timestamp 时间戳（毫秒）
 * @param {String} format 格式化字符串
 */
const timestampToDate = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => {
  return formatTime(new Date(timestamp), format)
}

/**
 * 防抖函数
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 延迟时间（毫秒）
 */
const debounce = (fn, delay = 500) => {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数
 * @param {Function} fn 要执行的函数
 * @param {Number} interval 时间间隔（毫秒）
 */
const throttle = (fn, interval = 500) => {
  let lastTime = 0
  return function(...args) {
    const now = Date.now()
    if (now - lastTime >= interval) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}

/**
 * 深拷贝
 * @param {*} obj 要拷贝的对象
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof Array) {
    const cloneArr = []
    obj.forEach(item => {
      cloneArr.push(deepClone(item))
    })
    return cloneArr
  }
  if (obj instanceof Object) {
    const cloneObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = deepClone(obj[key])
      }
    }
    return cloneObj
  }
}

/**
 * 手机号脱敏
 * @param {String} phone 手机号
 */
const maskPhone = (phone) => {
  if (!phone) return ''
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 身份证号脱敏
 * @param {String} idCard 身份证号
 */
const maskIdCard = (idCard) => {
  if (!idCard) return ''
  return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2')
}

/**
 * 验证手机号
 * @param {String} phone 手机号
 */
const validatePhone = (phone) => {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * 验证邮箱
 * @param {String} email 邮箱
 */
const validateEmail = (email) => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
}

/**
 * 验证身份证号
 * @param {String} idCard 身份证号
 */
const validateIdCard = (idCard) => {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard)
}

/**
 * 获取URL参数
 * @param {String} name 参数名
 */
const getUrlParam = (name) => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  return currentPage.options[name] || ''
}

/**
 * 数组去重
 * @param {Array} arr 数组
 */
const unique = (arr) => {
  return [...new Set(arr)]
}

/**
 * 数组分组
 * @param {Array} arr 数组
 * @param {Number} size 每组大小
 */
const chunk = (arr, size) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

/**
 * 随机字符串
 * @param {Number} length 长度
 */
const randomString = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * 存储数据（异步）
 * @param {String} key 键
 * @param {*} value 值
 * @returns {Promise}
 */
const setStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data: value,
      success: () => resolve(true),
      fail: (e) => {
        console.error('存储失败', e)
        reject(false)
      }
    })
  })
}

/**
 * 获取存储数据（异步）
 * @param {String} key 键
 * @returns {Promise}
 */
const getStorage = (key) => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success: (res) => resolve(res.data),
      fail: (e) => {
        console.error('获取存储失败', e)
        reject(null)
      }
    })
  })
}

/**
 * 删除存储数据（异步）
 * @param {String} key 键
 * @returns {Promise}
 */
const removeStorage = (key) => {
  return new Promise((resolve, reject) => {
    wx.removeStorage({
      key,
      success: () => resolve(true),
      fail: (e) => {
        console.error('删除存储失败', e)
        reject(false)
      }
    })
  })
}

/**
 * 清空存储（异步）
 * @returns {Promise}
 */
const clearStorage = () => {
  return new Promise((resolve, reject) => {
    wx.clearStorage({
      success: () => resolve(true),
      fail: (e) => {
        console.error('清空存储失败', e)
        reject(false)
      }
    })
  })
}

/**
 * 存储数据（同步版本，仅在必要时使用）
 * @param {String} key 键
 * @param {*} value 值
 */
const setStorageSync = (key, value) => {
  try {
    wx.setStorageSync(key, value)
    return true
  } catch (e) {
    console.error('存储失败', e)
    return false
  }
}

/**
 * 获取存储数据（同步版本，仅在必要时使用）
 * @param {String} key 键
 */
const getStorageSync = (key) => {
  try {
    return wx.getStorageSync(key)
  } catch (e) {
    console.error('获取存储失败', e)
    return null
  }
}

module.exports = {
  formatTime,
  getCurrentDate,
  getCurrentTime,
  getCurrentDateTime,
  timestampToDate,
  debounce,
  throttle,
  deepClone,
  maskPhone,
  maskIdCard,
  validatePhone,
  validateEmail,
  validateIdCard,
  getUrlParam,
  unique,
  chunk,
  randomString,
  setStorage,        // 异步版本（推荐）
  getStorage,        // 异步版本（推荐）
  removeStorage,     // 异步版本（推荐）
  clearStorage,      // 异步版本（推荐）
  setStorageSync,    // 同步版本（备用）
  getStorageSync     // 同步版本（备用）
}

