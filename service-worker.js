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
    "revision": "6d194c7686b2fc238eb7638bcd5427a1"
  },
  {
    "url": "assets/css/0.styles.6b4dc21a.css",
    "revision": "7cb494c88e037a55126762c6003e3d51"
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
    "url": "assets/js/1.ccac6c66.js",
    "revision": "c334bd97abd8d55dbd85617ea5b32776"
  },
  {
    "url": "assets/js/10.002a0ba0.js",
    "revision": "76e4da0625eb0a76ad1ad23f3bcfe91b"
  },
  {
    "url": "assets/js/11.a68247c0.js",
    "revision": "abcca7111a1019a15284248e00e3843e"
  },
  {
    "url": "assets/js/12.a388bfd4.js",
    "revision": "1790840c7f50af4c975a6cbac32af47a"
  },
  {
    "url": "assets/js/13.10184098.js",
    "revision": "43c365438880969c4584f5ca26cf4e8b"
  },
  {
    "url": "assets/js/14.6fd4ea8c.js",
    "revision": "6404774ef05b8c4c6d831e0278e55e92"
  },
  {
    "url": "assets/js/15.7c184a67.js",
    "revision": "e39b7278d19304a3f8cb532281b4923d"
  },
  {
    "url": "assets/js/16.4230f028.js",
    "revision": "73f624e558b70ab0d8f567a4320556ff"
  },
  {
    "url": "assets/js/17.0d41bdc2.js",
    "revision": "e8ee655d2e44ad331d9915d97309e0c9"
  },
  {
    "url": "assets/js/18.738f28a9.js",
    "revision": "f399c235529f53e796ba9b8a3b9a02c7"
  },
  {
    "url": "assets/js/19.b43808d1.js",
    "revision": "508f07febdebe27dc8b3cdd2621379a6"
  },
  {
    "url": "assets/js/20.f9ab1e10.js",
    "revision": "b5526fa21e87523f1599242cc5afd66e"
  },
  {
    "url": "assets/js/21.2910fef1.js",
    "revision": "5f4323b6a2105d93cfc80e6de24b72e6"
  },
  {
    "url": "assets/js/22.9634512b.js",
    "revision": "59014fe6929d9b25f3484d711c3c4980"
  },
  {
    "url": "assets/js/23.5993898b.js",
    "revision": "b080ce6a8e8465b769d405a0990248f1"
  },
  {
    "url": "assets/js/24.545c0d85.js",
    "revision": "d5619858d5d5a7bff77016ad9351291b"
  },
  {
    "url": "assets/js/25.17199898.js",
    "revision": "66b07799e214a5decb1a3a0b2e589103"
  },
  {
    "url": "assets/js/26.257a46e4.js",
    "revision": "6dcf5418a40fef90f2a7a1803f0dbabb"
  },
  {
    "url": "assets/js/27.fe4324a0.js",
    "revision": "0873f93889423871f1b8cf461dccb3b9"
  },
  {
    "url": "assets/js/28.ee879ac5.js",
    "revision": "c13415e1d4ca3c64d5a07cdb9a1b8bdd"
  },
  {
    "url": "assets/js/29.8b49e071.js",
    "revision": "d04a53f2c6639edecbcfa6260e17e26f"
  },
  {
    "url": "assets/js/3.085eef5f.js",
    "revision": "4a7a0d37d1aeb3a5af24c8d3e1ed46be"
  },
  {
    "url": "assets/js/30.2f0b6b04.js",
    "revision": "a686b68adbf434440ef00640516fdc63"
  },
  {
    "url": "assets/js/31.9f28dfd1.js",
    "revision": "4f52a383ba735a19a62e46ee90a7a8c5"
  },
  {
    "url": "assets/js/32.149374d0.js",
    "revision": "89dbec62b7dfcd235ece300e4e8452e0"
  },
  {
    "url": "assets/js/33.d0467628.js",
    "revision": "1b1fa7775329b7f183142b6ea614617a"
  },
  {
    "url": "assets/js/34.a8704d0b.js",
    "revision": "d5a72aac04374dc241eca51cd20d2c4d"
  },
  {
    "url": "assets/js/35.6f7d4eec.js",
    "revision": "fa76ea5ecc07e36df9767367052eb461"
  },
  {
    "url": "assets/js/4.843140f7.js",
    "revision": "58e882163c926e5e6646efd1564362a7"
  },
  {
    "url": "assets/js/5.b341fac8.js",
    "revision": "f5ccc3aab64e4aa785620576e505ba31"
  },
  {
    "url": "assets/js/6.d29847eb.js",
    "revision": "1787fc5c3af94cebbf38fdf619fb6f5d"
  },
  {
    "url": "assets/js/7.3350cb60.js",
    "revision": "7c8055e10dfd6bea4e038e2ca8591c04"
  },
  {
    "url": "assets/js/8.62e81a30.js",
    "revision": "f7f076c29addf3df51fcc888699ba3ab"
  },
  {
    "url": "assets/js/9.91a555a5.js",
    "revision": "e4dd2288324d67c360b94a5b1f2eb314"
  },
  {
    "url": "assets/js/app.f8432a29.js",
    "revision": "3ca878281820db1e93aa6ce8d40c0ab7"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "2b56a651fc71bee3f68bfd67db88230f"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "ad644062c84b4149e74463e5faf1c7e3"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "8403957d493d7fd2e98c8f1403f2f581"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "89af2b337d5fc820482afd69d7165e7b"
  },
  {
    "url": "backend/work/ceph.html",
    "revision": "9049695498a97be9fefc77602a62d0d6"
  },
  {
    "url": "backend/work/easyexcel.html",
    "revision": "56a5e3307cb857fdeb257b1420574976"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "518c04f7c78115c8a9041761dd6b2eb8"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "d25936fde8f160bc1ec7eeeb7e79ee44"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "016bd0d688bba1b10e40624329821056"
  },
  {
    "url": "backend/work/webservice.html",
    "revision": "5cdd2d98edc239e57abe12731ca83b40"
  },
  {
    "url": "categories/index.html",
    "revision": "4ff54f940e955d4ea9ea48c8b8450293"
  },
  {
    "url": "categories/人工智能/index.html",
    "revision": "20365c610578ea028d2682c4dd70e6ff"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9151d76c95031e0184b659a5e66bf899"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "728a7c75f9cf4c2cd381b802d7602ab7"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2aec389439b8d8a3edd8538879eaa28b"
  },
  {
    "url": "frontend/vue/jsx.html",
    "revision": "27487284b82b89922b2f466020f29046"
  },
  {
    "url": "frontend/vue/questions.html",
    "revision": "06624458f1ba437a827c84ef1ac35585"
  },
  {
    "url": "frontend/vue/stream.html",
    "revision": "4da7ccc4b5668294803135282e0ed5ba"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "6b590bf4c29be6195dc7383b47fd5992"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "9544221bbc60c43ab7898bea78351bb5"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "d1b41cc50fd4a3326c1151756fd5c7a7"
  },
  {
    "url": "index.html",
    "revision": "05c61b85a11e8b4ded0256e3d110e8f0"
  },
  {
    "url": "llm/basicOne.html",
    "revision": "6dfe7af7878d21b6b6d684466ea9fc02"
  },
  {
    "url": "llm/InternLM2.html",
    "revision": "a31d53501940ad5795f313a6afbc8780"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "2c130af959e22cac11ffeb603076f360"
  },
  {
    "url": "other/treeholes.html",
    "revision": "bad46f4236f3930665952c9906191341"
  },
  {
    "url": "tag/CentOS/index.html",
    "revision": "66c29a59a7ccc68666d1e28214311adf"
  },
  {
    "url": "tag/Ceph/index.html",
    "revision": "e3206c43b3ccf3bcd9abaf96f82d682b"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "1cd5d0d699fd9121b3524505f2de9322"
  },
  {
    "url": "tag/EasyExcel/index.html",
    "revision": "4af6594b47e9b9b2d5ff50e38966e73d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "88f89758211bf5413cb04d83a8fe0c45"
  },
  {
    "url": "tag/index.html",
    "revision": "b37271b78d11ec9bc273823446a9f95c"
  },
  {
    "url": "tag/LLM/index.html",
    "revision": "02123e9c832481a4bfa44bad8395261c"
  },
  {
    "url": "tag/Micorservice/index.html",
    "revision": "3a090d07a45e44538b2693f61c3c4212"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "a6843c132d1a5d9f394d9ea641c348cb"
  },
  {
    "url": "tag/OnlyOffice/index.html",
    "revision": "7d4650d94c1d7f1cb9c077bfd69df917"
  },
  {
    "url": "tag/Poi/index.html",
    "revision": "03a68a9ffeea909476452aab0586a3f0"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e67dada0d3d68820e71a711f60146a8c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "810f2482b49f740987d7cc0aa3b71668"
  },
  {
    "url": "tag/WebService/index.html",
    "revision": "1338b614d53f8944beb1de1a2a324cda"
  },
  {
    "url": "timeline/index.html",
    "revision": "b196910063f253e2230009b1c63c4830"
  },
  {
    "url": "tool/centos.html",
    "revision": "2ff62db44fe4d117fdaea9e411b5ebfb"
  },
  {
    "url": "tool/git.html",
    "revision": "22793cb4b58e57de92502d8a0bb9f258"
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
