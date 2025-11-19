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