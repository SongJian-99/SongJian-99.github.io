/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
<<<<<<< HEAD
    "revision": "72dcd3740a40116ec0b5435bc269a781"
  },
  {
    "url": "assets/css/0.styles.abb837a2.css",
    "revision": "d0807b738c24981afc3644e8c44e2799"
=======
    "revision": "08b5c20b12d2d5d27383e1b2b070fd16"
  },
  {
    "url": "assets/css/0.styles.04b644ea.css",
    "revision": "880f1fb67fb7bd8ef352a9aba745f885"
>>>>>>> a3721b9 (feat:git缓存清理)
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.cd6faa39.js",
    "revision": "79ba81acb9d5cdcd102d020fc2d52e6c"
  },
  {
    "url": "assets/js/10.ebdd075c.js",
    "revision": "2705e67cb387ead4bdd3f2eb47cde406"
  },
  {
    "url": "assets/js/11.b999fc37.js",
    "revision": "4b459837f393f7ed1c8d1bde2c2f6687"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/12.b15432a8.js",
    "revision": "5345ab819a05999791ecd195ae474966"
  },
  {
    "url": "assets/js/13.9d1f2d57.js",
    "revision": "fc6cd11d795e35443825f391e3824969"
  },
  {
    "url": "assets/js/14.3a674115.js",
    "revision": "662b8b4e567f838f9a4c22dedc670692"
  },
  {
    "url": "assets/js/15.dbbddb5b.js",
    "revision": "d7ef715d48be98dc739536491563aef6"
  },
  {
    "url": "assets/js/16.5067bb2c.js",
    "revision": "6670dfd8be37189cf78eedb624cff111"
=======
    "url": "assets/js/12.67aeae84.js",
    "revision": "b932f7a73f072e38b5f8b9c8292f44df"
  },
  {
    "url": "assets/js/13.a3840d38.js",
    "revision": "2207cec41e4cc4edc8f40debce3781dc"
  },
  {
    "url": "assets/js/14.a5fb61b9.js",
    "revision": "b578d5f03f949d374048319fda2862d5"
  },
  {
    "url": "assets/js/15.baecc900.js",
    "revision": "304362506c227d0c92d6779d241b73c6"
  },
  {
    "url": "assets/js/16.467478c9.js",
    "revision": "e38347ee84703eb40cd7177fce9a928d"
>>>>>>> a3721b9 (feat:git缓存清理)
  },
  {
    "url": "assets/js/17.575bd632.js",
    "revision": "5bb0ba2a06acae9ba9b0657cc07715a8"
  },
  {
    "url": "assets/js/18.7c3be9ba.js",
    "revision": "103aae4cefd529a7e49a171842770e09"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/19.1a84a247.js",
    "revision": "92e0bed912c5c0ac9fe5d04ca31c143a"
  },
  {
    "url": "assets/js/20.77b1e1f3.js",
    "revision": "b2611e231dca8418e89f01e012037141"
=======
    "url": "assets/js/19.494b340b.js",
    "revision": "8fc5913471ba5e4c4e78577e46091d91"
  },
  {
    "url": "assets/js/20.0148c883.js",
    "revision": "be5e244bf6645fe6693a1380f544e4fb"
>>>>>>> a3721b9 (feat:git缓存清理)
  },
  {
    "url": "assets/js/21.3f7267ac.js",
    "revision": "5838c51f7efca00b0ac8f08dd0023255"
  },
  {
    "url": "assets/js/22.9e1f9c87.js",
    "revision": "5b37cd3801e464a1df5a9cfc9853122b"
  },
  {
    "url": "assets/js/23.23f411f4.js",
    "revision": "363e51a205e1a9952c29d08f4b07e7e3"
  },
  {
    "url": "assets/js/24.f4cbef2b.js",
    "revision": "e0f025aaebe4330ae56c8b1ce43a68ff"
  },
  {
    "url": "assets/js/25.b46a8971.js",
    "revision": "009c48822d5dd874f3ccc30d707ce18f"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/3.be998e2f.js",
=======
    "url": "assets/js/3.34654343.js",
>>>>>>> a3721b9 (feat:git缓存清理)
    "revision": "6696a254306ee063fbc306ad6c339094"
  },
  {
    "url": "assets/js/4.7790a5c0.js",
    "revision": "153f5687f0d0a0aa523619df0dc2e908"
  },
  {
    "url": "assets/js/5.c2ee424f.js",
    "revision": "bc74b7bb40488db5b8ff5970ffbe8db0"
  },
  {
    "url": "assets/js/6.0abcae0b.js",
    "revision": "47623e763f2b89578685776c83f83f98"
  },
  {
    "url": "assets/js/7.b8fc325b.js",
    "revision": "e231e4e6c36fc01a4862d2952bcab12c"
  },
  {
    "url": "assets/js/8.17950656.js",
    "revision": "f58d104878b1689efbf3bcc9a6b495de"
  },
  {
    "url": "assets/js/9.9353b543.js",
    "revision": "bd2a6fe962463078020ad8f652c045ee"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/app.3c89f207.js",
    "revision": "d758307927ba63c4d4435b7bca101197"
=======
    "url": "assets/js/app.0312a93a.js",
    "revision": "6378efc1d3b397d7f1bc46fe259fe273"
>>>>>>> a3721b9 (feat:git缓存清理)
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
<<<<<<< HEAD
    "revision": "a4a45769807df20bef910cf30c974db2"
  },
  {
    "url": "backend/docker/preface.html",
    "revision": "0ea7bd3656b20b2d072d3f044ca7ccf6"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "2e58ec13f595354bb8d1e1732cfd1ab2"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "e734cc049311bff47205bf97328f5d28"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "6af3b3b9214571c30e36f123e6f744fb"
  },
  {
    "url": "books/bookList.html",
    "revision": "57b08e229f0751e4749cf553a05cd98f"
  },
  {
    "url": "books/关圣帝君觉世真经.html",
    "revision": "d357c3a22677cfb640cef9c6f3281c6d"
  },
  {
    "url": "books/太上老君说常清静经.html",
    "revision": "40259729e096340750ff67d71d2f8f92"
  },
  {
    "url": "books/太乙金华宗旨.html",
    "revision": "48c869010e46584ced7dea9815693514"
  },
  {
    "url": "books/素书.html",
    "revision": "d1365f3df9800c7ecc8f3b4946cc7a4c"
  },
  {
    "url": "categories/index.html",
    "revision": "c5be835efad35e3a36ff7b837dc3f6b0"
  },
  {
    "url": "categories/传统文化/index.html",
    "revision": "224efa3e8ef91f7523bd505a8f980d00"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "69e312161976ea91b22189156078f0cb"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "fae1a52bb4c2c3c2f9b30df481cd39ae"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "65c1a52426f176eb4f62c6dd3e1876ff"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "55f2737f6d1e49ceb19f712c9a52d79e"
  },
  {
    "url": "index.html",
    "revision": "2efe4d70545c559fdbbe72f9dc46baf5"
=======
    "revision": "7eb207a7e2a24600573a1fe99cf2bf70"
  },
  {
    "url": "backend/docker/preface.html",
    "revision": "b4ca0794149f4ffbf1e6699050d8a1d1"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "6c194c37d27cac799ffec97fac36fe1d"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "56cc6dd370ae13d012fc3ecf043e3261"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "4ff81b7a346941c1b110d0cf7e7a2ef1"
  },
  {
    "url": "books/bookList.html",
    "revision": "7d7b96c3084503a7923df65592711826"
  },
  {
    "url": "books/关圣帝君觉世真经.html",
    "revision": "372c582dfc0022381001878e84369b98"
  },
  {
    "url": "books/太上老君说常清静经.html",
    "revision": "bc2b233b35dff6896fd3f3322fec13a7"
  },
  {
    "url": "books/太乙金华宗旨.html",
    "revision": "85601f96196ca28b8a3d52980640335d"
  },
  {
    "url": "books/素书.html",
    "revision": "113110d97bb10e2d485cf118f1df4abb"
  },
  {
    "url": "categories/index.html",
    "revision": "ca5ff861291db3bf8fdee638cca6a980"
  },
  {
    "url": "categories/传统文化/index.html",
    "revision": "030310642d9204fa5f551f19002113c2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8c0f4c124197a462fac535532c103158"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "4cbf3ff940d71cdc8b6cf55c3d11a14d"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "9325f76fc068eb55fbcb126f14f4069f"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "d37c4be614db0627c69821d2cbce31e8"
  },
  {
    "url": "index.html",
    "revision": "26b3732ad62f1db78abf00333bd45b22"
>>>>>>> a3721b9 (feat:git缓存清理)
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "tag/Docker/index.html",
<<<<<<< HEAD
    "revision": "ab03f1321500195fb8f07dae20a9d5d0"
  },
  {
    "url": "tag/index.html",
    "revision": "2a5e1a5974024f2d7f5f4242f2beb902"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "ac69ac8eba4de7effd14c95357296db1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "7a68d3648860ed822fa5bcd88eac1327"
  },
  {
    "url": "tag/道/index.html",
    "revision": "4ba091b264d6f08d7343b923eb096210"
  },
  {
    "url": "timeline/index.html",
    "revision": "cbdb4af523b7202f0782b8f5878010c1"
=======
    "revision": "53316f47e590edaca7a6eb5841569ccc"
  },
  {
    "url": "tag/index.html",
    "revision": "ebf98f4488fec0b1ca8f69c353602a68"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "1e8c62184f12457e9b3c6bd4932d2f96"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ca5fe78f5eeb3c8f3bd3203407a98552"
  },
  {
    "url": "tag/道/index.html",
    "revision": "6a6ff8d7883e379df75a40ea7a7c8bd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb5c3e24479f085a3d094c9054b98dd7"
>>>>>>> a3721b9 (feat:git缓存清理)
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
