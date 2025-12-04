// pages/profile/profile.js
const app = getApp()

Page({
  // 页面的初始数据
  data: {
    userInfo: {
      avatar: '/images/avatar.png',
      name: '实战云用户',
      phone: '137****7574',
      isVip: true
    },
    userStats: {
      examCount: 1256,
      certCount: 8,
      studyDays: 89
    },
    menuList: [
      {
        id: 1,
        title: '我的证书',
        icon: '/images/menu-cert.png',
        badge: ''
      },
      {
        id: 2,
        title: '学习记录',
        icon: '/images/menu-record.png',
        badge: ''
      },
      {
        id: 3,
        title: '错题本',
        icon: '/images/menu-error.png',
        badge: '12'
      },
      {
        id: 4,
        title: '我的收藏',
        icon: '/images/menu-favorite.png',
        badge: ''
      },
      {
        id: 5,
        title: '消息通知',
        icon: '/images/menu-message.png',
        badge: '3'
      }
    ],
    settingList: [
      {
        id: 1,
        title: '账号设置',
        icon: '/images/setting-account.png'
      },
      {
        id: 2,
        title: '隐私设置',
        icon: '/images/setting-privacy.png'
      },
      {
        id: 3,
        title: '关于我们',
        icon: '/images/setting-about.png'
      },
      {
        id: 4,
        title: '帮助与反馈',
        icon: '/images/setting-help.png'
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad(options) {
    console.log('我的页面加载', options)
    // 获取用户信息
    this.getUserInfo()
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady() {
    console.log('我的页面渲染完成')
  },

  // 生命周期函数--监听页面显示
  onShow() {},

  // 生命周期函数--监听页面隐藏
  onHide() {},

  // 生命周期函数--监听页面卸载
  onUnload() {},

  // 用户点击右上角分享
  onShareAppMessage() {
    return {
      title: '实战云刷题',
      path: '/pages/index/index'
    }
  },

  // 获取用户信息
  getUserInfo() {
    // 这里可以从后台获取用户信息
    const userInfo = {
      avatar: '/images/avatar.png',
      name: '实战云用户',
      phone: app.globalData.phoneNumber,
      isVip: true
    }
    this.setData({
      userInfo
    })
  },

  handleMenuClick(e) {
    const id = e.currentTarget.dataset.id
    const menuItem = this.data.menuList.find(item => item.id === id)
    wx.showToast({
      title: '点击了: ' + menuItem.title,
      icon: 'none'
    })
  },

  handleSettingClick(e) {
    const id = e.currentTarget.dataset.id
    const settingItem = this.data.settingList.find(item => item.id === id)
    wx.showToast({
      title: '点击了: ' + settingItem.title,
      icon: 'none'
    })
  },

  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          })
          // 这里可以清除登录信息
        }
      }
    })
  }
})

