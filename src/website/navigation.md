---
title: 导航
heroText: ""
home: true
comment: true
timeline: false
article: false
---

<div class="content-section">
  <!-- 筛选区域 -->
  <div class="filter-section">
    <div class="filter-container">
      <div class="filter-tags">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-tag"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >{{ cat }}</button>
      </div>
    </div>
  </div>

  <!-- 渲染区域：若存在子分类，则分组展示并用 h2 标题分割 -->
  <div v-if="groupMode">
    <section v-for="group in groupedCards" :key="group.name" class="group-section">
      <h2 class="category-title">{{ group.name }}</h2>
      <div class="vp-card-container">
        <VPCard
          v-for="card in group.items"
          :key="card.title"
          class="card-item custom-card"
          :title="card.title"
          :desc="card.desc"
          :logo="resolveLogo(card)"
          :link="card.link"
        />
      </div>
    </section>
    <div v-if="ungroupedCards.length" class="vp-card-container">
      <VPCard
        v-for="card in ungroupedCards"
        :key="card.title"
        class="card-item custom-card"
        :title="card.title"
        :desc="card.desc"
        :logo="resolveLogo(card)"
        :link="card.link"
      />
    </div>
  </div>
  <div v-else class="vp-card-container">
    <VPCard
      v-for="card in filteredCards"
      :key="card.title"
      class="card-item custom-card"
      :title="card.title"
      :desc="card.desc"
      :logo="resolveLogo(card)"
      :link="card.link"
    />
  </div>
</div>

