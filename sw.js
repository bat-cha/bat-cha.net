importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7178ef14d8eb680b6424.js",
    "revision": "638197363e41a2e8d6610faba6be3c05"
  },
  {
    "url": "/_nuxt/a8c79742ab59bdeedadc.js",
    "revision": "88b416243e1929a222089d4209bcfecb"
  },
  {
    "url": "/_nuxt/b17c3b9a5093123abcbc.js",
    "revision": "d123b519a54212afe24baa28bf2ba405"
  },
  {
    "url": "/_nuxt/b1a667b1c1c03c96e380.js",
    "revision": "4ad80d6e0784f10a592b44ea1837b2b5"
  },
  {
    "url": "/_nuxt/b59426ee8747fd133144.js",
    "revision": "7d3aaf933618faa34c64344bd0d26d65"
  }
], {
  "cacheId": "bat-cha.net",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
