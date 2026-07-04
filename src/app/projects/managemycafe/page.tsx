import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

const ownership = [
  'Product workflow and interface design',
  'React application architecture',
  'Node.js and Express API development',
  'MongoDB data modelling',
  'Ordering workflows and production deployment',
]

const decisions = [
  {
    title: 'Menu-first customer journey',
    text: 'The customer experience prioritizes reaching the menu and placing an order with minimal friction, particularly on mobile devices used at restaurant tables.',
  },
  {
    title: 'Operational data boundaries',
    text: 'Restaurant, menu, category, item, and order concerns are separated so pricing and availability can evolve without destabilizing the complete ordering flow.',
  },
  {
    title: 'API-driven product architecture',
    text: 'The React interface communicates through Express APIs, keeping presentation concerns separate from restaurant and ordering business logic.',
  },
]

export default function ManageMyCafeCaseStudy() {
  return (
    <div className="case-page">
      <ThemeToggle />
      <style>{`
        :root,[data-theme="light"]{--bg:#fff;--surface:#fff;--ink:#0e1b2e;--muted:#3a4d62;--line:rgba(79,127,163,.16);--signal:#ff6b35}
        [data-theme="dark"]{--bg:#0e1b2e;--surface:#0a1422;--ink:#edeff2;--muted:#8fa2b8;--line:rgba(143,211,232,.16);--signal:#ff6b35}
        .case-page{min-height:100vh;color:var(--ink);background-color:var(--bg);background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:48px 48px;font-family:Inter,sans-serif}
        .case-wrap{width:min(1120px,calc(100% - 40px));margin:0 auto}.case-nav{display:flex;justify-content:space-between;align-items:center;padding:28px 0;font-size:14px}.case-nav a{color:var(--ink);text-decoration:none}.case-live{color:var(--signal)!important}
        .case-hero{padding:96px 0 72px}.case-kicker,.case-label{color:var(--signal);font:600 11px 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase}.case-hero h1{max-width:950px;margin:18px 0 22px;font:700 clamp(44px,8vw,92px)/.95 'Space Grotesk',sans-serif;letter-spacing:-.055em}.case-lead{max-width:760px;color:var(--muted);font-size:clamp(18px,2.4vw,25px);line-height:1.5}
        .case-meta{display:grid;grid-template-columns:repeat(4,1fr);margin-top:52px;border:1px solid var(--line);background:var(--surface)}.case-meta div{padding:22px;border-right:1px solid var(--line)}.case-meta div:last-child{border:0}.case-meta span{display:block;color:var(--muted);margin-top:8px;font-size:14px}
        .case-shot{position:relative;aspect-ratio:16/8;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:var(--surface)}.case-shot img{object-fit:cover;object-position:top}.case-section{padding:96px 0;border-bottom:1px solid var(--line)}.case-grid{display:grid;grid-template-columns:1fr 1.7fr;gap:80px}.case-section h2{margin:12px 0 0;font:650 clamp(30px,4vw,48px)/1.05 'Space Grotesk',sans-serif;letter-spacing:-.035em}.case-copy{color:var(--muted);font-size:17px;line-height:1.75}.case-copy p{margin:0 0 20px}
        .case-list{padding:0;margin:24px 0 0;list-style:none}.case-list li{padding:14px 0;border-bottom:1px solid var(--line);color:var(--ink)}.decision-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px}.decision{padding:26px;border:1px solid var(--line);background:var(--surface)}.decision h3{margin:0 0 12px;font:600 19px 'Space Grotesk',sans-serif}.decision p{margin:0;color:var(--muted);line-height:1.65}
        .architecture{margin-top:40px;padding:30px;border:1px solid var(--line);background:var(--surface);overflow:auto}.architecture pre{margin:0;color:var(--ink);font:500 14px/1.9 'IBM Plex Mono',monospace}.case-note{padding:22px;border-left:3px solid var(--signal);background:var(--surface);color:var(--muted)}.case-cta{padding:100px 0;text-align:center}.case-cta h2{font:650 clamp(34px,5vw,60px) 'Space Grotesk',sans-serif;margin:0 0 28px}.case-button{display:inline-block;padding:14px 22px;color:#fff;background:var(--signal);text-decoration:none;font-weight:650}
        @media(max-width:760px){.case-meta{grid-template-columns:1fr 1fr}.case-meta div:nth-child(2){border-right:0}.case-grid{grid-template-columns:1fr;gap:30px}.decision-grid{grid-template-columns:1fr}.case-hero{padding-top:60px}}
      `}</style>

      <div className="case-wrap">
        <nav className="case-nav"><Link href="/projects">← All projects</Link><a className="case-live" href="https://managemy.cafe" target="_blank" rel="noreferrer">Visit live product ↗</a></nav>
        <header className="case-hero">
          <p className="case-kicker">Engineering case study · Restaurant SaaS</p>
          <h1>ManageMyCafe</h1>
          <p className="case-lead">A restaurant product that turns physical menus into accessible QR experiences and supports online ordering through a focused customer and operational workflow.</p>
          <div className="case-meta">
            <div><b>Role</b><span>Creator · Full Stack Product Engineer</span></div>
            <div><b>Scope</b><span>Idea → architecture → production</span></div>
            <div><b>Stack</b><span>React · Express · MongoDB · Node.js</span></div>
            <div><b>Status</b><span>Founder-built live SaaS product</span></div>
          </div>
        </header>

        <div className="case-shot"><Image src="/assets/images/managemycafe.png" alt="ManageMyCafe restaurant product interface" fill priority sizes="(max-width:1120px) 100vw,1120px" /></div>

        <section className="case-section case-grid">
          <div><p className="case-label">01 · Context</p><h2>The product problem</h2></div>
          <div className="case-copy"><p>Restaurants need a simple way to publish changing menu information and let customers browse or order without installing an application. Static menu files are difficult to maintain and provide no structured ordering workflow.</p><p>ManageMyCafe brings menu discovery, restaurant configuration, and ordering into one product experience designed for customers and restaurant operators.</p></div>
        </section>

        <section className="case-section case-grid">
          <div><p className="case-label">02 · Ownership</p><h2>My contribution</h2></div>
          <div className="case-copy"><p>I designed and built ManageMyCafe as my own product, working across product UX, frontend architecture, backend APIs, database structure, and deployment.</p><ul className="case-list">{ownership.map(item=><li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="case-section">
          <p className="case-label">03 · Engineering</p><h2>Decisions behind the product</h2>
          <div className="decision-grid">{decisions.map(item=><article className="decision" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <div className="architecture"><pre>{`Customer QR scan\n      ↓\nReact menu and ordering experience\n      ↓\nNode.js / Express APIs\n      ↓\nRestaurant ─ Menu ─ Categories ─ Items ─ Orders\n      ↓\nMongoDB persistence and operational workflows`}</pre></div>
        </section>

        <section className="case-section case-grid">
          <div><p className="case-label">04 · Evidence</p><h2>What can be verified</h2></div>
          <div className="case-copy"><p>ManageMyCafe is a live product with a complete customer-facing product surface and full-stack restaurant workflow.</p><div className="case-note">Restaurant count, ordering volume, and conversion metrics will be published only after they are verified from production analytics.</div></div>
        </section>

        <section className="case-cta"><h2>Explore the live product.</h2><a className="case-button" href="https://managemy.cafe" target="_blank" rel="noreferrer">Open ManageMyCafe ↗</a></section>
      </div>
      <Footer />
    </div>
  )
}
