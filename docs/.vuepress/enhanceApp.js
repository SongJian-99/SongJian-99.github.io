import '../.vuepress/styles/iconfont.css'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



// 百度统计
export default ({Vue,isServer,router}) => {
  Vue.use(Element)
  router.beforeEach((to, from, next) => {
    if (!isServer) {
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?da6b2b203a8c10a4edc547932495ffb6";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      // 对每个页面点击添加百度统计
      if(typeof _hmt!='undefined'){
          if (to.path) {
              _hmt.push(['_trackPageview', to.fullPath]);
          }
      }
    }
    // continue
    next();       
  })
};
