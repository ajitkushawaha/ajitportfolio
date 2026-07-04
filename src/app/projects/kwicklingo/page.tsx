import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

const capabilities = [
  'Product and interface architecture',
  'Full-stack application development',
  'Conversation and support workflows',
  'AI service integration',
  'Production deployment and debugging',
]

const decisions = [
  {
    title: 'Product-first system boundaries',
    text: 'The product is structured around clear customer, conversation, configuration, and support workflows so features can evolve without coupling every screen to implementation details.',
  },
  {
    title: 'Reusable interface architecture',
    text: 'Shared UI patterns and predictable state transitions keep the dashboard and customer-facing chat experience consistent while reducing repeated implementation work.',
  },
  {
    title: 'Failure-aware integrations',
    text: 'External and AI-assisted operations are treated as fallible: loading, empty, error, and retry states are part of the product experience rather than afterthoughts.',
  },
]

export default function KwickLingoCaseStudy() {
  return (
    <div className="case-page">
      <ThemeToggle />
      <style>{`
        :root, [data-theme="light"] { --bg:#fff; --surface:#fff; --ink:#0e1b2e; --muted:#3a4d62; --line:rgba(79,127,163,.16); --signal:#ff6b35; }
        [data-theme="dark"] { --bg:#0e1b2e; --surface:#0a1422; --ink:#edeff2; --muted:#8fa2b8; --line:rgba(143,211,232,.16); --signal:#ff6b35; }
        .case-page { min-height:100vh; color:var(--ink); background-color:var(--bg); background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px); background-size:48px 48px; font-family:Inter,sans-serif; }
        .case-wrap { width:min(1120px,calc(100% - 40px)); margin:0 auto; }
        .case-nav { display:flex; justify-content:space-between; align-items:center; padding:28px 0; font-size:14px; }
        .case-nav a { color:var(--ink); text-decoration:none; }
        .case-live { color:var(--signal)!important; }
        .case-hero { padding:96px 0 72px; }
        .case-kicker,.case-label { color:var(--signal); font:600 11px 'IBM Plex Mono',monospace; letter-spacing:.12em; text-transform:uppercase; }
        .case-hero h1 { max-width:900px; margin:18px 0 22px; font:700 clamp(46px,8vw,96px)/.95 'Space Grotesk',sans-serif; letter-spacing:-.055em; }
        .case-lead { max-width:720px; color:var(--muted); font-size:clamp(18px,2.4vw,25px); line-height:1.5; }
        .case-meta { display:grid; grid-template-columns:repeat(4,1fr); margin-top:52px; border:1px solid var(--line); background:var(--surface); }
        .case-meta div { padding:22px; border-right:1px solid var(--line); }
        .case-meta div:last-child { border:0; }
        .case-meta span { display:block; color:var(--muted); margin-top:8px; font-size:14px; }
        .case-shot { position:relative; aspect-ratio:16/8; border:1px solid var(--line); border-radius:18px; overflow:hidden; background:var(--surface); }
        .case-shot img { object-fit:cover; object-position:top; }
        .case-section { padding:96px 0; border-bottom:1px solid var(--line); }
        .case-grid { display:grid; grid-template-columns:1fr 1.7fr; gap:80px; }
        .case-section h2 { margin:12px 0 0; font:650 clamp(30px,4vw,48px)/1.05 'Space Grotesk',sans-serif; letter-spacing:-.035em; }
        .case-copy { color:var(--muted); font-size:17px; line-height:1.75; }
        .case-copy p { margin:0 0 20px; }
        .case-list { padding:0; margin:24px 0 0; list-style:none; }
        .case-list li { padding:14px 0; border-bottom:1px solid var(--line); color:var(--ink); }
        .decision-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:44px; }
        .decision { padding:26px; border:1px solid var(--line); background:var(--surface); }
        .decision h3 { margin:0 0 12px; font:600 19px 'Space Grotesk',sans-serif; }
        .decision p { margin:0; color:var(--muted); line-height:1.65; }
        .architecture { margin-top:40px; padding:30px; border:1px solid var(--line); background:var(--surface); overflow:auto; }
        .architecture pre { margin:0; color:var(--ink); font:500 14px/1.9 'IBM Plex Mono',monospace; }
        .case-note { padding:22px; border-left:3px solid var(--signal); background:var(--surface); color:var(--muted); }
        .case-cta { padding:100px 0; text-align:center; }
        .case-cta h2 { font:650 clamp(34px,5vw,60px) 'Space Grotesk',sans-serif; margin:0 0 28px; }
        .case-button { display:inline-block; padding:14px 22px; color:#fff; background:var(--signal); text-decoration:none; font-weight:650; }
        @media(max-width:760px){ .case-meta{grid-template-columns:1fr 1fr}.case-meta div:nth-child(2){border-right:0}.case-grid{grid-template-columns:1fr;gap:30px}.decision-grid{grid-template-columns:1fr}.case-hero{padding-top:60px} }
      `}</style>

      <div className="case-wrap">
        <nav className="case-nav">
          <Link href="/projects">← All projects</Link>
          <a className="case-live" href="https://kwicklingo.com" target="_blank" rel="noreferrer">Visit live product ↗</a>
        </nav>

        <header className="case-hero">
          <p className="case-kicker">Engineering case study · SaaS / AI support</p>
          <h1>KwickLingo</h1>
          <p className="case-lead">An AI-assisted customer-support product designed to help teams handle repetitive website conversations through a reliable, configurable chat experience.</p>
          <div className="case-meta">
            <div><b>Role</b><span>Creator · Full Stack Developer</span></div>
            <div><b>Scope</b><span>Idea → architecture → production</span></div>
            <div><b>Platform</b><span>Web SaaS</span></div>
            <div><b>Status</b><span>Independently built live SaaS product</span></div>
          </div>
        </header>

        <div className="case-shot">
          <Image src="/assets/images/project-1.png" alt="KwickLingo product interface" fill priority sizes="(max-width: 1120px) 100vw, 1120px" />
        </div>

        <section className="case-section case-grid">
          <div><p className="case-label">01 · Context</p><h2>The product problem</h2></div>
          <div className="case-copy">
            <p>Small teams repeatedly answer the same customer questions while also trying to keep response quality consistent. Generic chat tools often add another inbox without improving the underlying workflow.</p>
            <p>KwickLingo was shaped as a product system—not only a chat bubble—covering customer interaction, business configuration, conversation handling, and the operational experience behind it.</p>
          </div>
        </section>

        <section className="case-section case-grid">
          <div><p className="case-label">02 · Ownership</p><h2>My contribution</h2></div>
          <div className="case-copy">
            <p>I independently designed and built KwickLingo as my own SaaS product, covering product strategy, UX, frontend, backend, AI integration, database architecture, deployment, and ongoing iteration.</p>
            <ul className="case-list">{capabilities.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="case-section">
          <p className="case-label">03 · Engineering</p><h2>Decisions that shaped the system</h2>
          <div className="decision-grid">{decisions.map(item => <article className="decision" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <div className="architecture"><pre>{`Customer website\n      ↓\nEmbeddable chat experience\n      ↓\nApplication and conversation APIs\n      ↓\nBusiness configuration ─ Conversation state ─ AI service\n      ↓\nOperational dashboard and support workflows`}</pre></div>
        </section>

        <section className="case-section case-grid">
          <div><p className="case-label">04 · Evidence</p><h2>Results without invented numbers</h2></div>
          <div className="case-copy">
            <p>The strongest verified outcome today is a functioning live product that connects customer-facing chat with business configuration and support workflows.</p>
            <div className="case-note">Usage, latency, conversion, and support-deflection metrics will be added only when they can be verified from production analytics.</div>
          </div>
        </section>

        <section className="case-cta"><h2>Explore the live product.</h2><a className="case-button" href="https://kwicklingo.com" target="_blank" rel="noreferrer">Open KwickLingo ↗</a></section>
      </div>
      <Footer />
    </div>
  )
}
