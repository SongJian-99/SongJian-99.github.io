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
    "revision": "760cea5389162bb8c6b8ba8b66ccf5a6"
  },
  {
    "url": "assets/css/0.styles.babf4f3a.css",
    "revision": "1ffaa88bd060c60b405b6343a8f3d001"
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
    "url": "assets/js/11.3eb93ca5.js",
    "revision": "ddeba442b60809fc3c415fb8bcec5b9f"
  },
  {
    "url": "assets/js/12.b15432a8.js",
    "revision": "5345ab819a05999791ecd195ae474966"
  },
  {
    "url": "assets/js/13.4dddf8d1.js",
    "revision": "78bf06c3788ccfe27ec08c6805781e9e"
  },
  {
    "url": "assets/js/14.15505d8b.js",
    "revision": "c453182893232982831342300a161371"
  },
  {
    "url": "assets/js/15.baecc900.js",
    "revision": "304362506c227d0c92d6779d241b73c6"
  },
  {
    "url": "assets/js/16.a137db1d.js",
    "revision": "1f5360dd33d87f86340b8dc97a454c51"
  },
  {
    "url": "assets/js/17.ec6e7059.js",
    "revision": "81749224957cb89ef11682b90dce6ff1"
  },
  {
    "url": "assets/js/18.5ec428c4.js",
    "revision": "444da9c1ba0bed4743a3243da4073c34"
  },
  {
    "url": "assets/js/19.b41f1830.js",
    "revision": "c1df12942dd26d54b03bb66d1d702686"
  },
  {
    "url": "assets/js/20.eaf307ef.js",
    "revision": "983aa9d65c5c68dcc94bef4e80c74b6a"
  },
  {
    "url": "assets/js/21.ac38b395.js",
    "revision": "553f711630ef650cd9f1d8a798944e14"
  },
  {
    "url": "assets/js/22.2587f5a2.js",
    "revision": "074711f8b201d7357e1790ca1eafadcf"
  },
  {
    "url": "assets/js/23.5b119ea3.js",
    "revision": "e21d3b94e736d0fa1087d70a4bd9aefc"
  },
  {
    "url": "assets/js/24.c6e3f2b9.js",
    "revision": "f1e0ceb0341eeb2a96641a787a9f019f"
  },
  {
    "url": "assets/js/25.3724807d.js",
    "revision": "6582138ef9427e71c767fc12728928af"
  },
  {
    "url": "assets/js/26.8663c66f.js",
    "revision": "2b1a67e5c950642558fd4573aa5871e4"
  },
  {
    "url": "assets/js/27.b6229533.js",
    "revision": "dd3866da9941fde692171245e2d63b69"
  },
  {
    "url": "assets/js/28.9652a139.js",
    "revision": "e13db7f1238d837733ed124fb937b709"
  },
  {
    "url": "assets/js/29.eb4c1729.js",
    "revision": "b055fea0b9ed496e9d613b5f5f866d9e"
  },
  {
    "url": "assets/js/3.be998e2f.js",
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
    "url": "assets/js/app.42359162.js",
    "revision": "e3bdc27721a5eadd866d81cfc8694d48"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "e61b303afc9ce12c2a1a1cc326191219"
  },
  {
    "url": "backend/docker/preface.html",
    "revision": "f1972f3d4cc124a2d574fffadde2bfb0"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "a9e9a106267e5a931ef31e11accef8da"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "a6c578acef1ec6eadcaf014018213d1f"
  },
  {
    "url": "backend/mysql/preface.html",
    "revision": "847e835d400aaf90a258ce24b2dd98bd"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "efde4927134d96b389ddfdbd6041f656"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "c2973bc7a210fe3a45f1fea9c91466b9"
  },
  {
    "url": "books/bookList.html",
    "revision": "a945d8f09f184ad866caa2a5fd45d74d"
  },
  {
    "url": "books/关圣帝君觉世真经.html",
    "revision": "ff884c8ce5d989f44cadce4b81ecf009"
  },
  {
    "url": "books/太上老君说常清静经.html",
    "revision": "5a845d0fdcbb7b355bb44213e4409abd"
  },
  {
    "url": "books/太乙金华宗旨.html",
    "revision": "0adc87fd0f8db4bb26e2d734230a8a8d"
  },
  {
    "url": "books/素书.html",
    "revision": "1f7bfb7f10206aaf96c17ed95f03d680"
  },
  {
    "url": "categories/index.html",
    "revision": "f3cbfe529217909d7bbb19529534ed64"
  },
  {
    "url": "categories/传统文化/index.html",
    "revision": "f19784a2a86f9c1086c5204ac1f95792"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6acd73dc3f110d3cc79667623ba6c7a7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "6a94134e9306f2fec12e09b5a51756e9"
  },
  {
    "url": "frontend/vuepress/preface.html",
    "revision": "76adeeba3045ca57dacd892c9181c27a"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "e7fe62461c0724d3ef34022d1c30c12f"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "7f8fd04bda3b0887fe96f447f6898194"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "d60076dbc0969e52a49db0398069f1ec"
  },
  {
    "url": "index.html",
    "revision": "f47123096b94d0632b1024a106d857a8"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "9d3d1995d81ff983cd69116315bf03ce"
  },
  {
    "url": "tag/index.html",
    "revision": "6ab2b87bd2f6721237190db9d2a64cee"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "e7756e4c6551b95bde3652ca62aa814e"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "df3abfe142fee859e482b92d6e0087b0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "27108bb855de26fdf772e0f6622d88dd"
  },
  {
    "url": "tag/微服务/index.html",
    "revision": "d105304e39cd3a9040c420f94241e266"
  },
  {
    "url": "tag/道/index.html",
    "revision": "b49e26ad14d52c94069c32f464f6e411"
  },
  {
    "url": "timeline/index.html",
    "revision": "16950123184101d394d3f8d32ee6d127"
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
