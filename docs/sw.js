importScripts('/wish-list/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/wish-list/_nuxt/app.8330d67045f4e32db7ca.js",
    "revision": "dc980c3ac5186f075d2005e6aa732bdb"
  },
  {
    "url": "/wish-list/_nuxt/layouts/default.91b1413d3a022cbec4a7.js",
    "revision": "55aa4e085d5c475695235b078b136d71"
  },
  {
    "url": "/wish-list/_nuxt/manifest.f2faac2bfff02fcf9b15.js",
    "revision": "80bfa9778da554aade5206e86e7bfe06"
  },
  {
    "url": "/wish-list/_nuxt/pages/index.f3a1f43a45149020b54a.js",
    "revision": "ad49f7db5f818fd7974ede8360baf9c8"
  },
  {
    "url": "/wish-list/_nuxt/vendor.ad278e54651dd065a8dd.js",
    "revision": "a78cfb07fd985b75f4adcd4cacb25530"
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





