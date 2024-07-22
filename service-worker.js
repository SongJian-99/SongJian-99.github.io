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
    "revision": "98a754c60cd0eeb48e3e03f2f5c2da38"
  },
  {
    "url": "assets/css/0.styles.96736d8f.css",
    "revision": "33ad8753a48008e0d59145c6d7f0411b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
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
    "url": "assets/js/1.6ec1c01d.js",
    "revision": "32567e4ba974a53159da47ec40fbd371"
  },
  {
    "url": "assets/js/10.01b83b93.js",
    "revision": "a7bd7aac03aadc2ed06e4d564daf63e1"
  },
  {
    "url": "assets/js/11.8afa4a41.js",
    "revision": "1190b33008e5cf06be9190a234faba28"
  },
  {
    "url": "assets/js/12.f16ee599.js",
    "revision": "327c4eb3d20b384f83cd62f0172f28f0"
  },
  {
    "url": "assets/js/13.37e3b0d7.js",
    "revision": "464a62eaa48aa231f2bc7d8c1d8618ad"
  },
  {
    "url": "assets/js/14.ae2c20cb.js",
    "revision": "3f6f640185a22dd4dff13d5df274f3fd"
  },
  {
    "url": "assets/js/15.5b8e532b.js",
    "revision": "b943e8a8782ef1eb99b94a70f8e45551"
  },
  {
    "url": "assets/js/16.f39a71cd.js",
    "revision": "63a73ba9bedfbe66dec0bcdd3d246d9a"
  },
  {
    "url": "assets/js/17.91fbb30c.js",
    "revision": "26a07f87b3c4395654a273ed521932df"
  },
  {
    "url": "assets/js/18.9d9b146d.js",
    "revision": "c48df08ce6b89e9b1a7f50cb8e468b60"
  },
  {
    "url": "assets/js/19.776065f4.js",
    "revision": "2ddd9de563a446a52cc1010ac0df1110"
  },
  {
    "url": "assets/js/20.2be26368.js",
    "revision": "b52e624c3fde1c167f1e499255ccbd00"
  },
  {
    "url": "assets/js/21.e1260597.js",
    "revision": "b85e025aec10ab68335e69cebecfb1a8"
  },
  {
    "url": "assets/js/22.86be56ed.js",
    "revision": "b4bd5c095711363bb3121d9de5ae4db2"
  },
  {
    "url": "assets/js/23.79d6ed9c.js",
    "revision": "697c302e327a2ec0079209e9547fc1a4"
  },
  {
    "url": "assets/js/24.5eac5d09.js",
    "revision": "cc9ced65ed7a05f7ab5c22cd9151e63a"
  },
  {
    "url": "assets/js/25.e1cdf508.js",
    "revision": "6c1ccb8b4f327be5faf81372621c186a"
  },
  {
    "url": "assets/js/26.a8a13d98.js",
    "revision": "cf8a3bddcdebba7c0233a0eb67e42c82"
  },
  {
    "url": "assets/js/27.87097802.js",
    "revision": "91e354466c3c9a7757ad8556e90c7352"
  },
  {
    "url": "assets/js/28.fb131c5b.js",
    "revision": "7f6ce6dc7519c8cfb6d587e9157ced6e"
  },
  {
    "url": "assets/js/29.d81a0b90.js",
    "revision": "95c9815a91bb50b4143d7e644cb0e5f4"
  },
  {
    "url": "assets/js/3.e813f80b.js",
    "revision": "3a84dd23044dc7933e1ee74a9eacc6bb"
  },
  {
    "url": "assets/js/30.053960d5.js",
    "revision": "9f457833444ea0aa197f688fa9aca665"
  },
  {
    "url": "assets/js/31.a33b0e65.js",
    "revision": "d44d16063899eeaf956cf1209a03ce77"
  },
  {
    "url": "assets/js/32.00fe649e.js",
    "revision": "91e7c82dd5c802457bb40c531997ebd3"
  },
  {
    "url": "assets/js/33.055887ad.js",
    "revision": "c81992be6524c0167a839bd52c4b9730"
  },
  {
    "url": "assets/js/34.0141c74c.js",
    "revision": "34195ffe163bcf99f7fea0f2b7c6bcca"
  },
  {
    "url": "assets/js/35.1a1e60fe.js",
    "revision": "4c432e13f82aec3e77c25b3c23a311b1"
  },
  {
    "url": "assets/js/4.632b9026.js",
    "revision": "f77ef8f54b6c7b9d7842a62b05e5888c"
  },
  {
    "url": "assets/js/5.9f45b601.js",
    "revision": "149005ea853a2358b9afa5d74eabd185"
  },
  {
    "url": "assets/js/6.51772013.js",
    "revision": "c336222be2e1f4dc6d422558fb960d2a"
  },
  {
    "url": "assets/js/7.c914d774.js",
    "revision": "d044abd2545294fd17c136b7fd62ddef"
  },
  {
    "url": "assets/js/8.d453e8bc.js",
    "revision": "f64c6d5d83676933ac066266c9d3692e"
  },
  {
    "url": "assets/js/9.2b9448d3.js",
    "revision": "aadd2055d4ed1ca790d6f62067a33354"
  },
  {
    "url": "assets/js/app.421720f1.js",
    "revision": "113369b65dc5cb96a9e55c7917d05c42"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "05fdc0e994126da14d0b738d4ba5ebfd"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "70af39c89f42c02bd0bc28d4c412209b"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "0cae6fbd4e00bcdfaac8589046cd1fda"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "ce402cbe77c1aad75dd7acdfe211c181"
  },
  {
    "url": "backend/work/ceph.html",
    "revision": "628d5a6e28ad1149c4f8a0e13f08123e"
  },
  {
    "url": "backend/work/easyexcel.html",
    "revision": "bc4e79b4b3fef6c24b2d953c2777dfeb"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "8a3561b457517386c412dbd0e2ed0122"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "6dcf1d57d4486ff58d9a0c591bcc178f"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "de4f4187be8c0804b5b38bbea520aad7"
  },
  {
    "url": "backend/work/webservice.html",
    "revision": "87981b0f7eafc10e784f8e68c43323d3"
  },
  {
    "url": "categories/index.html",
    "revision": "6dbb899aac16d7f60f20aa2671d95837"
  },
  {
    "url": "categories/人工智能/index.html",
    "revision": "afcad791873b50818afd807509921f20"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c5774e2b030a475e4db0b1bae3d64f6a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "60b4f1bb33a44053c8aa09a910c9aef5"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "f486ab61de2ac1c1f9550cb720f06ae6"
  },
  {
    "url": "frontend/vue/jsx.html",
    "revision": "91a58ed16d1feeccf876140e926f7323"
  },
  {
    "url": "frontend/vue/questions.html",
    "revision": "4eb873d7a8adf5e78045df9cb273345e"
  },
  {
    "url": "frontend/vue/stream.html",
    "revision": "882380ada606f0d70a05e729dba272a5"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "5549a87f6c746786ba40a7f5785c7dc7"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "5b6be5a82f44f5146f70c8437fea67ad"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "875306889aa0539d1a25e8d69fcd07a1"
  },
  {
    "url": "index.html",
    "revision": "20ad0750bf0b05d0e09d1e62feff5452"
  },
  {
    "url": "llm/basicOne.html",
    "revision": "329ec186f51c9c1cdc32bca58ca9c078"
  },
  {
    "url": "llm/InternLM2.html",
    "revision": "96b4281448f8020e4ecf6eef6f285998"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "21cd7555dfbc74f2a7d391bcd30bd3c0"
  },
  {
    "url": "other/navigate.html",
    "revision": "88e222bb3627f78f627139533b2be5df"
  },
  {
    "url": "other/treeholes.html",
    "revision": "3a0b5f8adc9af5a8b600c6da27f175e7"
  },
  {
    "url": "tag/CentOS/index.html",
    "revision": "75dd9f4fa4128b231d32b54f405ec956"
  },
  {
    "url": "tag/Ceph/index.html",
    "revision": "e75e5b942a41bc957ab0c6fb6515ec0d"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "8ca2442fb79d6b125700af893cfb5897"
  },
  {
    "url": "tag/EasyExcel/index.html",
    "revision": "62c921fb538aa0890791a11489956a7d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "3d555d0868ce5874822ac2206b6d8153"
  },
  {
    "url": "tag/index.html",
    "revision": "941fc6187405407c72e15f5472b4f23d"
  },
  {
    "url": "tag/LLM/index.html",
    "revision": "d2c91ad0a95c7f97a7f28d1f9eb51eb6"
  },
  {
    "url": "tag/Micorservice/index.html",
    "revision": "662f80f31f81c37861c422a34a9f909e"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "8f7bec4718b5afa827fd04e4795787ee"
  },
  {
    "url": "tag/OnlyOffice/index.html",
    "revision": "c2d9d83887acb3b79f1e1c1a9cd40e92"
  },
  {
    "url": "tag/Poi/index.html",
    "revision": "a291c58a46b1340931466228bf13f5a5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "141271a94dbb9b8a1c87bf3a74569bfa"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9b482c27aa5f0188180f7d19a673b631"
  },
  {
    "url": "tag/WebService/index.html",
    "revision": "c757cf490bf73144fcc40c7d2a862b08"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7a75a3b55d2caf5338ff954b90870bd"
  },
  {
    "url": "tool/centos.html",
    "revision": "78b088b29c3b741e19fe232e401d4344"
  },
  {
    "url": "tool/git.html",
    "revision": "f16f30d7901c61c4c522f6308ad4b4e3"
  },
  {
    "url": "wechat.jpg",
    "revision": "e27786214c89386806ed91c5b088f90e"
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
