import { defineConfig } from 'vite';

export default defineConfig({
  // 指定项目的根目录
  root: './',
  // 指定输出目录
  build: {
    outDir: 'dist'
  },
  // 配置多页应用
  server: {
    // 指定默认打开的页面
    index: '/index.html',
    // 配置多个页面
    cors: true,
    fs: {
      strict: false,
    },
    // 配置多个页面
    pages: {
      index: {
        // 模板文件
        template: 'public/index.html',
        // 输出文件名
        filename: 'index.html',
        // 页面标题
        title: 'Home Page'
      },
      team: {
        template: 'public/team.html',
        filename: 'team.html',
        title: 'Our Team'
      },
      contactus: {
        template: 'public/contactus.html',
        filename: 'contactus.html',
        title: 'Contact Us'
      }
    }
  }
});