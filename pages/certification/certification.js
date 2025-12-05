/**
 * 认证评测页
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentCategory: 0,
    categories: ['全部', '阿里云', '华为云', '腾讯云', 'AWS'],
    certList: [
      {
        id: 1,
        tag: '阿里云A认证',
        title: 'ACP认证',
        subtitle: '云计算',
        count: 1199,
        difficulty: '中级',
        isFree: false,
        isHot: true
      },
      {
        id: 2,
        tag: '阿里云1+X认证',
        title: '大数据分析与应用',
        subtitle: '中级',
        count: 594,
        difficulty: '中级',
        isFree: true,
        isHot: false
      },
      {
        id: 3,
        tag: '阿里云1+X认证',
        title: '大数据分析与应用',
        subtitle: '初级',
        count: 508,
        difficulty: '初级',
        isFree: true,
        isHot: false
      },
      {
        id: 4,
        tag: '阿里云A认证',
        title: 'ACE认证',
        subtitle: '云计算架构师',
        count: 856,
        difficulty: '高级',
        isFree: false,
        isHot: true
      },
      {
        id: 5,
        tag: '华为云认证',
        title: 'HCIA-Cloud Computing',
        subtitle: '云计算工程师',
        count: 723,
        difficulty: '初级',
        isFree: false,
        isHot: false
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad(options) {
    console.log('认证页面加载', options)
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady() {
    console.log('认证页面渲染完成')
  },

  // 生命周期函数--监听页面显示
  onShow() {},

  // 生命周期函数--监听页面隐藏
  onHide() {},

  // 生命周期函数--监听页面卸载
  onUnload() {},

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {
    // 刷新数据
    console.log('下拉刷新')
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },

  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log('上拉加载更多')
  },

  // 用户点击右上角分享
  onShareAppMessage() {
    return {
      title: '实战云刷题 - 认证评测',
      path: '/pages/certification/certification'
    }
  },

  /**
   * 切换分类
   */
  switchCategory(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentCategory: index
    })
    wx.showToast({
      title: '切换到: ' + this.data.categories[index],
      icon: 'none'
    })
  },

  /**
   * 开始刷题
   */
  startExam(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '开始刷题 ID:' + id,
      icon: 'none'
    })
  }
})

