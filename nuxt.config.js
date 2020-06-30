
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'PSWave - Cut the way out',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Get ready for a new future. We are a team of developers and researchers working on cutting edge products for Smart Homes and Electronic Vehicles.' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css', rel: "stylesheet"},
      { href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,400', rel: "stylesheet"},
    ],
    bodyAttrs: {
      class: 'index-page sidebar-collapse'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~static/css/bootstrap.min.css', lang: 'css'},
    { src: '~static/css/paper-kit.css', lang: 'css'},
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true,
  },
}
