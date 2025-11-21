// 最小模块声明，仅用于编辑器类型提示与诊断消除

declare module 'vuepress/client' {
  export function defineClientConfig(config: {
    enhance?: (ctx: { app: any; router: any }) => void;
    setup?: () => void;
    rootComponents?: any[];
  }): any;
}

declare module 'vuepress' {
  const anyExport: any;
  export default anyExport;
}

declare module '@vuepress/bundler-vite' {
  const anyExport: any;
  export default anyExport;
}

// 主题最小类型声明，避免编辑器报错
declare module 'vuepress-theme-hope' {
  export const hopeTheme: any;
  export function navbar(config: any): any;
  export function sidebar(config: any): any;
}