<script>
export default {
  data() {
    return {
      activeCategory: '优质社区',
      // 改为数据驱动的卡片清单，消除重复与错误
      cards: [
        // 优质社区
        { category: '优质社区', subcategory: '开发者社区', title: 'GitHub', desc: '全球最大的代码托管平台和开发者社区', logo: 'https://github.githubassets.com/favicons/favicon.svg', link: 'https://github.com/' },
        { category: '优质社区', subcategory: '开发者社区', title: 'Linux DO', desc: '新的理想型中文技术与 AI 社区', link: 'https://linux.do/' },
        { category: '优质社区', subcategory: '开发者社区', title: 'Hugging Face', desc: '开源模型与数据社区', link: 'https://huggingface.co/' },
        { category: '优质社区', subcategory: '开发者社区', title: '知识星球', desc: '知识社群与付费内容社区', link: 'https://wx.zsxq.com/group/48418884588288' },
        { category: '优质社区', subcategory: '开发者社区', title: 'OpenClaw 中文社区', desc: 'Claude 相关中文社区与资源导航', link: 'https://clawd.org.cn' },
        { category: '优质社区', subcategory: '博客内容', title: 'Sebastian Raschka Magazine', desc: '机器学习与人工智能领域专家的深度文章', link: 'https://magazine.sebastianraschka.com/' },
        { category: '优质社区', subcategory: '博客内容', title: 'BestBlogs', desc: '优质技术博客聚合与发现平台', link: 'https://www.bestblogs.dev/' },
        { category: '优质社区', subcategory: '博客内容', title: 'Jimmy Song', desc: '云原生、Kubernetes 与 AI 技术社区和博客', link: 'https://jimmysong.io/zh/' },
        { category: '优质社区', subcategory: '资源站点', title: 'macOS Home', desc: 'macOS 软件与资源导航站', link: 'https://macoshome.com/macos' },

        // 人工智能
        { category: '人工智能', subcategory: '模型', title: 'ChatGPT', desc: 'OpenAI | 对话·生成', link: 'https://chatgpt.com/' },
        { category: '人工智能', subcategory: '模型', title: 'DeepSeek', desc: 'DeepSeek | 对话·推理', link: 'https://chat.deepseek.com/' },
        { category: '人工智能', subcategory: '模型', title: '文心一言', desc: '百度 | 对话·创作', link: 'https://yiyan.baidu.com/' },
        { category: '人工智能', subcategory: '模型', title: '讯飞星火', desc: '讯飞 | 对话·办公', link: 'https://xinghuo.xfyun.cn/desk' },
        { category: '人工智能', subcategory: '模型', title: '通义千问', desc: '阿里 | 对话·多模态', link: 'https://www.tongyi.com/' },
        { category: '人工智能', subcategory: '模型', title: 'Pi AI', desc: 'Inflection | 对话·陪伴', link: 'https://pi.ai/discover' },
        { category: '人工智能', subcategory: '模型', title: 'Gemini', desc: 'Google | 对话·多模态', link: 'https://gemini.google.com/app?hl=zh-cn' },
        { category: '人工智能', subcategory: '模型', title: 'MiniMax', desc: 'MiniMax | 多模态模型与智能体能力平台', link: 'https://www.minimaxi.com' },
        { category: '人工智能', subcategory: '模型', title: '智谱清言', desc: '智谱 AI | 大模型与智能体平台', link: 'https://bigmodel.cn' },

        { category: '人工智能', subcategory: 'AI 编程', title: 'Trae', desc: 'AI 编程助手与智能开发环境', link: 'https://www.trae.ai/' },
        { category: '人工智能', subcategory: 'AI 编程', title: 'Qoder', desc: '智能编码助手与研发工作台', link: 'https://qoder.com/' },
        { category: '人工智能', subcategory: 'AI 编程', title: 'Cursor', desc: 'AI 原生代码编辑器', link: 'https://cursor.com/cn' },
        { category: '人工智能', subcategory: 'AI 编程', title: 'OpenAI Codex', desc: 'AI 编程助手与软件工程代理', link: 'https://openai.com/zh-Hans-CN/codex/' },

        { category: '人工智能', subcategory: 'AI 创作', title: 'SkillsMP', desc: 'AI 技能市场与创作平台', link: 'https://skillsmp.com/zh' },
        { category: '人工智能', subcategory: 'AI 工具', title: 'NotebookLM', desc: 'AI 研究与知识整理工具', link: 'https://notebooklm.google/' },
        { category: '人工智能', subcategory: 'AI 工具', title: 'Manus', desc: '通用任务执行与智能体平台', link: 'https://manus.im/app' },

        { category: '人工智能', subcategory: '开发文档', title: 'Claude 文档', desc: '快速入门｜开发者指南｜API 参考', link: 'https://docs.claude.com/zh-CN/docs/intro' },
        { category: '人工智能', subcategory: '开发文档', title: 'LangChain 文档', desc: 'Agent 工程平台文档｜Python/TypeScript', link: 'https://docs.langchain.com/' },
        { category: '人工智能', subcategory: '开发文档', title: 'LangChain4j 文档', desc: 'Java 大语言模型集成框架中文文档', link: 'https://docs.langchain4j.info/' },
        { category: '人工智能', subcategory: '开发文档', title: 'Google ADK 文档', desc: '智能体开发套件中文文档（Agent Development Kit）', link: 'https://adk.wiki/' },
        { category: '人工智能', subcategory: '开发文档', title: 'CrewAI 文档', desc: '协作式多智能体框架中文文档', link: 'https://docs.crewai.org.cn/' },
        { category: '人工智能', subcategory: '开发文档', title: '提示工程指南', desc: '全面介绍提示工程的原理和实践',  link: 'https://www.promptingguide.ai/zh' },
        { category: '人工智能', subcategory: '开发文档', title: '智能体设计模式', desc: '智能体系统设计实战指南', link: 'https://jimmysong.io/book/agentic-design-patterns/' },
        { category: '人工智能', subcategory: '平台部署', title: 'Featurize', desc: '算力平台，机器学习在线实验室',  link: 'https://featurize.cn/' },
        { category: '人工智能', subcategory: '平台部署', title: '共绩算力', desc: '弹性算力服务平台', link: 'https://www.gongjiyun.com/' },
        { category: '人工智能', subcategory: '平台部署', title: 'Ollama', desc: '本地模型运行', link: 'https://ollama.com/' },
        { category: '人工智能', subcategory: '平台部署', title: 'SiliconFlow', desc: '大模型云服务与推理平台', link: 'https://siliconflow.cn' },
        { category: '人工智能', subcategory: '平台部署', title: 'Dify', desc: 'Agentic 工作流平台', link: 'https://dify.ai/zh' },

        
        { category: '前端开发', subcategory: '框架文档', title: 'Vue', desc: '渐进式 JavaScript 框架官方文档', link: 'https://cn.vuejs.org/' },
        { category: '前端开发', subcategory: '框架文档', title: 'React', desc: '用于构建用户界面的前端库官方文档', link: 'https://react.dev/' },
        { category: '前端开发', subcategory: '框架文档', title: 'Flutter 文档', desc: '官方中文文档｜跨平台 UI 框架', link: 'https://docs.flutter.cn/' },
        { category: '前端开发', subcategory: 'UI 组件', title: 'Ant Design', desc: '企业级 UI 设计语言与 React 组件库', link: 'https://ant.design/' },
        { category: '前端开发', subcategory: 'UI 组件', title: 'Ant Design X', desc: '面向 AI 场景的 Ant Design React 组件库', link: 'https://x.ant.design/' },
        { category: '前端开发', subcategory: '样式方案', title: 'Tailwind CSS', desc: '实用优先的 CSS 框架官方文档', link: 'https://tailwindcss.com/' },
        { category: '前端开发', subcategory: '工程化', title: 'Vite', desc: '新一代前端构建工具官方文档', link: 'https://cn.vite.dev/' },
        { category: '前端开发', subcategory: '学习资源', title: 'Awesome Flutter 中文资源', desc: 'Flutter 学习资源合集：教程、插件、工具、文章等', link: 'https://github.com/crazycodeboy/awesome-flutter-cn' },

        { category: '后端开发', subcategory: '框架文档', title: 'Spring 官方文档', desc: 'Spring 项目与参考文档', link: 'https://spring.io/' },
        { category: '后端开发', subcategory: '框架文档', title: 'MyBatis-Flex 文档', desc: '轻量灵活的 MyBatis 增强框架', link: 'https://mybatis-flex.com/' },
        { category: '后端开发', subcategory: '框架文档', title: 'MyBatis-Plus 文档', desc: 'MyBatis 增强工具包文档', link: 'https://baomidou.com/' },
        { category: '后端开发', subcategory: '框架文档', title: 'Sa-Token 文档', desc: '轻量级 Java 权限认证框架文档', link: 'https://sa-token.cc/doc.html' },
        { category: '后端开发', subcategory: '工具文档', title: 'Hutool 文档', desc: 'Java 工具库官方文档', link: 'https://www.hutool.cn/docs/' },
        { category: '后端开发', subcategory: '开放平台', title: '飞书开放平台', desc: '飞书开放平台与开发者文档', link: 'https://open.feishu.cn/?lang=zh-CN' },
        { category: '后端开发', subcategory: '架构设计', title: '凤凰架构', desc: '构建可靠的大型分布式系统', logo: 'https://icyfenix.cn/favicon.ico', link: 'https://icyfenix.cn/books/arch/' },
        { category: '后端开发', subcategory: '架构设计', title: '深入高可用系统原理与设计', desc: '系统高可用设计的理论基础与实践', link: 'https://www.thebyte.com.cn/' },
        { category: '后端开发', subcategory: '开发工具', title: 'IDEA 高效使用指南', desc: 'IntelliJ IDEA 使用指南 | 必备插件推荐 | 插件开发入门 | 重构小技巧 | 源码阅读技巧', link: 'https://idea.javaguide.cn/' },

        // 内容创作
        { category: '内容创作', subcategory: '创作工具', title: 'YouMind', desc: '图片/视频生成，创作智能体', link: 'https://youmind.com/zh-CN/overview' },
        { category: '内容创作', subcategory: '创作工具', title: 'Lovart', desc: 'AI 设计与创意项目平台', link: 'https://www.lovart.ai/zh/projects' },
        { category: '内容创作', subcategory: '创作灵感', title: 'UI Notes', desc: '真实产品 UI 设计灵感库', link: 'https://uinotes.com/' },
        { category: '内容创作', subcategory: '创作灵感', title: 'Mobbin', desc: '产品界面与交互设计灵感库', link: 'https://mobbin.com' },
        { category: '内容创作', subcategory: '创作灵感', title: 'Dribbble', desc: '全球设计作品展示与灵感社区', link: 'https://dribbble.com' },
        { category: '内容创作', subcategory: '素材资源', title: 'Pexels', desc: '免费高质量图片素材库', link: 'https://www.pexels.com/zh-cn/' },
        { category: '内容创作', subcategory: '创作平台', title: '微信公众平台', desc: '微信公众号内容发布与运营平台', link: 'https://mp.weixin.qq.com/' },
        { category: '内容创作', subcategory: '创作平台', title: '小红书', desc: '内容创作与社区平台', link: 'https://www.xiaohongshu.com/' },
        { category: '内容创作', subcategory: '创作平台', title: '掘金', desc: '开发者技术分享社区，优质技术文章众多', link: 'https://juejin.cn/' },
        { category: '内容创作', subcategory: '创作辅助', title: '零克查词', desc: '内容敏感词检测', link: 'https://www.lingkechaci.com/' },
        { category: '内容创作', subcategory: '创作辅助', title: '中文文案排版指北', desc: '中文文案排版规范与排版指南', link: 'https://github.com/sparanoid/chinese-copywriting-guidelines' },
        { category: '内容创作', subcategory: '资源托管', title: 'SM.MS 图床', desc: '免费图床｜支持外链与 API（备用域名 smms.app）', link: 'https://s.ee' },

        // 实用工具
        { category: '实用工具', subcategory: '浏览器插件', title: 'Trancy', desc: '沉浸式 AI 语言翻译，多平台双语字幕与网页翻译', logo: 'https://www.trancy.org/zh-cn/favicon.ico', link: 'https://www.trancy.org/zh-cn' },
         { category: '实用工具', subcategory: '浏览器插件', title: 'Adblock Plus', desc: ' 免费的广告拦截器。在 YouTube 和您浏览的其他网站上去除广告。', logo: 'https://adblockplus.org/favicon.ico', link: 'https://chromewebstore.google.com/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb' },
        { category: '实用工具', subcategory: '浏览器插件', title: 'DuckDuckGo Privacy Essentials', desc: ' 为浏览器提供简单无缝的隐私保护。', logo: 'https://duckduckgo.com/favicon.ico', link: 'https://chromewebstore.google.com/detail/duckduckgo-search-tracker/bkdgflcldnnnapblkhphbgpggdiikppg' },
        { category: '实用工具', subcategory: '桌面工具', title: 'Warp', desc: ' 基于 AI 的终端，提供智能命令补全和文档查询', link: 'https://warp.dev/' },
        { category: '实用工具', subcategory: '桌面工具', title: 'Revezone', desc: '一款以图形为中心的思维管理工具', link: 'https://github.com/revezone/revezone' },
        { category: '实用工具', subcategory: '在线工具', title: 'ICraft Editor', desc: '3D 架构图绘制工具', link: 'https://icraft.gantcloud.com/' },
        { category: '实用工具', subcategory: '在线工具', title: 'GitMind', desc: '在线脑图/思维导图工具', logo: 'https://gitmind.cn/favicon.ico', link: 'https://gitmind.cn/' },
        { category: '实用工具', subcategory: '在线工具', title: '百度统计', desc: '网站数据分析平台', logo: 'https://tongji.baidu.com/favicon.ico', link: 'https://tongji.baidu.com/web5/welcome/login' },
        { category: '实用工具', subcategory: '在线工具', title: '轻闪PDF', desc: '在线 PDF 编辑/转换，支持 AI 文档对话', link: 'https://lightpdf.cn/' },
        { category: '实用工具', subcategory: '在线工具', title: 'Docsmall 图片压缩', desc: '免费在线图片压缩工具', link: 'https://docsmall.com/image-compress' },
        { category: '实用工具', subcategory: '在线工具', title: 'Animated Diagrams', desc: '在线动画图表制作工具', link: 'https://animatediagrams.com/' },

      ]
    }
  },
  computed: {
    categories() {
      // 从数据自动生成筛选标签
      return [...new Set(this.cards.map(c => c.category))]
    },
    groupedCards() {
      // 将当前分类的卡片按子分类分组（避免使用 ||=，提高兼容性）
      const current = this.cards.filter(c => c.category === this.activeCategory)
      const groupsMap = current.reduce((map, item) => {
        const k = item.subcategory
        if (!k) return map
        if (!map[k]) map[k] = []
        map[k].push(item)
        return map
      }, {})
      return Object.keys(groupsMap).map(name => ({ name, items: groupsMap[name] }))
    },
    ungroupedCards() {
      // 存在子分类时也保留未分组项的展示
      const current = this.cards.filter(c => c.category === this.activeCategory)
      return current.filter(c => !c.subcategory)
    },
    filteredCards() {
      // 无子分类时的常规渲染
      return this.cards.filter(c => c.category === this.activeCategory && !c.subcategory)
    },
    groupMode() {
      // 存在子分类则启用分组展示
      return this.groupedCards.length > 0
    }
  },
  methods: {
    // 统一解析图标：使用域名图标服务兜底，避免路径变动/防盗链/协议不一致
    resolveLogo(card) {
      // 1) 优先使用卡片自带的品牌 logo（确保插件等不被域名兜底覆盖）
      if (card.logo) return card.logo
      // 2) 兜底：根据链接域名生成 favicon
      try {
        const url = new URL(card.link || '')
        const host = url.hostname
        return `https://icons.duckduckgo.com/ip3/${host}.ico`
      } catch (e) {
        // 3) 最后回退站点默认
        return '/favicon.ico'
      }
    }
  }
}
</script>

