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
    "revision": "4dbd910eab152f7332dacdb637ae8a7d"
  },
  {
    "url": "assets/css/0.styles.8c057482.css",
    "revision": "b7e3ec1256098c69fd754a8c566f5aeb"
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
    "url": "assets/js/10.b1bf65d3.js",
    "revision": "4ccaee5b541e249415b216ebe28dbcd8"
  },
  {
    "url": "assets/js/11.b8124c47.js",
    "revision": "9e4690d92b5b78b6613e67111cf735d3"
  },
  {
    "url": "assets/js/12.11e7be5d.js",
    "revision": "a1c3cf15f64ec09669d32c1326471f6a"
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
    "url": "assets/js/15.cc8dafe4.js",
    "revision": "106b8dff0f4ae754e7dc06b430dbc85f"
  },
  {
    "url": "assets/js/16.c05edc6d.js",
    "revision": "f8ba8bb6dd38bf9aec2609fbc543434d"
  },
  {
    "url": "assets/js/17.302a4592.js",
    "revision": "2bcdeabbfba9b34cddf677b4a2524902"
  },
  {
    "url": "assets/js/18.eac292de.js",
    "revision": "c042d45ab5e66e530915e14c04f9917f"
  },
  {
    "url": "assets/js/19.507f6ea8.js",
    "revision": "dc76f1864f8b5ac436fd8c9c8eeb02e4"
  },
  {
    "url": "assets/js/20.20bc74a7.js",
    "revision": "6f2c2c62c66e3fc34b90aa58c0ad9dc7"
  },
  {
    "url": "assets/js/21.33c5fc84.js",
    "revision": "020d003798ec0b21f234674a49b48f23"
  },
  {
    "url": "assets/js/22.2bf035bb.js",
    "revision": "a2e2cda655f80772e3666fbe0743055f"
  },
  {
    "url": "assets/js/23.b54073bd.js",
    "revision": "8e08a53fbe0027e41298fad0a3ae25f2"
  },
  {
    "url": "assets/js/24.eb410e11.js",
    "revision": "ea863ed65ad45a08722c48479b0ad2c9"
  },
  {
    "url": "assets/js/25.70805526.js",
    "revision": "a90aa76ac24ed77b36eb25e2720e9c9e"
  },
  {
    "url": "assets/js/26.24ff7702.js",
    "revision": "b481c8e9bf1e8e7860a9f47347edd95d"
  },
  {
    "url": "assets/js/27.62dfd4e1.js",
    "revision": "bc9d2275d979b4adeb96faee42869747"
  },
  {
    "url": "assets/js/28.f6505398.js",
    "revision": "e068800dc33d47c5e7b65b4cd45ddc8a"
  },
  {
    "url": "assets/js/29.39703386.js",
    "revision": "5e697fc81f04cb78c684677e27f096d8"
  },
  {
    "url": "assets/js/3.e813f80b.js",
    "revision": "3a84dd23044dc7933e1ee74a9eacc6bb"
  },
  {
    "url": "assets/js/30.0e92d357.js",
    "revision": "bc43f9b1f12602a5c9f89498052af52d"
  },
  {
    "url": "assets/js/31.fa573afe.js",
    "revision": "7fb029e4acbb64189cfc1e66f1928727"
  },
  {
    "url": "assets/js/32.87d2cba9.js",
    "revision": "a28b96656de53c51620b8551df233571"
  },
  {
    "url": "assets/js/33.df447ec1.js",
    "revision": "c96d948e1652ace8b2d63619d29d90c3"
  },
  {
    "url": "assets/js/34.a7f301de.js",
    "revision": "c0b26c3db13b73a427afd8f553afbd0c"
  },
  {
    "url": "assets/js/35.b5fe6719.js",
    "revision": "64c548ebf862f6d109ec4ca08bd12130"
  },
  {
    "url": "assets/js/36.0196dd84.js",
    "revision": "f14d54e2f8ef276a295681356d626b4e"
  },
  {
    "url": "assets/js/37.c1a44ad4.js",
    "revision": "4525c17346818589bad31e81a2d4db7b"
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
    "url": "assets/js/app.92854c3e.js",
    "revision": "6663115f0f357738e779377185b0510f"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "73956b356fed111c65efeb14155b917a"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "e935511c142c12f9c519bb9bbc7c4098"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "adc2975b585ce8ef1022d38ddc3d7a39"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "242394cd3f1e76af470b8bdf862404d2"
  },
  {
    "url": "backend/work/ceph.html",
    "revision": "2d73635a88d54ecc9a4b77beed0c7d3c"
  },
  {
    "url": "backend/work/easyexcel.html",
    "revision": "1e30b7db239b315ac548569fe45caca0"
  },
  {
    "url": "backend/work/kmz.html",
    "revision": "5b03b0e46020b6f3eb07a0c1516b7416"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "a0d2de12a9aaf341090a1cfd739c3da7"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "88882dc1d312901867d84e772e3dd5de"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "333b02bcbc2023f938c68e3d7de86c56"
  },
  {
    "url": "backend/work/webservice.html",
    "revision": "0d80ae15504cda411406f338166808d2"
  },
  {
    "url": "categories/index.html",
    "revision": "31d18da3ab04281355f2df80fa8b22e5"
  },
  {
    "url": "categories/人工智能/index.html",
    "revision": "adaa178f2c538a24c2e69148f6a1fe24"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "704105fe32df73f63159dc05e8c71a1c"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "fe2ae97b985a0ca5467a463a87cbb5b0"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "77e46f819d7582cd15a99afa7b17c7cf"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "5336d42979c9d51a9e234a8e86b8e5ae"
  },
  {
    "url": "frontend/vue/jsx.html",
    "revision": "ad08aa25928f688a8cc81ba6bb8fce3f"
  },
  {
    "url": "frontend/vue/questions.html",
    "revision": "44bafbf00274023733a0d26f20aacef6"
  },
  {
    "url": "frontend/vue/stream.html",
    "revision": "5785d575187fa42afd846d5c1c760364"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "82ffc3f2b3ee468b82c7e45d5547f406"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "0435f4bdbb84db8d2832e39060afa786"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "b652f3d87ffac54e13cc110f43f353a5"
  },
  {
    "url": "index.html",
    "revision": "922339fb650e7e3667af1a2cb9721c4a"
  },
  {
    "url": "llm/basicOne.html",
    "revision": "613e80d65d649276a057d0de24ebd6ca"
  },
  {
    "url": "llm/InternLM2.html",
    "revision": "bee70746b8cdda3fcc123326ed0b39bf"
  },
  {
    "url": "llm/ollama.html",
    "revision": "3e109ba3df539c5bb7f9e0d312daa03b"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "3ac498ddd9f3f0bbbd569ca5e3cf0d9d"
  },
  {
    "url": "other/navigate.html",
    "revision": "5e7a4aa12e0a6694ab403ad5c6efcb4f"
  },
  {
    "url": "other/treeholes.html",
    "revision": "9cf529dafaf00cd35183d549fa9e0c48"
  },
  {
    "url": "tag/CentOS/index.html",
    "revision": "2e4acdb5221f23cd81fe532b1fae371f"
  },
  {
    "url": "tag/Ceph/index.html",
    "revision": "c688bfaf3e5c2b080297525711ccbe4c"
  },
  {
    "url": "tag/dji/index.html",
    "revision": "48a1143e361d23b10f9683a0467ab330"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "a0760f5dccbc7b1461ca6bc3de8727bc"
  },
  {
    "url": "tag/EasyExcel/index.html",
    "revision": "11b146ac37ba2c9ad1a284cec2d8ade2"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "8ce8b90fb83ef4b32b9f636bc5cd9cb4"
  },
  {
    "url": "tag/index.html",
    "revision": "30026d3fc5fb58a2f2c8a27b5af8177b"
  },
  {
    "url": "tag/LLM/index.html",
    "revision": "9f94b5a194475ac37d2807ffc03200b1"
  },
  {
    "url": "tag/Micorservice/index.html",
    "revision": "a7cc5fbc9fbd7390ed0a29eaf97154cc"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "c7cc0def499b48202427656c2befdeb1"
  },
  {
    "url": "tag/OnlyOffice/index.html",
    "revision": "4bd7755dbb12fede1faf9dddd38a9840"
  },
  {
    "url": "tag/Poi/index.html",
    "revision": "cde98853341f576aa5e0313a08f53386"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "5bacc0e07357eff2362232672e8bdf7e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "0eb9de5963fe55237c69604eaf76bcd3"
  },
  {
    "url": "tag/WebService/index.html",
    "revision": "79be49e97a4b8190c0b2365b89f53748"
  },
  {
    "url": "timeline/index.html",
    "revision": "78286550e38578f5c4a82850a406be02"
  },
  {
    "url": "tool/centos.html",
    "revision": "6c2033896a80817fb83ec42d54d549b2"
  },
  {
    "url": "tool/git.html",
    "revision": "808d6534d5386cd16f1c5ef5055ebbd2"
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
