// config/index.js - 配置文件

// 环境配置
const ENV = {
  DEV: 'development',
  PROD: 'production'
}

// 当前环境
const currentEnv = ENV.DEV

// API配置
const API_CONFIG = {
  [ENV.DEV]: {
    baseUrl: 'https://dev-api.example.com',
    timeout: 10000
  },
  [ENV.PROD]: {
    baseUrl: 'https://api.example.com',
    timeout: 10000
  }
}

// 获取当前环境配置
const getApiConfig = () => {
  return API_CONFIG[currentEnv]
}

// 存储键名
const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'userInfo',
  EXAM_HISTORY: 'examHistory',
  STUDY_RECORD: 'studyRecord'
}

// 页面路径
const PAGE_PATHS = {
  INDEX: '/pages/index/index',
  CERTIFICATION: '/pages/certification/certification',
  EXPERIMENT: '/pages/experiment/experiment',
  PROFILE: '/pages/profile/profile',
  LOGIN: '/pages/login/login',
  EXAM_DETAIL: '/pages/exam/detail/detail',
  EXAM_ANSWER: '/pages/exam/answer/answer',
  EXPERIMENT_DETAIL: '/pages/experiment/detail/detail',
  CERTIFICATE_LIST: '/pages/certificate/list/list',
  CERTIFICATE_DETAIL: '/pages/certificate/detail/detail',
  STUDY_RECORD: '/pages/study/record/record',
  WRONG_EXAMS: '/pages/exam/wrong/wrong',
  COLLECT_LIST: '/pages/exam/collect/collect',
  MESSAGE_LIST: '/pages/message/list/list',
  RANK_LIST: '/pages/rank/list/list',
  SETTING: '/pages/setting/index/index'
}

// 题目类型
const EXAM_TYPES = {
  SINGLE: 'single',      // 单选题
  MULTIPLE: 'multiple',  // 多选题
  JUDGE: 'judge',        // 判断题
  FILL: 'fill',          // 填空题
  SHORT: 'short'         // 简答题
}

// 题目难度
const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
}

// 实验状态
const EXPERIMENT_STATUS = {
  NOT_STARTED: 'notStarted',
  IN_PROGRESS: 'inProgress',
  COMPLETED: 'completed'
}

// 认证等级
const CERT_LEVELS = {
  PRIMARY: 'primary',    // 初级
  INTERMEDIATE: 'intermediate', // 中级
  ADVANCED: 'advanced'   // 高级
}

// 消息类型
const MESSAGE_TYPES = {
  SYSTEM: 'system',      // 系统消息
  EXAM: 'exam',          // 考试消息
  CERT: 'cert',          // 认证消息
  ACTIVITY: 'activity'   // 活动消息
}

// 排行榜类型
const RANK_TYPES = {
  DAILY: 'daily',        // 日榜
  WEEKLY: 'weekly',      // 周榜
  MONTHLY: 'monthly',    // 月榜
  TOTAL: 'total'         // 总榜
}

// 分页配置
const PAGE_CONFIG = {
  PAGE_SIZE: 10,
  DEFAULT_PAGE: 1
}

// 正则表达式
const REGEX = {
  PHONE: /^1[3-9]\d{9}$/,
  EMAIL: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  ID_CARD: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ // 至少8位，包含大小写字母和数字
}

// 导出配置
module.exports = {
  ENV,
  currentEnv,
  getApiConfig,
  STORAGE_KEYS,
  PAGE_PATHS,
  EXAM_TYPES,
  DIFFICULTY_LEVELS,
  EXPERIMENT_STATUS,
  CERT_LEVELS,
  MESSAGE_TYPES,
  RANK_TYPES,
  PAGE_CONFIG,
  REGEX
}

