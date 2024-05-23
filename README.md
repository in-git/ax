

<div align="center"><h1 align="center">AX</h3></div>
<div align="center"><h3 align="center">Windows 操作风格的后台管理系统</h3>
</div>

<p align="center">     
    <p align="center">
        <a>
            <img src="https://img.shields.io/badge/AX-V1.0-green" alt="AX">
        </a>
        <a href="https://gitee.com/in-git/ax.git">
            <img src="https://gitee.com/in-git/ax/badge/star.svg?theme=dark" alt="Gitee star">
        </a>
        <a href="https://gitee.com/in-git/ax">
            <img src="https://gitee.com/in-git/ax/badge/fork.svg?theme=dark" alt="Gitee fork">
        </a>
    </p>
</p>



#### 前言

AX是一款具备windows操作风格，而且具备完整权限的后端管理系统。当前为基础版，没有绑定任何业务，将会在此基础上派生其他子系统。

#### 在线体验

<a href=http://150.158.14.110:8000/ target=_blank>直接打开</a>

可以自己创建账号

#### 安装

```
git clone https://gitee.com/in-git/ax.git
```

- 该项目下有多个子仓库，按需克隆下载
- resource：静态资源，图片，帮助信息目录
- web-vue3：前端代码
- backend：后端java代码
- nodejs：辅助开发后端

>如果是首次接触这种类型的项目，可以先装前端，后端可以在界面上切换

#### 关于网络

AX的图片资源，代码，后端是完全分离的，能托管到github或者nginx服务器上，使用可视化界面进行重定向。为什么要这么做？因为子系统需要复用图片资源

#### 功能

1. 后端fork自若依，数据有所改动，前端界面，交互完全重构
2. 新注册的用户为访客，能使用备忘录，网页收藏，反馈功能，用户数据独立
3. 配置可视化，开发者不用再关注配置相关的问题，在界面上即可完成

#### 预览

<img src="public/cover-1.webp">

<img src="public/cover-2.webp">

<img src="public/cover-3.webp">



#### 本地功能

```
这些功能的配置属性存储在本地，不会影响到云端服务器数据
```

- ###### 系统设置

  1. 外观设置

     - [x] 模式切换：黑暗模式，默认亮色，紧凑模式
     - [x] 框架自带功能：水波纹特效，虚拟滚动，控件大小，主题颜色，文字方向
     - [x] 全局设置：字体大小，边框圆角

  2. 网络设置

     - [x] 选择服务器：可视化切换服务器，无需修改代码
     - [x] 超时管理：可视化配置timeout的时间
     - [x] token:本地token可视化展示

  3. 桌面设置

     1. 背景模糊，透明度，明亮度配置

  4. 第三方接口

     - [x] pexels:配置壁纸

  5. AI配置

     > 实验性功能，前端可视化配置AI接口，可用AI发送请求，处理业务

     - [x] 百度千帆：接入AI处理

- ###### AI对话

  > 使用千帆大模型

  - [x] 记忆功能：开启/关闭聊天记录
  - [x] 拖拽功能：输入框可拖拽大小
  - [x] 超时提醒：记录发送的毫秒
  - [x] 系统调用：可通过其他应用程序调用

- ###### 记事本

  - [x] 任务多开：可打开多个记事本，其他系统应用一般为单开，主要原因是多开的程序组件传值较为麻烦，目前没法降低代码的复杂度
- [x] AI调用：可调用AI
  - [x] 二维码生成

- ###### 表单功能

  - [x] 字段筛选：可动态配置表头，自带记忆
  - [x] 模式切换：提供表格模式，卡片模式，卡片模式部分内容可能要修改代码
  - [x] 搜索记忆：记录用于曾经搜索过的内容，可快速方便的录入
  - [x] 快捷方式
    1. 双击卡片内容编辑
    2. 双击表单内容编辑
