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
    name: "v-a02ed722",
    path: "/backend/docker/preface.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a02ed722").then(next)
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
    name: "v-091f4df9",
    path: "/backend/work/poi.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-091f4df9").then(next)
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
    name: "v-5b9558ca",
    path: "/frontend/vuepress/VuePressOne.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b9558ca").then(next)
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
    path: '*',
    component: GlobalLayout
  }
]