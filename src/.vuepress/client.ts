import { defineClientConfig } from '@vuepress/client';

declare global {
  interface Window { _hmt?: any[] }
}

// 不使用环境变量，直接使用固定的百度统计 Site ID
const TONGJI_ID = 'da6b2b203a8c10a4edc547932495ffb6';

function ensureHmScript(id: string) {
  if (!id || typeof document === 'undefined') return;
  if (document.getElementById('baidu-hm')) return;
  const hm = document.createElement('script');
  hm.id = 'baidu-hm';
  hm.async = true;
  hm.src = `https://hm.baidu.com/hm.js?${id}`;
  const s = document.getElementsByTagName('script')[0];
  (s?.parentNode || document.head)?.insertBefore(hm, s || null);
}

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window === 'undefined') return;
    window._hmt = window._hmt || [];
    ensureHmScript(TONGJI_ID);
    router.afterEach((to) => {
      if (to?.fullPath) {
        window._hmt?.push(['_trackPageview', to.fullPath]);
      }
    });
  },
});