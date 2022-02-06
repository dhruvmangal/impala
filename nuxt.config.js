export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Impala Black Enterprises',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Stones' },
      { name: 'format-detection', content: 'telephone=no' },
      {name:"google-site-verification", content:"gfZZ8YgU6nzlFxiul5uA5EXQKhEQhgd08qsCjrTwBrQ"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
      },{
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
        integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p',
        crossorigin: 'anonymous'
      }
    ]
  },

  googleAnalytics:{
    id: 'G-K04NP7T4JW'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/tawkto.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  
    buildModules: [
      '@nuxtjs/google-analytics'
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [  
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-leaflet',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': 'http://localhost/impala',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  script:[
    {
      hid:"tawk.to",
      src:"https://embed.tawk.to/615c3ed7d326717cb684d575/1fh85d8e2",
      defer: true
    }
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
