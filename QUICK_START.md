# 快速开始指南

## 环境准备

### 1. 安装开发工具
- 下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 安装并使用微信扫码登录

### 2. 获取 AppID
- 访问 [微信公众平台](https://mp.weixin.qq.com/) 注册小程序账号
- 或使用测试号进行开发

## 导入项目

1. 打开微信开发者工具
2. 点击「导入项目」
3. 选择项目目录 `wechat-exam`
4. 填入 AppID（或选择测试号）
5. 点击「导入」

## 项目配置

### 修改 AppID

编辑 `project.config.json`：

```json
{
  "appid": "your-appid-here"
}
```

### 配置 API 地址

编辑 `config/index.js`：

```javascript
const API_CONFIG = {
  [ENV.DEV]: {
    baseUrl: 'https://your-dev-api.com',
    timeout: 10000
  }
}
```

### 准备图标资源

项目已包含所需图标，位于 `images/` 目录：

**TabBar 图标**（必需）：
   - home.png / home-active.png
   - cert.png / cert-active.png
   - experiment.png / experiment-active.png
   - profile.png / profile-active.png

**功能图标**：
- arrow-right.png、more.png、scan.png、search.png

## 运行项目

1. 点击「编译」按钮
2. 在模拟器中查看效果
3. 点击「预览」可在真机上测试

## 功能测试

### 首页
- 查看用户信息和通知公告
- 点击四个功能模块
- 浏览热门认证列表

### 认证页
- 搜索和筛选认证
- 切换分类标签
- 查看认证详情

### 实验页
- 查看学习统计
- 切换实验分类
- 浏览实验列表

### 我的
- 查看个人信息和数据统计
- 使用功能菜单
- 测试设置功能

## 常见问题

### 图标不显示？
检查图标文件是否在 `images/` 目录，文件名和路径是否正确。

### 网络请求失败？
1. 修改 `config/index.js` 中的 API 地址
2. 真机测试需在微信公众平台配置合法域名
3. 开发阶段可勾选「不校验合法域名」

### 页面样式异常？
1. 确认微信开发者工具为最新版本
2. 尝试重新编译项目
3. 检查基础库版本（推荐 3.5.5+）

## 下一步开发

### 功能完善
- 刷题详情页和答题功能
- 成绩统计和排行榜
- 证书查看和学习记录
- 错题本和收藏功能

### 后端对接
- 实现用户登录鉴权
- 对接题目数据接口
- 实现答题和统计功能

### 优化发布
- 添加加载动画和错误提示
- 优化性能和用户体验
- 完整测试后提交审核

## 参考资源

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [微信小程序 API](https://developers.weixin.qq.com/miniprogram/dev/api/)
- 项目 README.md

---

**祝开发顺利！** 🎉