<style>
.content-section {
  width: 100%;
  max-width: 100%;
  padding: 0 10px;
}

/* 筛选区域样式 */
.filter-section {
  margin-bottom: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #eaecef;
}

.filter-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.filter-tags {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-tag {
  padding: 8px 16px;
  background: #f0f8ff;
  border: 1px solid #4682b4;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #000000;
}

.filter-tag:hover {
  background: #e6f3ff;
}

.filter-tag.active {
  background: #4682b4;
  color: white;
  border-color: #4682b4;
}

/* 删除不需要的分区与子标题样式，统一渲染区域 */

.category-title {
  font-size: 1.6rem;
  color: #000000;
  margin: 10px 0 0;
}

/* 缩小二级标题与卡片之间的距离 */
.category-title + .vp-card-container {
  margin-top: 8px; /* 默认 8px 更紧凑 */
}

.vp-card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 20px 0;
}

/* 扩大分组之间的间距，仅影响分组模式 */
.group-section .vp-card-container {
  margin-bottom: 28px;
}

.card-item {
  display: block;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.9rem;
  border: 1px solid #eaecef;
  height: 120px; /* 固定卡片高度 */
}

.card-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(70, 130, 180, 0.15);
  border-color: #4682b4;
}

/* 自定义卡片样式 - 左侧图标，右侧名称和描述 */
.custom-card {
  display: flex;
  align-items: center;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
}

