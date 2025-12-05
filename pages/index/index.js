/**
 * 首页
 */
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('页面参数:', options)
    this.setData({
      phoneNumber: app.globalData.phoneNumber
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('首页渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 跳转到认证页面
   */
  goToCertification() {
    wx.switchTab({
      url: '/pages/certification/certification'
    })
  },

  /**
   * 跳转到学习
   */
  goToStudy() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  /**
   * 跳转到活动
   */
  goToActivity() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  /**
   * 跳转到排行
   */
  goToRank() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  /**
   * 跳转到刷题页面
   */
  goToExam(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '跳转到刷题页面 ID:' + id,
      icon: 'none'
    })
  }
})

