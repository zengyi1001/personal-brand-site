"use client";

import { useState } from "react";
import content from "../content/site.json";

const { profile, projects, posts } = content;

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePost, setActivePost] = useState<(typeof posts)[number] | null>(null);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${profile.name}首页`}>
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
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
          <p className="eyebrow"><span className="status-dot" /> {profile.role} · {profile.location}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-note">{profile.intro}</p>
          <a className="text-link" href="#work">看看我在做什么 <span>↓</span></a>
        </div>
        <div className="hero-canvas" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="scribble">curious<br />by nature</div>
          <div className="coordinate">22.5431° N<br />114.0579° E</div>
          <div className="portrait-shape"><span>{profile.name}</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="section-kicker">01 / 关于我</p>
        <div className="about-grid">
          <h2>{profile.aboutTitle}</h2>
          <div className="about-copy">
            <p>{profile.aboutOne}</p>
            <p>{profile.aboutTwo}</p>
            <div className="capabilities" aria-label="能力领域">
              {profile.capabilities.map((capability) => <span key={capability}>{capability}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div><p className="section-kicker">02 / 精选项目</p><h2>最近完成的事</h2></div>
          <p>横跨分布式系统、高性能网络与 AI Infra。<br />每个项目都从一个真实而困难的工程问题开始。</p>
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
              <h3><button className="post-button" type="button" onClick={() => setActivePost(post)}>{post.title}</button></h3>
              <div className="post-read">{post.read} <span>→</span></div>
            </article>
          ))}
        </div>
        <p className="publishing-note">这里持续记录系统架构、高性能网络与 AI Infra 的工程思考。</p>
      </section>

      <footer id="contact">
        <div className="footer-intro">
          <p className="section-kicker">04 / 联系</p>
          <h2>有个想法？<br /><em>我们一起把它做出来。</em></h2>
          <a className="mail-link" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a>
        </div>
        <div className="footer-bottom">
          <div className="footer-brand"><span className="brand-mark light">{profile.initials}</span><span>{profile.name} · {profile.englishName}</span></div>
          <div className="socials"><a href={`mailto:${profile.email}`}>Email</a><a href={profile.linkedin}>GitHub</a><a href={profile.xiaohongshu}>联系我</a></div>
          <p>© 2026 {profile.englishName}. 持续构建，持续演进。</p>
        </div>
      </footer>
      {activePost && (
        <div className="article-overlay" role="dialog" aria-modal="true" aria-labelledby="article-title" onClick={() => setActivePost(null)}>
          <article className="article-panel" onClick={(event) => event.stopPropagation()}>
            <button className="article-close" type="button" onClick={() => setActivePost(null)} aria-label="关闭文章">关闭 ×</button>
            <p className="section-kicker">{activePost.category} · {activePost.date}</p>
            <h2 id="article-title">{activePost.title}</h2>
            <div className="article-body">{activePost.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </article>
        </div>
      )}
    </main>
  );
}
