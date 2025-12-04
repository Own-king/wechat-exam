// app.js
App({
  onLaunch(options) {
    // 获取启动场景值
    console.log('启动场景值:', options.scene)
    
    // 展示本地存储能力（使用异步API）
    wx.getStorage({
      key: 'logs',
      success: (res) => {
        const logs = res.data || []
        logs.unshift(Date.now())
        wx.setStorage({
          key: 'logs',
          data: logs
        })
      },
      fail: () => {
        wx.setStorage({
          key: 'logs',
          data: [Date.now()]
        })
      }
    })

    // 登录
    this.login()
  },

  onShow(options) {
    // 小程序切前台时触发
    console.log('小程序切前台', options)
  },

  onHide() {
    // 小程序切后台时触发
    console.log('小程序切后台')
  },

  onError(msg) {
    // 小程序发生错误时触发
    console.error('小程序错误:', msg)
  },

  // 登录方法
  login() {
    wx.login({
      success: (res) => {
        if (res.code) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log('登录成功，code:', res.code)
          // TODO: 调用后端接口
          // this.getUserInfo(res.code)
        } else {
          console.error('登录失败:', res.errMsg)
        }
      },
      fail: (err) => {
        console.error('wx.login 调用失败:', err)
      }
    })
  },

  globalData: {
    userInfo: null,
    phoneNumber: '131****7574'
  }
})

