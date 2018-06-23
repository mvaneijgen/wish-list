const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/wish-list/',
        },
      }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    // base: '/wish-list/',
  },
  generate: {
    dir: 'docs',
    // router: {
    //   base: '/wish-list/',
    // },
  },
  ...routerBase,
  css: ['@/assets/css/main.scss'],
  head: {
    title: 'Wishlist app | M van Eijgen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Wish list app | M van Eijgen' },
      { property: 'og:url', content: 'https://mvaneijgen.nl/wish-list' },
      { property: 'og:image', content: '/social.jpg' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
