export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'clientesaas',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth-next',
  ],
  auth: {
    strategies: {
      local: {
        token: {
          // property: 'cooki',
          // global: true,
          required: false,
          type: false
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' , propertyName: false },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' }
        }
      }
    },
    localStorage:false,
  },
  // auth: {
  //   strategies: {
  //     laravelSanctum: {
  //       provider: 'laravel/sanctum',
  //       url: 'http://localhost:8000',
  //       endpoints: {
  //         logout: { url: '/api/logout', method: 'post' },
  //         login: { url: '/api/login', method: 'post' , propertyName: false },
  //         user: { url: '/api/user', method: 'get' }
  //       }
  //       },
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
   credentials: true,
    baseURL: 'http://localhost:8000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
