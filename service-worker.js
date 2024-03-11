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
    "revision": "49fd583e178a33fa064bbb7c4641e50c"
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
    "url": "assets/js/10.507a9869.js",
    "revision": "abb649015e8c3b6c84a39e11935a1c3c"
  },
  {
    "url": "assets/js/11.6b190beb.js",
    "revision": "b1e122b410928c6214d2cc120668a2f9"
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
    "url": "assets/js/15.8bd1e0a4.js",
    "revision": "09360ac8294687a00e85555831015f51"
  },
  {
    "url": "assets/js/16.b92ce3f3.js",
    "revision": "05d62188886ff2a4915d6eeeb8007386"
  },
  {
    "url": "assets/js/17.0d41bdc2.js",
    "revision": "e8ee655d2e44ad331d9915d97309e0c9"
  },
  {
    "url": "assets/js/18.4db61f5e.js",
    "revision": "27f037805bbe7964abd93c89afc2b393"
  },
  {
    "url": "assets/js/19.829d5e36.js",
    "revision": "b615095013db26f116694540f0bd4f9c"
  },
  {
    "url": "assets/js/20.c6dba7fb.js",
    "revision": "e53988aaedc50323ecc90919392eef04"
  },
  {
    "url": "assets/js/21.d071a595.js",
    "revision": "cd89d24387c20032d58a7bdb48ab586a"
  },
  {
    "url": "assets/js/22.c313c222.js",
    "revision": "a2c7e83331ccad883a09db8adf587b5f"
  },
  {
    "url": "assets/js/23.5bcec180.js",
    "revision": "a77f6890f90ff90646977238547c9ac9"
  },
  {
    "url": "assets/js/24.d73b2a91.js",
    "revision": "9f5bfe8faa871e385c819fc3082a6f0f"
  },
  {
    "url": "assets/js/25.70909df9.js",
    "revision": "70c2914b9650016686e884719ca2c71d"
  },
  {
    "url": "assets/js/26.84b838d9.js",
    "revision": "4753a06f5e00eb685302344ee298fc1c"
  },
  {
    "url": "assets/js/27.2b4bf107.js",
    "revision": "63f33ea58b25a03122f29cb4609a7382"
  },
  {
    "url": "assets/js/28.e22f336d.js",
    "revision": "553755a3600256ecd5c492720438133d"
  },
  {
    "url": "assets/js/29.4a01c7c1.js",
    "revision": "7c0615395c65068ab3fab729df2fb96e"
  },
  {
    "url": "assets/js/3.085eef5f.js",
    "revision": "4a7a0d37d1aeb3a5af24c8d3e1ed46be"
  },
  {
    "url": "assets/js/30.c4ff56f0.js",
    "revision": "142ffc67789138567b84f4a570322a0e"
  },
  {
    "url": "assets/js/31.d03c6b1d.js",
    "revision": "088c2d796d4072b8be46912259ca807c"
  },
  {
    "url": "assets/js/32.b2fd6195.js",
    "revision": "5bde62ee310911cf0e7648293b3008ed"
  },
  {
    "url": "assets/js/33.37000c18.js",
    "revision": "2f52751d2b44b49551df3679de32ea35"
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
    "url": "assets/js/app.19e983bb.js",
    "revision": "cd94deb81e988c4b035b945102b0437a"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "fb56129a91919aaaa115c445840d2761"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "6ab53c404d04322b622d3dbb687f3c59"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "985eb11630a04d548ee9ca50054303b9"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "32eced13e614476c4b6cd495ef98b7e6"
  },
  {
    "url": "backend/work/ceph.html",
    "revision": "29b1b11b61bd1163fee226eda10e2ae5"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "f7abc8bd116d1151ffc4fdb28fa1ad77"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "99bdbc0bc0b63aee02c26994bec99009"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "2c5fd779419da5f1733a6a002622be07"
  },
  {
    "url": "backend/work/webservice.html",
    "revision": "779cb3355d915a31ed387a7824316bd4"
  },
  {
    "url": "categories/index.html",
    "revision": "68dcab4fcc2fd9d29941e51c2d84dfd1"
  },
  {
    "url": "categories/人工智能/index.html",
    "revision": "f428a0d64b34a2ba6ed119d8410ef6c4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a40aba0ec2e45c3467be50897ef8c993"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "865cd93df558c97dfb3d3d3d86ee2bff"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "62c49534e49e811c81e3e60df3a891cf"
  },
  {
    "url": "frontend/vue/jsx.html",
    "revision": "1526b78d9bb1df65e600698dac5731f6"
  },
  {
    "url": "frontend/vue/questions.html",
    "revision": "feb277e93bb8fd5d8ed1bb39c71680e1"
  },
  {
    "url": "frontend/vue/stream.html",
    "revision": "34d9521dbd54e1cf0182eea216d296fe"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "aed9ac7ca378e1d088788cf6f245ad79"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "9ec4d2c64765a49616336550716e041e"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "13ff265230cd00b23c534a2323186475"
  },
  {
    "url": "index.html",
    "revision": "7b4caad63b23c4fc4f96b717190369f9"
  },
  {
    "url": "llm/InternLM2.html",
    "revision": "09df3373662ed75e18671adaa9cb64ff"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "4a9935b6b3295c967e2c2675d054f474"
  },
  {
    "url": "other/treeholes.html",
    "revision": "6b66fcc08cf85a27c26510dc4cead62f"
  },
  {
    "url": "tag/CentOS/index.html",
    "revision": "d9d21e32541437588656249a5f510191"
  },
  {
    "url": "tag/Ceph/index.html",
    "revision": "ee0d57d54f8614d5e6ed796592e2a566"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "abcb8821273a615d700483790763da25"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "d400dae03382861652c5b3b49888136d"
  },
  {
    "url": "tag/index.html",
    "revision": "ee9a282a3371bb56f87e1098cd83444e"
  },
  {
    "url": "tag/LLM/index.html",
    "revision": "740a7ca02038aa4cfec654cf0c387acd"
  },
  {
    "url": "tag/Micorservice/index.html",
    "revision": "e751419f0c94e67588a29f01f5b8dbfe"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "18131afa0a1a743a8ae9e855cde512f8"
  },
  {
    "url": "tag/OnlyOffice/index.html",
    "revision": "2ef0c5e1c52733bf66cf9e156fd8735c"
  },
  {
    "url": "tag/Poi/index.html",
    "revision": "b7c4c15a91038d8a172985c05c3edb71"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f24759e50c60a226ec86ee59eed6f401"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8bf136ba003f793ff593443091e8b376"
  },
  {
    "url": "tag/WebService/index.html",
    "revision": "03e98264e53c1dd395ffcff89fa39e36"
  },
  {
    "url": "timeline/index.html",
    "revision": "dee752bddab5b8ca440db877918885bc"
  },
  {
    "url": "tool/centos.html",
    "revision": "b17039288f9fe1b86360126287b46fca"
  },
  {
    "url": "tool/git.html",
    "revision": "1c1c32ede94a2aed2b478114cfd5da85"
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
