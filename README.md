# 实战云刷题小程序

基于微信小程序原生框架开发的在线刷题学习平台，提供认证评测、实验学习等功能。

## 项目信息

- **版本**: v1.0.0
- **基础库**: 3.5.5
- **框架**: 微信小程序原生框架
- **开发工具**: 微信开发者工具

## 快速开始

1. 下载安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 注册微信小程序账号，获取 AppID

### 导入项目

```bash
# 1. 打开微信开发者工具
# 2. 选择"导入项目"
# 3. 选择本项目目录
# 4. 填入你的 AppID（或使用测试号）
```

### 配置项目

修改 `project.config.json` 中的 `appid`：

```json
{
  "appid": "your-appid-here"
}
```

修改 `config/index.js` 中的 API 配置：

```javascript
const API_CONFIG = {
  [ENV.DEV]: {
    baseUrl: 'https://your-dev-api.com',
    timeout: 10000
  }
}
```

## 项目结构

```
wechat-exam/
├── api/                    # API接口管理
│   └── index.js           # 统一的API接口定义（40+接口）
├── config/                 # 配置文件
│   └── index.js           # 项目配置（环境、常量、正则等）
├── images/                 # 图标资源目录（SVG格式）
│   ├── home.png           # 首页图标
│   ├── home-active.png    # 首页图标（选中）
│   ├── cert.png           # 认证图标
│   ├── cert-active.png    # 认证图标（选中）
│   ├── experiment.png     # 实验图标
│   ├── experiment-active.png  # 实验图标（选中）
│   ├── profile.png        # 我的图标
│   ├── profile-active.png # 我的图标（选中）
│   ├── arrow-right.png    # 右箭头
│   ├── more.png           # 更多按钮
│   ├── scan.png           # 扫一扫
│   ├── search.png         # 搜索图标
├── pages/                  # 页面目录
│   ├── index/             # 首页
│   │   ├── index.wxml
│   │   ├── index.wxss
│   │   ├── index.js
│   │   └── index.json
│   ├── certification/     # 认证评测页
│   │   ├── certification.wxml
│   │   ├── certification.wxss
│   │   ├── certification.js
│   │   └── certification.json
│   ├── experiment/        # 在线实验页
│   │   ├── experiment.wxml
│   │   ├── experiment.wxss
│   │   ├── experiment.js
│   │   └── experiment.json
│   └── profile/           # 我的页面
│       ├── profile.wxml
│       ├── profile.wxss
│       ├── profile.js
│       └── profile.json
├── utils/                  # 工具函数
│   ├── request.js         # 网络请求封装（支持异步存储）
│   └── util.js            # 通用工具函数（20+个）
├── app.js                 # 小程序入口文件（完整生命周期）
├── app.json               # 小程序全局配置
├── app.wxss               # 小程序全局样式
├── project.config.json    # 项目配置
├── sitemap.json           # 站点地图配置
├── package.json           # 项目依赖配置
├── .gitignore            # Git忽略配置
├── README.md             # 项目说明（本文件）
└── QUICK_START.md        # 快速开始指南
```

## 功能特性

### 首页
- 用户信息展示（手机号脱敏）
- 四大功能模块：认证评测、实验学习、热门活动、刷题排行
- 通知公告栏
- 热门认证列表

### 认证评测
- 搜索功能
- 分类标签切换
- 认证列表展示
- 下拉刷新、上拉加载

### 在线实验
- 学习统计卡片
- 实验分类筛选
- 实验列表展示
- 实验状态管理

### 我的
- 用户信息卡片
- 数据统计
- 功能菜单（证书、记录、错题本、收藏、消息）
- 设置选项

## 技术栈

- **微信小程序原生框架** - 无第三方依赖
- **ES6+** - 现代 JavaScript 语法
- **代码按需注入** - `lazyCodeLoading: requiredComponents`
- **异步 API** - 使用异步存储避免阻塞

## 开发说明

### 网络请求

```javascript
const { get, post } = require('../../utils/request')

// GET 请求
get('/api/cert/list', { page: 1 })

// POST 请求
post('/api/exam/submit', { examId: 1 })
```

### 工具函数

```javascript
const { formatTime, maskPhone } = require('../../utils/util')

// 时间格式化
formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss')

// 手机号脱敏
maskPhone('13712345678') // 137****5678
```

### API接口

```javascript
const { userApi, certApi } = require('../../api/index')

// 用户登录
userApi.login({ code: 'xxx' })

// 获取认证列表
certApi.getCertList({ page: 1, size: 10 })
```

## 设计规范

### 颜色方案
- 主色：`#4A7BF7`（渐变蓝）
- 背景：`#f5f7fa`
- 文字：`#333`（主）、`#666`（次）、`#999`（辅）

### UI特点
- 圆角卡片设计
- 渐变色按钮
- 阴影效果
- 现代简约风格

## 代码规范

- 使用 ES6+ 语法
- 异步操作使用 Promise
- 统一的错误处理
- 完整的代码注释
- 模块化开发
- JSDoc 规范注释

## 待开发功能

- [ ] 刷题详情页
- [ ] 答题功能
- [ ] 成绩统计
- [ ] 排行榜
- [ ] 证书查看
- [ ] 学习记录
- [ ] 错题本
- [ ] 收藏功能
- [ ] 消息推送
- [ ] 用户设置

## 注意事项

### 开发前必读
1. 替换 AppID：修改 `project.config.json`
2. 配置 API：修改 `config/index.js`
3. 网络域名：真机测试需在微信公众平台配置合法域名
4. 隐私协议：发布前需完善隐私协议

### 测试建议
- 开发者工具模拟器测试
- 真机预览测试
- 不同机型适配测试
- 网络环境测试（WiFi、4G、弱网）

### 安全建议
- 使用 HTTPS 协议
- 不在前端存储敏感信息
- 做好数据校验
- 遵守用户隐私保护规范

## 参考文档

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [微信小程序 API 文档](https://developers.weixin.qq.com/miniprogram/dev/api/)
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

## 许可证

MIT License

---

**创建时间**: 2025-11-26  
**最后更新**: 2025-12-05  
**状态**: ✅ 开发完成，可直接使用
