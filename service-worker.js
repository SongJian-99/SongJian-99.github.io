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
    "revision": "c6640cb0c668c8d95a6404f83b7fa157"
  },
  {
    "url": "assets/css/0.styles.b719f836.css",
    "revision": "e45a07777abaef53202776bac3bfc191"
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
    "url": "assets/js/11.1f90c46d.js",
    "revision": "d5868c7d5a7f1c6fc92e046c8e3b07dc"
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
    "url": "assets/js/16.85e7516d.js",
    "revision": "82b6390270835ce98475440dd9478d1d"
  },
  {
    "url": "assets/js/17.302a4592.js",
    "revision": "2bcdeabbfba9b34cddf677b4a2524902"
  },
  {
    "url": "assets/js/18.8b4265f3.js",
    "revision": "fd9a0eeb428cd6ca2a49ec55bab71f36"
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
    "url": "assets/js/22.31be5792.js",
    "revision": "a91f42ac65a39b97e0f9c95cf87f27f8"
  },
  {
    "url": "assets/js/23.14013227.js",
    "revision": "b79e78cf4a564ba052b1ad8503ac80b7"
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
    "url": "assets/js/26.82903985.js",
    "revision": "0d1ed8199b2c5b052a45ba74d7d15540"
  },
  {
    "url": "assets/js/27.cafb3475.js",
    "revision": "ed27fe236a2f3bd5eda8445344408e38"
  },
  {
    "url": "assets/js/28.fb131c5b.js",
    "revision": "7f6ce6dc7519c8cfb6d587e9157ced6e"
  },
  {
    "url": "assets/js/29.06934f8a.js",
    "revision": "74edff9dac69bf95788bc7c12ea6288a"
  },
  {
    "url": "assets/js/3.e813f80b.js",
    "revision": "3a84dd23044dc7933e1ee74a9eacc6bb"
  },
  {
    "url": "assets/js/30.af0d6d7a.js",
    "revision": "5462ecab80ef1340d5b5901a72b21b5e"
  },
  {
    "url": "assets/js/31.7ac92beb.js",
    "revision": "1156dbec5d06b47356210625569f4a9f"
  },
  {
    "url": "assets/js/32.00fe649e.js",
    "revision": "91e7c82dd5c802457bb40c531997ebd3"
  },
  {
    "url": "assets/js/33.9fdda165.js",
    "revision": "a99b42c03bdc70564b884aca9d82ce2c"
  },
  {
    "url": "assets/js/34.852ac94e.js",
    "revision": "faf50668b42e6cd41ad5e97a799e94f0"
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
    "url": "assets/js/app.d116a486.js",
    "revision": "24c5a1b10409a073b5790b8f3823b1cc"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "52d6a98b430714601ba985db4b2af929"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "63821b41d1b6894db51a1c379cdfe4b5"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "68f08b0e5626bb95328952139c8fe4b2"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "bee672591507913b012773f2f3e55e4b"
  },
  {
    "url": "backend/work/ceph.html",
    "revision": "102769901b4de03989ed34d323589edc"
  },
  {
    "url": "backend/work/easyexcel.html",
    "revision": "d08b1ee0dfd101c8f8d1b675957e63e9"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "ffa3764e6be5e05d1d2fc7e097aba75f"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "2f17538d565b9b253cd76438f75dadb4"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "1d737b0b13ed1e4489b592617472963e"
  },
  {
    "url": "backend/work/webservice.html",
    "revision": "959c8e2480b741bcc4ecfa2e1d6fd634"
  },
  {
    "url": "categories/index.html",
    "revision": "4efc76929e43fe294761f298237cd282"
  },
  {
    "url": "categories/人工智能/index.html",
    "revision": "62a3022710d4812084c2618bce6c2054"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a3ce80b8bffac97aa746ee29afa9bbf2"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "993f9abeb216634bd94ccc5815cb916a"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "acb6337a61517fb9cb8e3454d0805ed0"
  },
  {
    "url": "frontend/vue/jsx.html",
    "revision": "fd94750b3fa60e1dbc3cf49fa5f12b79"
  },
  {
    "url": "frontend/vue/questions.html",
    "revision": "fe293e642e43e4a42f8ee4ff4848aed5"
  },
  {
    "url": "frontend/vue/stream.html",
    "revision": "36b735b6526d56e6e93c87b33313eb42"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "7e77cc2a3bbeb5695010f0ebbc5f3c77"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "dbe3325be367945b7f9813efd6fdeee1"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "8a5251be770a864f4c8d3c830b4ba04f"
  },
  {
    "url": "index.html",
    "revision": "86ba47e09686138600a142ac838541af"
  },
  {
    "url": "llm/basicOne.html",
    "revision": "523a233138aa2bc7a4310e78ab8f1232"
  },
  {
    "url": "llm/InternLM2.html",
    "revision": "7f493b3b2d8106dd166acb5b87a96e58"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "83b9ff475f88cf546f5f4810d61cd5d2"
  },
  {
    "url": "other/navigate.html",
    "revision": "04dc307538b0cfef5ee27b459ad5d883"
  },
  {
    "url": "other/treeholes.html",
    "revision": "8650109f47305761a314c29fbfb7dd17"
  },
  {
    "url": "tag/CentOS/index.html",
    "revision": "8233622e0368d2c0cdaebcd7cf676608"
  },
  {
    "url": "tag/Ceph/index.html",
    "revision": "9c9d592170744fe71ae910fd5b9481b0"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "40f7b80a6c01d64f4feb7169f9739f99"
  },
  {
    "url": "tag/EasyExcel/index.html",
    "revision": "c57d55f1725afbb35ae3950513b165d6"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "63528e55d9a9a43214e3a4e0e6b1cd0b"
  },
  {
    "url": "tag/index.html",
    "revision": "cc87bf10b0c06aa180bcf74dd08abfd5"
  },
  {
    "url": "tag/LLM/index.html",
    "revision": "28c1b8ad23e7b307f7105f990ca7d9c3"
  },
  {
    "url": "tag/Micorservice/index.html",
    "revision": "742d6fe76ba30f8f36413de413a8de97"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "bae7b8c64b25f89d733e2b98827cdc25"
  },
  {
    "url": "tag/OnlyOffice/index.html",
    "revision": "a5e4573147ab8fb20c02b5bc55d46cd4"
  },
  {
    "url": "tag/Poi/index.html",
    "revision": "58592994bf5abcd29ac4de92c25fad97"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "664d84487731cb5dd3a03e3be61dec4d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d2f4b7f5fac84b5c8f4faee070deda15"
  },
  {
    "url": "tag/WebService/index.html",
    "revision": "83d32eaca5d45d57ef35985719ec7dcd"
  },
  {
    "url": "timeline/index.html",
    "revision": "31a7c8b4bc761202a7442594495d8ece"
  },
  {
    "url": "tool/centos.html",
    "revision": "43d66e9b850459bf3637ade7d4fae136"
  },
  {
    "url": "tool/git.html",
    "revision": "1f7778f82ec87fb86e0fe22cb86ae5d5"
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
