# Gold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# 沙漠闹黄金
## 1、简介
这是一个关于黄金大盘走势分析的一个项目，主要分为三个模块

爬虫模块

黄金模块

新闻模块

## 2、技术背景
前端 Angular8 + Ant Design of Angular

后端 Node + Express + MongoDB

## 3、项目模块

### 3.1、爬虫模块

爬虫模块分为多页面爬取和单页面爬取

#### 3.1.1、单页面爬取

单页面爬取,根据用户传入的url,进行爬取其中相应内容，传入表格

|    名称    | selector  | 值         |
| --------- | --------- | --------- |
|    最新价  | .latest-price |   312.12   |

#### 3.1.2、多页面爬取

多页面爬取, 首先根据传入的一个url, 获取多个url后, 后续步骤如单页面爬取一样 
