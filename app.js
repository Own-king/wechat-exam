// app.js
App({
  /**
   * 小程序启动生命周期
   */
  onLaunch(options) {
    console.log('启动场景值:', options.scene)
    
    // 初始化本地存储
    this.initStorage()
    
    // 用户登录
    this.login()
  },

  /**
   * 小程序切前台时触发
   */
  onShow(options) {
    console.log('小程序切前台', options)
  },

  /**
   * 小程序切后台时触发
   */
  onHide() {
    console.log('小程序切后台')
  },

  /**
   * 小程序发生错误时触发
   */
  onError(msg) {
    console.error('小程序错误:', msg)
  },

  /**
   * 初始化本地存储
   */
  initStorage() {
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
  },

  /**
   * 用户登录
   */
  login() {
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log('登录成功，code:', res.code)
          // TODO: 调用后端接口获取用户信息
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

  /**
   * 全局数据
   */
  globalData: {
    userInfo: null,
    phoneNumber: '131****7574'
  }
})

