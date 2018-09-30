importScripts('/wish-list/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/wish-list/_nuxt/app.6bf9b282cb781d8edeaa.js",
    "revision": "6ecf928459d96320b263100dea132617"
  },
  {
    "url": "/wish-list/_nuxt/layouts/default.91b1413d3a022cbec4a7.js",
    "revision": "55aa4e085d5c475695235b078b136d71"
  },
  {
    "url": "/wish-list/_nuxt/manifest.bd51ecfc6034527d7ead.js",
    "revision": "9da65b50f79c9c5e6794c149e45acbf6"
  },
  {
    "url": "/wish-list/_nuxt/pages/index.4efe29ef6efe64543fea.js",
    "revision": "726e751c64e377597a0e28b8619d83ba"
  },
  {
    "url": "/wish-list/_nuxt/vendor.05f90a15d4effbb630f8.js",
    "revision": "82e76349ce0e80c8bf298ec45b3cc54d"
  }
], {
  "cacheId": "wishlist",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/wish-list/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/wish-list/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://mvaneijgen.nl/wish-list/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://i.imgur.com/.*'), workbox.strategies.cacheFirst({}), 'GET')





