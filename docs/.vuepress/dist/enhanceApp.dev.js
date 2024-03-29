"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("../.vuepress/styles/iconfont.css");

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var Vue = _ref.Vue,
      isServer = _ref.isServer,
      router = _ref.router;
  // ElementUI
  Vue.use(_elementUi["default"]); // 百度统计

  router.beforeEach(function (to, from, next) {
    if (!isServer) {
      var _hmt = _hmt || [];

      (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?da6b2b203a8c10a4edc547932495ffb6";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })(); // 对每个页面点击添加百度统计


      if (typeof _hmt != 'undefined') {
        if (to.path) {
          _hmt.push(['_trackPageview', to.fullPath]);
        }
      }
    } // continue


    next();
  });
};

exports["default"] = _default;