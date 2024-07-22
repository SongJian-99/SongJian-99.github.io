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
    "revision": "8246fd77eac0ec7733b26d473fe443bd"
  },
  {
    "url": "assets/css/0.styles.b5661576.css",
    "revision": "2a318e723eacfb95522e23ef8310eed6"
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
    "url": "assets/js/1.2ae15e76.js",
    "revision": "dfd3c698ad7e168ffe3fabd24b6d5502"
  },
  {
    "url": "assets/js/10.477d0751.js",
    "revision": "5a6e4ab2e76785ea6fe1211405a6ea70"
  },
  {
    "url": "assets/js/11.b2736a5a.js",
    "revision": "07b2c113fa2e44e9405694b0bb888377"
  },
  {
    "url": "assets/js/12.5d0e7afc.js",
    "revision": "2b72a30981f81dd7234420b1828b3dad"
  },
  {
    "url": "assets/js/13.a721895d.js",
    "revision": "841079b9252eccfe49eb3ee719d52923"
  },
  {
    "url": "assets/js/14.4c60ce00.js",
    "revision": "dd64841b8a087da533b7d70832607142"
  },
  {
    "url": "assets/js/15.b335caf1.js",
    "revision": "bff0a3327424b7f1619f5e62025265fc"
  },
  {
    "url": "assets/js/16.10fb1625.js",
    "revision": "f5c5ce66437dd064ef7b85b304d39ba7"
  },
  {
    "url": "assets/js/17.ed149370.js",
    "revision": "f21079c443330553ef077346e0623deb"
  },
  {
    "url": "assets/js/18.85a9d306.js",
    "revision": "1b2c5140e752ffdda4c1f92dca4da824"
  },
  {
    "url": "assets/js/19.70b36364.js",
    "revision": "518d2570fa7086724a877a98bac302a0"
  },
  {
    "url": "assets/js/20.74c0231d.js",
    "revision": "a3418d64b9a3adfe78550e02e5b8e4b0"
  },
  {
    "url": "assets/js/21.997b1b0a.js",
    "revision": "0aae955e96f1d3c40fd356c4bd3bc61e"
  },
  {
    "url": "assets/js/22.aa6f55ab.js",
    "revision": "5b5abc0ba9a003d1eb59bdd6827e063d"
  },
  {
    "url": "assets/js/23.b64ae1ae.js",
    "revision": "f05477683f1029b6a310df959ad8ee1a"
  },
  {
    "url": "assets/js/24.fd42bfea.js",
    "revision": "a64cea72b6043a4b600d534d17079631"
  },
  {
    "url": "assets/js/25.66d747a7.js",
    "revision": "5e09467816113adebb2cdc3117f3417c"
  },
  {
    "url": "assets/js/26.13f62be7.js",
    "revision": "60913b86add6a126240caacbffd919b5"
  },
  {
    "url": "assets/js/27.20a44981.js",
    "revision": "b1ed2ffb4be5ef39a3c573326faca716"
  },
  {
    "url": "assets/js/28.92ea0fd2.js",
    "revision": "98cdf5917082374e43fab2cffd70058d"
  },
  {
    "url": "assets/js/29.4d8bb002.js",
    "revision": "0d299f1b6601b2efc8a5a97954e97d3b"
  },
  {
    "url": "assets/js/3.6d0f9571.js",
    "revision": "f3c8697b93d8e4664b9ca5a48743aa15"
  },
  {
    "url": "assets/js/30.5d03341f.js",
    "revision": "332d53f71b10e1c61ce30a2c13d59c63"
  },
  {
    "url": "assets/js/31.772b66ed.js",
    "revision": "334ae458be92f102928ca161fb149b1b"
  },
  {
    "url": "assets/js/32.56ee3f07.js",
    "revision": "f5837ac70187e399074850378d6e010e"
  },
  {
    "url": "assets/js/33.c56621f0.js",
    "revision": "e3137244367a9fcfcd1e5e2bf71ac324"
  },
  {
    "url": "assets/js/34.fcf06f0e.js",
    "revision": "88b3e72ce6efdd1368d892da6a9fbaaa"
  },
  {
    "url": "assets/js/35.9eb46021.js",
    "revision": "e3b0d83a872c1b15ed4431595a4be379"
  },
  {
    "url": "assets/js/4.53708ea2.js",
    "revision": "e9fb282a8bdedadd68ce1ac262c6b0d0"
  },
  {
    "url": "assets/js/5.f3e4f405.js",
    "revision": "2e24fe21418989cd05a3ca95bcea411e"
  },
  {
    "url": "assets/js/6.577d577f.js",
    "revision": "540c72b44dc33c009e34ae882b87d141"
  },
  {
    "url": "assets/js/7.e52f8ab3.js",
    "revision": "62ddcf08f6e01bedfb3e7092f7b710dc"
  },
  {
    "url": "assets/js/8.12016912.js",
    "revision": "8b636413800edee869342c95c78c4e17"
  },
  {
    "url": "assets/js/9.5e3ddfef.js",
    "revision": "83cd607c6d2efd5c97d82a6c2e1e5baf"
  },
  {
    "url": "assets/js/app.96fa03ec.js",
    "revision": "e5246e7033ed61de6dc3d39e54ef251b"
  },
  {
    "url": "avator.jpg",
    "revision": "c711808319c65b986c71787041937cc7"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "91a8410342480ede86d3dcf85cdcadc2"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "d52e5b47980bb919ac4fbc384395100e"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "2547d49a6d19c64b4999ebc830b7d287"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "a1cedc9567df99a77754da0f1a8122b2"
  },
  {
    "url": "backend/work/ceph.html",
    "revision": "aeb043c926a3829b59f1439c8f363118"
  },
  {
    "url": "backend/work/easyexcel.html",
    "revision": "380babefcb0e5a31194f8e327c946fe2"
  },
  {
    "url": "backend/work/onlyoffice.html",
    "revision": "499fe3ba8509a606805e321ffdf88b2c"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "1fc3c71c3be8ac1c54e84837b2d4d0fc"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "f3fd8024b72f7f499ccd09fa9b06ce54"
  },
  {
    "url": "backend/work/webservice.html",
    "revision": "2044a4fbbb48797b7b628825ded5d4be"
  },
  {
    "url": "categories/index.html",
    "revision": "3547659af1887fef1f80f4753145e473"
  },
  {
    "url": "categories/人工智能/index.html",
    "revision": "8d94a354fd5402dd02778be9f55e3adf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "036c429dc8f7acf2a8a8b52114983f48"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8af5ed27be2ae694e81d6716b30b7edd"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "906d8494905a27e334ba68900d5e8976"
  },
  {
    "url": "frontend/vue/jsx.html",
    "revision": "9afc8be2554b865af9e9d72aada75c67"
  },
  {
    "url": "frontend/vue/questions.html",
    "revision": "caeee819e84d6ca4e85cf3ab95f26461"
  },
  {
    "url": "frontend/vue/stream.html",
    "revision": "036eeb04947c532fb40291c985638136"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "78c6f94d1e5993dd98f519fc5982cde4"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "07301397b711108423d7a353359d7986"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "00dcca741fa252dfeaa3c01a07056603"
  },
  {
    "url": "index.html",
    "revision": "b18ffa1493355d34c7f15591153682b3"
  },
  {
    "url": "llm/basicOne.html",
    "revision": "4828070c7e209b5abe95e87c4a25c23f"
  },
  {
    "url": "llm/InternLM2.html",
    "revision": "89d12bb63de03d7dedfccbc574a8a09e"
  },
  {
    "url": "logo.jpg",
    "revision": "18c72bba54f743f62b72e36b980c8013"
  },
  {
    "url": "message-board.html",
    "revision": "33aaea33e6a765bbb837df242b38d301"
  },
  {
    "url": "other/navigate.html",
    "revision": "3bc01ca380293307ea95df8dd3aec85a"
  },
  {
    "url": "other/treeholes.html",
    "revision": "d354e6ca239281b818e435a5336ffc15"
  },
  {
    "url": "tag/CentOS/index.html",
    "revision": "973e2fdb6aa38bce7e71ac9b6c545af9"
  },
  {
    "url": "tag/Ceph/index.html",
    "revision": "df46205c779cc5550447910111411350"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "598fc877a49c58162cf0686e0b7150f7"
  },
  {
    "url": "tag/EasyExcel/index.html",
    "revision": "f4caee5661cb500efa638e4b0aab2f0a"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "eb3b0f4699df3a1e1d73134f640d3ec2"
  },
  {
    "url": "tag/index.html",
    "revision": "1d51ba433837c310d9f7d5814aa87a8e"
  },
  {
    "url": "tag/LLM/index.html",
    "revision": "b667bb3f12d3b411afcf16e2deb01e10"
  },
  {
    "url": "tag/Micorservice/index.html",
    "revision": "7cb25458984fa7738d8d1c927715911e"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "c6b72114a7427f30c34df7f8647035ed"
  },
  {
    "url": "tag/OnlyOffice/index.html",
    "revision": "b9bfadaa51b74215bef8ee9943a9391c"
  },
  {
    "url": "tag/Poi/index.html",
    "revision": "9093216989c80e48f12035b7302dda27"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "62aca0194abe3b5f8f84ef3ba1e4d036"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3e6baccd5ba61adf1d47ff0d8baa76ea"
  },
  {
    "url": "tag/WebService/index.html",
    "revision": "702ea2dd270106bab597f00b1dc99247"
  },
  {
    "url": "timeline/index.html",
    "revision": "1715a338c2e95b7ce60b40927f1821dd"
  },
  {
    "url": "tool/centos.html",
    "revision": "565ef2ff6ad0e6d2ee815922457c9767"
  },
  {
    "url": "tool/git.html",
    "revision": "dd808c334941f24f64f5a30ad0755ce4"
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
