import { defineClientConfig } from 'vuepress/client';

declare global {
  interface Window { _hmt?: any[] }
}

const HM_SRC = 'https://hm.baidu.com/hm.js?da6b2b203a8c10a4edc547932495ffb6';

function ensureHmScript() {
  if (typeof document === 'undefined') return;
  if (document.querySelector(`script[src="${HM_SRC}"]`)) return;
  const hm = document.createElement('script');
  hm.async = true;
  hm.src = HM_SRC;
  const s = document.getElementsByTagName('script')[0];
  (s?.parentNode || document.head)?.insertBefore(hm, s || null);
}

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window === 'undefined') return;
    window._hmt = window._hmt || [];
    ensureHmScript();
    router.afterEach((to) => {
      if (to?.fullPath) {
        window._hmt?.push(['_trackPageview', to.fullPath]);
      }
    });
  },
});