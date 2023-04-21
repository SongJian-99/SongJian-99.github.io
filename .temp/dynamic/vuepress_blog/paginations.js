/**
 * Generated by "@vuepress/plugin-blog"
 */

import sorters from './pageSorters'
import filters from './pageFilters'

export default [{
  pid: "tags",
  id: "道",
  filter: filters.tags,
  sorter: sorters.tags,
  pages: [{"path":"/tag/道/","interval":[0,4]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "categories",
  id: "传统文化",
  filter: filters.categories,
  sorter: sorters.categories,
  pages: [{"path":"/categories/传统文化/","interval":[0,4]}],
  prevText: "Prev",
  nextText: "Next",
}]