// api/index.js - API接口统一管理
const { get, post, put, del } = require('../utils/request')

/**
 * 用户相关接口
 */
const userApi = {
  // 用户登录
  login: (data) => post('/user/login', data),
  
  // 获取用户信息
  getUserInfo: () => get('/user/info'),
  
  // 更新用户信息
  updateUserInfo: (data) => put('/user/info', data),
  
  // 获取用户统计数据
  getUserStats: () => get('/user/stats'),
  
  // 退出登录
  logout: () => post('/user/logout')
}

/**
 * 认证相关接口
 */
const certApi = {
  // 获取认证列表
  getCertList: (params) => get('/cert/list', params),
  
  // 获取认证详情
  getCertDetail: (id) => get(`/cert/detail/${id}`),
  
  // 获取认证分类
  getCertCategories: () => get('/cert/categories'),
  
  // 搜索认证
  searchCert: (keyword) => get('/cert/search', { keyword })
}

/**
 * 题目相关接口
 */
const examApi = {
  // 获取题目列表
  getExamList: (certId, params) => get(`/exam/list/${certId}`, params),
  
  // 获取题目详情
  getExamDetail: (id) => get(`/exam/detail/${id}`),
  
  // 提交答案
  submitAnswer: (data) => post('/exam/submit', data),
  
  // 获取答题记录
  getExamRecord: (params) => get('/exam/record', params),
  
  // 获取错题本
  getWrongExams: (params) => get('/exam/wrong', params),
  
  // 收藏题目
  collectExam: (examId) => post('/exam/collect', { examId }),
  
  // 取消收藏
  uncollectExam: (examId) => del('/exam/collect', { examId }),
  
  // 获取收藏列表
  getCollectList: (params) => get('/exam/collect/list', params)
}

/**
 * 实验相关接口
 */
const experimentApi = {
  // 获取实验列表
  getExperimentList: (params) => get('/experiment/list', params),
  
  // 获取实验详情
  getExperimentDetail: (id) => get(`/experiment/detail/${id}`),
  
  // 获取实验分类
  getExperimentCategories: () => get('/experiment/categories'),
  
  // 开始实验
  startExperiment: (id) => post(`/experiment/start/${id}`),
  
  // 完成实验
  finishExperiment: (id, data) => post(`/experiment/finish/${id}`, data),
  
  // 获取实验记录
  getExperimentRecord: (params) => get('/experiment/record', params)
}

/**
 * 证书相关接口
 */
const certificateApi = {
  // 获取我的证书列表
  getCertificateList: (params) => get('/certificate/list', params),
  
  // 获取证书详情
  getCertificateDetail: (id) => get(`/certificate/detail/${id}`),
  
  // 下载证书
  downloadCertificate: (id) => get(`/certificate/download/${id}`)
}

/**
 * 排行榜相关接口
 */
const rankApi = {
  // 获取排行榜
  getRankList: (type, params) => get(`/rank/${type}`, params),
  
  // 获取我的排名
  getMyRank: (type) => get(`/rank/my/${type}`)
}

/**
 * 消息相关接口
 */
const messageApi = {
  // 获取消息列表
  getMessageList: (params) => get('/message/list', params),
  
  // 获取未读消息数
  getUnreadCount: () => get('/message/unread/count'),
  
  // 标记消息已读
  markAsRead: (id) => put(`/message/read/${id}`),
  
  // 删除消息
  deleteMessage: (id) => del(`/message/${id}`)
}

/**
 * 学习记录相关接口
 */
const studyApi = {
  // 获取学习记录
  getStudyRecord: (params) => get('/study/record', params),
  
  // 获取学习统计
  getStudyStats: () => get('/study/stats'),
  
  // 获取学习日历
  getStudyCalendar: (year, month) => get('/study/calendar', { year, month })
}

module.exports = {
  userApi,
  certApi,
  examApi,
  experimentApi,
  certificateApi,
  rankApi,
  messageApi,
  studyApi
}

