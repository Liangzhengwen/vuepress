/*
 * @Author: Ivan Leung
 * @Date: 2022-07-05 09:31:01
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-07-07 13:39:10
 * @FilePath: \HYGISd:\project\my-vuepress\docs\.vuepress\config.js
 * @Description: this is my first vuepress
 * 
 * Copyright (c) 2022 by Ivan Leung, All Rights Reserved. 
 */
const path = require('path');
module.exports = {
  title: '前端开发风格', //网站标题
  description: '前端开发统一风格，其中包括css,html,js,框架使用等，比如class的命名，sd-home-homeTitle', //网站描述
  head: [ //注入到当前HTMl页面 <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/logo.png' //图片应存放在public目录下
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'../../src'),
      }
    }
  },
  themeConfig: {
    lastUpdated: '最后更新于', // 给每篇加上最后更新时间，基于 git
    repo: 'https://github.com',
    repoLabel: 'Github',
    // editLinks: true,
    //  editLinkText: '帮助我们改善此页面！',
    // 添加导航栏
    nav: [ // 导航栏
    //   {
    //     text: '技术栈',
    //     // 这里是下拉列表展现形式。
    //     items: [
    //       { text: 'html', link: '/html/main' },
    //       { text: 'CSS', link: '/css/base' },
    //       { text: 'Javascript', link: '/js/jsbase' },
    //       { text: 'Vue', link: '/vue/base' },
    //     ]
    //   },
      {
        text: 'html',
        link: '/html/main'
      },
      {
        text: 'CSS',
        link: '/css/base'
      },
      {
        text: 'Javascript',
        link: '/js/jsbase'
      },
      {
        text: 'Vue',
        link: '/vue/base'
      },
      {
        text: '更多',
        // 这里是下拉列表展现形式。
        items: [
          // { text: '骗你的', link: '/review/base' },
          { text: '没有更多啦', link: '' },
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/html/': [
        'main',
      ],
      '/css/': [
        'base',
      ],
      '/js/': [
        'jsbase',
      ],
      '/vue/': [
        'base',
      ],
    }, // 侧边栏
  }
}
