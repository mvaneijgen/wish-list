const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/wish-list/",
        },
      }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  mode: "spa",
  router: {
    // base: '/wish-list/',
  },
  build: {
    dir: "docs",
    // router: {
    //   base: '/wish-list/',
    // },
  },
  generate: {
    dir: "docs",
    // router: {
    //   base: '/wish-list/',
    // },
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  manifest: {
    name: "Wish list app | M van Eijgen",
    short_name: "Wish List",
    lang: "nl",
    icons: [
      {
        src: "android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    theme_color: "#8f57ea",
    background_color: "#8f57ea",
    display: "standalone",
  },
  workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: "https://mvaneijgen.nl/wish-list/.*",
        // Defaults to `networkFirst` if omitted
        handler: "cacheFirst",
        // Defaults to `GET` if omitted
        method: "GET",
      },
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: "https://i.imgur.com/.*",
        // Defaults to `networkFirst` if omitted
        handler: "cacheFirst",
        // Defaults to `GET` if omitted
        method: "GET",
      },
    ],
  },
  axios: {
    // proxyHeaders: false
  },
  ...routerBase,
  css: ["@/assets/css/main.scss"],
  head: {
    title: "Wish list app | M van Eijgen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Wish list app | M van Eijgen" },
      {
        property: "og:description",
        content:
          "Op de één of andere manier vinden mensen het lastig om iets voor mij als cadeau te bedenken, terwijl ik denk dat het super makkelijk is...",
      },
      { property: "og:url", content: "https://mvaneijgen.nl/wish-list" },
      {
        property: "og:image",
        content: "https://mvaneijgen.nl/wish-list/social.jpg",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://mvaneijgen.nl/wish-list/favicon.ico",
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
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
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
