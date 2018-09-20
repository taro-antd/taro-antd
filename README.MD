## Front End Quick Start
> 以下快速指南仅针对前端环境的快速搭建和调试。若希望搭建完整的开发链路，请参考上文文档配置。

 ### 1 安装外部与全局依赖

```
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

### 2 使用命令创建模板项目

```
$ taro init myApp

npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目
$ npx @tarojs/cli init myApp
```

### 3 微信小程序编译预览模式

```
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

### 4 Taro 提供了更新命令来更新 CLI 工具自身和项目中 Taro 相关的依赖

```
# taro
$ taro update self
# npm 
npm i -g @tarojs/cli@latest 
# yarn 
yarn global add @tarojs/cli@latest 

更新项目中 Taro 相关的依赖
$ taro update project
```