.custom-card .vp-card-image {
  flex-shrink: 0;
  margin-right: 12px;
  background-color: #f5f5f5;
  width: 40px;
  height: 40px;
}

.custom-card .vp-card-content {
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
}

.custom-card .vp-card-title {
  font-size: 1rem;
  margin-bottom: 4px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-card .vp-card-desc {
  font-size: 0.85rem;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制显示2行 */
  -webkit-box-orient: vertical;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .vp-card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .vp-card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vp-card-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .category-title + .vp-card-container {
    margin-top: 6px; /* 小屏更紧凑 */
  }

  .group-section .vp-card-container {
    margin-bottom: 20px; /* 小屏分组间距适当缩小 */
  }
  
  .filter-tags {
    gap: 8px;
  }
  
  .filter-tag {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  .card-item {
    height: 100px; /* 在小屏幕上调整卡片高度 */
  }

  .category-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .vp-card-container {
    grid-template-columns: 1fr;
  }
  
  .custom-card {
    flex-direction: column;
    text-align: center;
  }
  
  .custom-card .vp-card-image {
    margin-right: 0;
    margin-bottom: 8px;
  }
  
  .filter-container {
    padding: 0 10px;
  }
  
  .card-item {
    height: auto; /* 在最小屏幕上允许自适应高度 */
    min-height: 100px;
  }
  
  .custom-card {
    height: auto;
  }
}
</style>
