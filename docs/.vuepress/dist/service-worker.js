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
    "revision": "f02d4392d42601ee7cbc3c5dfc00df79"
  },
  {
    "url": "assets/css/0.styles.f198e341.css",
    "revision": "610d552b022c35e8e836116b4d637adf"
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
    "url": "assets/js/1.aa75afaa.js",
    "revision": "1ed2626ddb4df54d6081a1afbb6f503a"
  },
  {
    "url": "assets/js/10.61ab8653.js",
    "revision": "08bfdbbd3d206d1ec076c9cec63edb71"
  },
  {
    "url": "assets/js/11.6bf750f4.js",
    "revision": "04ccc6488c0dfe81e36b0702e30c75ff"
  },
  {
    "url": "assets/js/12.6a003afa.js",
    "revision": "9ebdb378e59a67ff025f208d7eb0233e"
  },
  {
    "url": "assets/js/13.dcfc4e4c.js",
    "revision": "6879c0d06003dc4fb932b9895f8d1fa6"
  },
  {
    "url": "assets/js/14.a19d93bc.js",
    "revision": "7d6d784626aba27d514f013d15f1a4aa"
  },
  {
    "url": "assets/js/15.57289fff.js",
    "revision": "afe5188fdf68b42aa18d75aaefec89e6"
  },
  {
    "url": "assets/js/16.945c4a85.js",
    "revision": "08f6001fd87ed8875f232e9909814a0b"
  },
  {
    "url": "assets/js/17.e685c0c7.js",
    "revision": "f87de450532d3d960893be180f5999f5"
  },
  {
    "url": "assets/js/18.50bd04cb.js",
    "revision": "62a9bb232df0cd1bb431b9ed912892a6"
  },
  {
    "url": "assets/js/19.ac236a9a.js",
    "revision": "fc82b74c0aaa883021171917be9a50f0"
  },
  {
    "url": "assets/js/20.9870ccb5.js",
    "revision": "a70c556d97ab282d5b0167962f67394d"
  },
  {
    "url": "assets/js/21.140b0ac0.js",
    "revision": "2df09440ff584396b7618a285e38aacb"
  },
  {
    "url": "assets/js/22.e2b5562a.js",
    "revision": "86b7932469092dd81947ecc1271186ae"
  },
  {
    "url": "assets/js/23.b6b22f21.js",
    "revision": "c38266b7593ba08686a2eeabb02fe095"
  },
  {
    "url": "assets/js/24.498a22dd.js",
    "revision": "6cafacc929efc247f8b85d5fcdee6852"
  },
  {
    "url": "assets/js/25.b484b817.js",
    "revision": "5b883918160a91d5e73ae9ca95695009"
  },
  {
    "url": "assets/js/26.a48c93b0.js",
    "revision": "ed67c58ecf463c5476b84a4c6e26bae4"
  },
  {
    "url": "assets/js/27.ae971664.js",
    "revision": "821458ad74eacd14ec4aeb2ed680ed1c"
  },
  {
    "url": "assets/js/28.7f7ba99b.js",
    "revision": "3b19c7f42130bf5060a7daca06891561"
  },
  {
    "url": "assets/js/3.1e8b4dd2.js",
    "revision": "2ae020654eaf5286d82d6a71083efe77"
  },
  {
    "url": "assets/js/4.25f4afe2.js",
    "revision": "4d2c834166bf9080d857c13e0cfdeeea"
  },
  {
    "url": "assets/js/5.7b374003.js",
    "revision": "22b4943ed2a860d9e524ebc936057b88"
  },
  {
    "url": "assets/js/6.744e45ba.js",
    "revision": "7c59f3288aab67b1d9d100d7bccb93d1"
  },
  {
    "url": "assets/js/7.5f5edc03.js",
    "revision": "32a69e23de80a0cda58b9cc85b4066cd"
  },
  {
    "url": "assets/js/8.2552e98a.js",
    "revision": "8c738a6b5476501699dd54e78497f1f9"
  },
  {
    "url": "assets/js/9.511e7c05.js",
    "revision": "98b78cf18ccc8e666e1aefa060914918"
  },
  {
    "url": "assets/js/app.a5b5dabc.js",
    "revision": "81b281046739b757c0cdeddd9d2e6fad"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "75fb8726c71a20094d68ec4c6892bea4"
  },
  {
    "url": "backend/docker/preface.html",
    "revision": "cbc8728e2470fd70bdd5b1777e0f3e2e"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "b8d22458802e7c373a8ac415bd90ce11"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "df320c72c827022760431d1ea72962e9"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "d69b933faca5e584caa49710710c6fe7"
  },
  {
    "url": "backend/mysql/preface.html",
    "revision": "309a5826d0cd89e948c2a4e8f73e4b95"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "9239a1a701bce94985280076552e2356"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "7c56a0086b3bc4640cdecf8bf7cb7773"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "7dd3fbddf16ee0ea32cd3bef8dfa298e"
  },
  {
    "url": "categories/index.html",
    "revision": "8905e50794a707b612f93056830548b7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "136eafaa431a081cec8eaa0ce642fea8"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "f0503ce341e9f084265b7a85fc5d4b0a"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "8b01c8e6ab3a354276e5656ac8f8b604"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "a7a1c3b19e439c316025422b4ca78b25"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "1ac63e501ca51c190a1cf0a9f824a7d2"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "23767bf9ffc5651cfeee21077146eaf8"
  },
  {
    "url": "index.html",
    "revision": "5e66721f9a695ee75c7416e2c7ee9aa2"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "16dc9f279968b34b45d92edc37346217"
  },
  {
    "url": "other/treeholes.html",
    "revision": "682e47822c528863fe91e8b4ef777f2f"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "eb30cd31905b65c57f6756d5ab569021"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "485772b2939b2995484f5b78aeb69476"
  },
  {
    "url": "tag/index.html",
    "revision": "f9271d8ad05bce87f75afc88725a07d9"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "9541abc086228e34872f70250fa41d3d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b654191c3eddca965be9cbedc3a93120"
  },
  {
    "url": "tag/工作/index.html",
    "revision": "7cae5f5d69fcab20d22bec9a656ad9d5"
  },
  {
    "url": "tag/微服务/index.html",
    "revision": "95eaae8e8d1813332b1e52dd8a20f686"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d2a8bd0985420362e52cdcdaa4a759e"
  },
  {
    "url": "tool/git.html",
    "revision": "44c752238b00fe9b7754787036b5fcbe"
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
