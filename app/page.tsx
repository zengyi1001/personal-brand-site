"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "FlowNote",
    type: "数字产品",
    year: "2025",
    tone: "indigo",
    summary: "让零散灵感自然汇成可以行动的思路。",
    detail: "从研究、信息架构到交互原型，为创作者打造一套低摩擦的思考与记录体验。",
  },
  {
    number: "02",
    title: "Luma AI Study",
    type: "体验研究",
    year: "2025",
    tone: "sage",
    summary: "探索人与生成式 AI 共同学习的新方式。",
    detail: "通过 18 场深度访谈与连续体验实验，建立可信、可控的 AI 学习协作框架。",
  },
  {
    number: "03",
    title: "Field Notes",
    type: "独立出版",
    year: "2024",
    tone: "clay",
    summary: "一本关于城市、观察与日常创造力的刊物。",
    detail: "持续记录街道、空间与人的微小关系，并将田野观察转化为季度纸本刊物。",
  },
];

const posts = [
  { date: "2025.06.18", category: "设计思考", title: "好的产品，应该留一点空白", read: "6 分钟" },
  { date: "2025.05.02", category: "工作方法", title: "从模糊问题到清晰方向：我的研究笔记", read: "9 分钟" },
  { date: "2025.03.26", category: "观察札记", title: "慢下来，才看得见真正重要的事", read: "4 分钟" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="林墨首页">
          <span className="brand-mark">LM</span>
          <span>林墨</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "关闭" : "菜单"}
        </button>
        <nav id="site-nav" className={menuOpen ? "nav open" : "nav"} aria-label="主导航">
          <a href="#about" onClick={() => setMenuOpen(false)}>关于</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>文章</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>一起聊聊 ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> 独立产品设计师与创作者 · Shanghai</p>
          <h1>把复杂的问题，<br />做成清晰而有<br className="mobile-break" />温度的体验。</h1>
          <p className="hero-note">我叫林墨，关注产品、技术与人的关系。用研究找到方向，用设计让想法真正发生。</p>
          <a className="text-link" href="#work">看看我在做什么 <span>↓</span></a>
        </div>
        <div className="hero-canvas" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="scribble">curious<br />by nature</div>
          <div className="coordinate">31.2304° N<br />121.4737° E</div>
          <div className="portrait-shape"><span>林<br />墨</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="section-kicker">01 / 关于我</p>
        <div className="about-grid">
          <h2>在理性与感性之间，<br />寻找恰到好处的答案。</h2>
          <div className="about-copy">
            <p>过去八年，我与创业团队、文化机构和科技公司合作，把还很模糊的想法，变成真实、好用，也让人愿意长期相处的产品。</p>
            <p>工作之外，我写作、散步、做小刊物，也持续研究新的创作工具。相信好的设计不只是解决问题，还能打开新的可能。</p>
            <div className="capabilities" aria-label="能力领域">
              <span>产品策略</span><span>用户研究</span><span>体验设计</span><span>创意指导</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div><p className="section-kicker">02 / 精选项目</p><h2>最近完成的事</h2></div>
          <p>跨越数字产品、研究与独立出版。<br />每个项目都从一个值得追问的问题开始。</p>
        </div>
        <div className="project-layout">
          <div className="project-tabs" role="list" aria-label="项目列表">
            {projects.map((project) => (
              <button
                className={activeProject.title === project.title ? "project-tab active" : "project-tab"}
                key={project.title}
                type="button"
                onClick={() => setActiveProject(project)}
                aria-pressed={activeProject.title === project.title}
              >
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <small>{project.type}</small>
                <span className="tab-arrow">↗</span>
              </button>
            ))}
          </div>
          <article className={`project-feature ${activeProject.tone}`} aria-live="polite">
            <div className="project-meta"><span>{activeProject.type}</span><span>{activeProject.year}</span></div>
            <div className="project-art" aria-hidden="true">
              <div className="mini-sheet"><i /><i /><i /><b /></div>
              <div className="mini-circle" />
              <span className="art-number">{activeProject.number}</span>
            </div>
            <div className="project-description">
              <h3>{activeProject.summary}</h3>
              <p>{activeProject.detail}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="journal section" id="journal">
        <div className="section-heading journal-heading">
          <div><p className="section-kicker">03 / 近期文章</p><h2>正在想，也正在写</h2></div>
          <a className="text-link" href="#all-posts">查看全部文章 <span>↗</span></a>
        </div>
        <div className="post-list" id="all-posts">
          {posts.map((post, index) => (
            <article className="post" key={post.title}>
              <div className="post-index">0{index + 1}</div>
              <div className="post-meta"><span>{post.category}</span><time>{post.date}</time></div>
              <h3><a href={`mailto:hello@linmo.design?subject=想读：${post.title}`}>{post.title}</a></h3>
              <div className="post-read">{post.read} <span>→</span></div>
            </article>
          ))}
        </div>
        <p className="publishing-note">新文章与项目会持续发布在这里。订阅入口即将开放。</p>
      </section>

      <footer id="contact">
        <div className="footer-intro">
          <p className="section-kicker">04 / 联系</p>
          <h2>有个想法？<br /><em>我们一起把它做出来。</em></h2>
          <a className="mail-link" href="mailto:hello@linmo.design">hello@linmo.design <span>↗</span></a>
        </div>
        <div className="footer-bottom">
          <div className="footer-brand"><span className="brand-mark light">LM</span><span>林墨 · Lin Mo</span></div>
          <div className="socials"><a href="mailto:hello@linmo.design">Email</a><a href="#top">LinkedIn</a><a href="#journal">小红书</a></div>
          <p>© 2025 Lin Mo. 保持好奇。</p>
        </div>
      </footer>
    </main>
  );
}
