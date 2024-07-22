import '../.vuepress/styles/iconfont.css'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import FooterLink from '../.vuepress/components/FooterLink.vue'


export default ({Vue,isServer,router}) => {
  // ElementUI
  Vue.use(Element)
  // 百度统计
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
    if (to.path !== '/' && to.path !== '/timeLine') {
      // 获取内容容器
      const contentContainer = document.querySelector('.page');
      if (contentContainer) {
        // 检查是否已经存在 footer-link
        if (!contentContainer.querySelector('.footer-link')) {
          // 创建 FooterLink 组件实例并插入到页面中
          const FooterLinkConstructor = Vue.extend(FooterLink);
          const instance = new FooterLinkConstructor().$mount();
          contentContainer.appendChild(instance.$el);
        }
      }
    }
    next();  
  })
};
