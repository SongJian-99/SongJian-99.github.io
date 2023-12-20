/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\vscode\\blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-9280c340",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9280c340").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-65a62e07",
    path: "/backend/docker/Web.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-65a62e07").then(next)
    },
  },
  {
    name: "v-f6dcfe16",
    path: "/backend/docker/Elasticsearch.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f6dcfe16").then(next)
    },
  },
  {
    name: "v-a02ed722",
    path: "/backend/docker/preface.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a02ed722").then(next)
    },
  },
  {
    name: "v-15ca2d81",
    path: "/backend/mysql/explain.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15ca2d81").then(next)
    },
  },
  {
    name: "v-1227ff87",
    path: "/backend/microservice/twelve-factor.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1227ff87").then(next)
    },
  },
  {
    name: "v-022ff53e",
    path: "/backend/mysql/preface.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-022ff53e").then(next)
    },
  },
  {
    name: "v-165bc73b",
    path: "/backend/work/onlyoffice.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-165bc73b").then(next)
    },
  },
  {
    name: "v-2ab2a5ca",
    path: "/backend/work/practice.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2ab2a5ca").then(next)
    },
  },
  {
    name: "v-091f4df9",
    path: "/backend/work/poi.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-091f4df9").then(next)
    },
  },
  {
    name: "v-2a4b324a",
    path: "/backend/work/webservice.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2a4b324a").then(next)
    },
  },
  {
    name: "v-5b9558ca",
    path: "/frontend/vuepress/VuePressOne.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b9558ca").then(next)
    },
  },
  {
    name: "v-921ea9ca",
    path: "/frontend/vuepress/VuePressThree.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-921ea9ca").then(next)
    },
  },
  {
    name: "v-6ffbb6db",
    path: "/frontend/vuepress/VuePressTwo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6ffbb6db").then(next)
    },
  },
  {
    name: "v-04e7d924",
    path: "/other/treeholes.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-04e7d924").then(next)
    },
  },
  {
    name: "v-6a783e8a",
    path: "/message-board.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6a783e8a").then(next)
    },
  },
  {
    name: "v-24218ec4",
    path: "/tool/git.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-24218ec4").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-83bebff6",
    path: "/tag/Docker/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-83bebff6").then(next)
    },
    meta: {"pid":"tags","id":"Docker"}
  },
  {
    path: "/tag/Docker/index.html",
    redirect: "/tag/Docker/"
  },
  {
    name: "v-dc3c2992",
    path: "/tag/MySQL/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-dc3c2992").then(next)
    },
    meta: {"pid":"tags","id":"MySQL"}
  },
  {
    path: "/tag/MySQL/index.html",
    redirect: "/tag/MySQL/"
  },
  {
    name: "v-7a62bdfa",
    path: "/tag/Micorservice/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-7a62bdfa").then(next)
    },
    meta: {"pid":"tags","id":"Micorservice"}
  },
  {
    path: "/tag/Micorservice/index.html",
    redirect: "/tag/Micorservice/"
  },
  {
    name: "v-364eb69d",
    path: "/tag/OnlyOffice/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-364eb69d").then(next)
    },
    meta: {"pid":"tags","id":"OnlyOffice"}
  },
  {
    path: "/tag/OnlyOffice/index.html",
    redirect: "/tag/OnlyOffice/"
  },
  {
    name: "v-324cfe22",
    path: "/tag/Poi/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-324cfe22").then(next)
    },
    meta: {"pid":"tags","id":"Poi"}
  },
  {
    path: "/tag/Poi/index.html",
    redirect: "/tag/Poi/"
  },
  {
    name: "v-9c29eaf8",
    path: "/tag/WebService/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-9c29eaf8").then(next)
    },
    meta: {"pid":"tags","id":"WebService"}
  },
  {
    path: "/tag/WebService/index.html",
    redirect: "/tag/WebService/"
  },
  {
    name: "v-5e08fc30",
    path: "/tag/VuePress/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-5e08fc30").then(next)
    },
    meta: {"pid":"tags","id":"VuePress"}
  },
  {
    path: "/tag/VuePress/index.html",
    redirect: "/tag/VuePress/"
  },
  {
    name: "v-32555732",
    path: "/tag/Git/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-32555732").then(next)
    },
    meta: {"pid":"tags","id":"Git"}
  },
  {
    path: "/tag/Git/index.html",
    redirect: "/tag/Git/"
  },
  {
    name: "v-12afc5a1",
    path: "/categories/后端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-12afc5a1").then(next)
    },
    meta: {"pid":"categories","id":"后端"}
  },
  {
    path: "/categories/后端/index.html",
    redirect: "/categories/后端/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    name: "v-7f958298",
    path: "/categories/工具/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-7f958298").then(next)
    },
    meta: {"pid":"categories","id":"工具"}
  },
  {
    path: "/categories/工具/index.html",
    redirect: "/categories/工具/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]