# 图标下载指南

## ✅ 已生成的 SVG 图标

项目已包含以下 SVG 格式图标，可直接使用：

### TabBar 图标（8个）
- ✅ home.svg / home-active.svg
- ✅ cert.svg / cert-active.svg
- ✅ experiment.svg / experiment-active.svg
- ✅ profile.svg / profile-active.svg

### 基础图标（5个）
- ✅ arrow-right.svg
- ✅ more.svg
- ✅ scan.svg
- ✅ search.svg

---

## 🔄 SVG 转 PNG 方法

微信小程序需要 PNG 格式，您可以通过以下方式转换：

### 方法一：在线转换（推荐）
访问以下网站上传 SVG 文件转换为 PNG：
1. **CloudConvert**: https://cloudconvert.com/svg-to-png
2. **Convertio**: https://convertio.co/zh/svg-png/
3. **Online-Convert**: https://image.online-convert.com/convert-to-png

**设置参数**：
- TabBar 图标：81x81 像素
- 其他图标：根据需要设置（24-48像素）

### 方法二：使用 Figma/Sketch
1. 打开 SVG 文件
2. 导出为 PNG（@2x 或 @3x）
3. 保存到 images 文件夹

### 方法三：使用命令行工具
```bash
# 安装 ImageMagick
brew install imagemagick  # macOS
# 或
apt-get install imagemagick  # Linux

# 转换命令
convert -background none -resize 81x81 home.svg home.png
```

---

## 📥 直接下载 PNG 图标

### iconfont（阿里巴巴图标库）
推荐图标包：
1. 访问：https://www.iconfont.cn/
2. 搜索关键词：
   - "home" / "首页"
   - "certificate" / "认证"
   - "experiment" / "实验"
   - "user" / "用户"
3. 选择图标 → 下载 PNG → 设置尺寸 81x81

**推荐图标集**：
- https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402
- https://www.iconfont.cn/collections/detail?cid=30

### IconPark（字节跳动图标库）
1. 访问：https://iconpark.oceanengine.com/
2. 搜索并下载对应图标
3. 选择 PNG 格式，81x81 尺寸

### 其他资源
- **Flaticon**: https://www.flaticon.com/
- **Icons8**: https://icons8.com/icons
- **Feather Icons**: https://feathericons.com/

---

## 🎨 图标颜色配置

### 未选中状态
- 颜色：#999999（灰色）
- 用于：home.png, cert.png, experiment.png, profile.png

### 选中状态
- 颜色：#4A7BF7（蓝色）
- 用于：home-active.png, cert-active.png, experiment-active.png, profile-active.png

---

## 📋 快速操作清单

1. ✅ 已生成 SVG 图标文件
2. ⏳ 将 SVG 转换为 PNG（81x81）
3. ⏳ 将 PNG 文件放入 images 文件夹
4. ⏳ 更新 app.json 中的图标路径（如需要）

---

## 🔧 修改 app.json 使用 SVG（可选）

如果开发者工具支持 SVG，可以直接使用：

```json
{
  "tabBar": {
    "list": [
      {
        "iconPath": "images/home.svg",
        "selectedIconPath": "images/home-active.svg"
      }
    ]
  }
}
```

**注意**：部分旧版本可能不支持 SVG，建议转换为 PNG。

---

## ❓ 常见问题

**Q: SVG 图标在小程序中不显示？**
A: 请转换为 PNG 格式，确保兼容性。

**Q: 图标显示模糊？**
A: 使用 @2x 或 @3x 尺寸（162x162 或 243x243），然后缩小。

**Q: 如何批量转换？**
A: 使用 ImageMagick 或在线批量转换工具。

---

生成时间：2025-11-26

