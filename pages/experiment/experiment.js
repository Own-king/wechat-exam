/**
 * 在线实验页
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    stats: {
      completed: 12,
      inProgress: 3,
      total: 48
    },
    currentCategory: 0,
    categories: ['全部', '云计算', '大数据', '人工智能', '网络安全'],
    experimentList: [
      {
        id: 1,
        title: 'ECS云服务器快速入门',
        description: '学习如何创建和管理阿里云ECS实例，掌握基本的云服务器操作',
        cover: '/images/exp-cover1.png',
        duration: '30分钟',
        difficulty: '入门',
        participants: 2345,
        status: 'notStarted',
        isNew: true,
        isHot: false
      },
      {
        id: 2,
        title: 'OSS对象存储实战',
        description: '深入了解阿里云对象存储服务，实现文件上传下载和权限管理',
        cover: '/images/exp-cover2.png',
        duration: '45分钟',
        difficulty: '初级',
        participants: 1876,
        status: 'inProgress',
        isNew: false,
        isHot: true
      },
      {
        id: 3,
        title: 'RDS数据库搭建与配置',
        description: '学习云数据库RDS的创建、配置和基本运维操作',
        cover: '/images/exp-cover3.png',
        duration: '60分钟',
        difficulty: '中级',
        participants: 1523,
        status: 'completed',
        isNew: false,
        isHot: false
      },
      {
        id: 4,
        title: 'Docker容器化部署实践',
        description: '掌握Docker基础知识，实现应用的容器化部署',
        cover: '/images/exp-cover4.png',
        duration: '90分钟',
        difficulty: '中级',
        participants: 3421,
        status: 'notStarted',
        isNew: true,
        isHot: true
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad(options) {
    console.log('实验页面加载', options)
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady() {
    console.log('实验页面渲染完成')
  },

  // 生命周期函数--监听页面显示
  onShow() {},

  // 生命周期函数--监听页面隐藏
  onHide() {},

  // 生命周期函数--监听页面卸载
  onUnload() {},

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {
    console.log('下拉刷新')
    wx.stopPullDownRefresh()
  },

  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log('上拉加载更多')
  },

  // 用户点击右上角分享
  onShareAppMessage() {
    return {
      title: '实战云刷题 - 在线实验',
      path: '/pages/experiment/experiment'
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
   * 开始实验
   */
  startExperiment(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '开始实验 ID:' + id,
      icon: 'none'
    })
  }
})

