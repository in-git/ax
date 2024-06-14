<div align="center"><h1 align="center">AX</h3></div>
<div align="center"><h3 align="center">Windows 操作风格的后台管理系统</h3>
</div>
<p align="center">
   <img src="https://img.shields.io/badge/AX-V1.0-green" alt="AX">
   <img src="https://img.shields.io/badge/AX-权限管理-red" alt="Gitee star">
   <img src="https://img.shields.io/badge/AX-可视化-blue" alt="Gitee fork">
</p>
### 获取代码

```
git clone https://gitee.com/in-git/ax-web.git
```

### 安装

```bash
npm i
```

### 启动

```
npm run dev
```



### 分支说明

```
ruoyi:基本兼容若依所有功能
master:主分支
前后端要保持一致，如前端选择ruoyi分支，后端也要选择ruoyi分支，否则会出现无法打开系统功能的情况，但不会影响系统运行
```

### 代码生成

```
参考测试表，需要菜单+后端代码+前端代码，和若依一致
整个页面没有路由
管理员密码，没时间处理，暂不公开，如有需要，提issue，后面有空再公开
有能力可以自行替换，现给一个普通用户设置密码123，在数据库中获取到password，把这个password填写到admin中
```

