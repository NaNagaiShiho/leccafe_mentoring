const Sass = require('sass')
const Fiber = require('fibers')

export default {

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, './pages/404.vue')
      })
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: "leccafe メンタリングプログラム" || "",
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: process.env.npm_package_description || ''
       },
      {
         hid: 'og:type',
         property: 'og:type',
        content: 'website' 
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://cranky-mccarthy-888d5f.netlify.app/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "leccafe メンタリングプログラム"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "leccafe メンタリングプログラム"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://cranky-mccarthy-888d5f.netlify.app/ogp.png"
      },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "leccafe メンタリングプログラム"
      },
      {
        name: "twitter:description",
        content: "leccafe メンタリングプログラム"
      },
      {
        hid: "twitter:img",
        name: "twitter:image",
        content: "https://cranky-mccarthy-888d5f.netlify.app/ogp.png"
      }
    ],
    link: [
      { rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon',  type: 'image/png', href: '/Apple-touchicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
    

  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
    modules: [
      'nuxt-webfontloader'
    ],
    webfontloader: {
      google: {
        families: ['Barlow+Condensed&display=swap'] 
      }
    },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  }
  }

