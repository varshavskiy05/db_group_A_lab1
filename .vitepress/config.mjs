import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lab1",
  description: "First lab on databases",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Зміст', link:'/zmist'},
      { text: 'Автори', link: '/autors' }
    ],

    sidebar: [
      {
        text: 'Зміст',
        items: [
          { text: 'Вступ', link:'/zmist'},
          { text: 'Аналіз предметної області', link:'/analysis'},
          { text: 'Зацікавлені особи', link:'/interested_parties'},
          { text: 'Призначення розроблюваної середи', link:'/appointment'},
          { text: 'Автори', link: '/autors' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
