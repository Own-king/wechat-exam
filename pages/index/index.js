// pages/index/index.js
const app = getApp()

Page({
  data: {
    phoneNumber: '137****7574',
    certList: [
      {
        id: 1,
        tag: '阿里云A认证',
        title: 'ACP认证',
        subtitle: '云计算',
        count: 1199,
        isFree: false
      },
      {
        id: 2,
        tag: '阿里云1+X认证',
        title: '大数据分析与应用',
        subtitle: '中级',
        count: 594,
        isFree: true
      },
      {
        id: 3,
        tag: '阿里云1+X认证',
        title: '大数据分析与应用',
        subtitle: '初级',
        count: 508,
        isFree: true
      }
    ]
  },

  onLoad(options) {
    // 获取页面参数
    console.log('页面参数:', options)
    
    // 获取用户手机号
    this.setData({
      phoneNumber: app.globalData.phoneNumber
    })
  },

  onReady() {
    // 页面初次渲染完成
    console.log('首页渲染完成')
  },

  onShow() {
    // 页面显示/切入前台时触发
  },

  onHide() {
    // 页面隐藏/切入后台时触发
  },

  onUnload() {
    // 页面卸载时触发
  },

  // 跳转到认证页面
  goToCertification() {
    wx.switchTab({
      url: '/pages/certification/certification'
    })
  },

  // 跳转到学习
  goToStudy() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  // 跳转到活动
  goToActivity() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  // 跳转到排行
  goToRank() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  // 跳转到刷题页面
  goToExam(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '跳转到刷题页面 ID:' + id,
      icon: 'none'
    })
  }
})

