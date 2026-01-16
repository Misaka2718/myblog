/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
      { text: '示例', 
        link: '/demo/README.md' 
      },
      { 
        text: '抽象代数', 
        link: '/Abstract-algebra/README.md', 
        icon: '/images/抽象.jpg' 
      },
     { 
        text: 'Pi and The AGM', 
        link: '/pi-agm/', 
        icon: '/images/害怕.png' 
      },
      { 
        text: '哈代数论', 
        link: '/Hardy/', 
        icon: '/images/害怕.png' 
      },

      { 
        text: '数学思考', 
        link: '/math/', 
        icon: '/images/思考.png' 
      },
      
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

