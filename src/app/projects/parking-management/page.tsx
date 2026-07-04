import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

const problems = [
  'Drivers waste time searching for available parking spaces in crowded facilities.',
  'Unclear lane guidance contributes to congestion and difficult traffic control.',
  'Remembering a parked vehicle location is difficult in large parking areas.',
  'Paper tickets can be lost, creating friction and additional penalties.',
  'Cash-only workflows limit payment convenience and increase manual operations.',
]

const capabilities = [
  'Advance parking-space reservation',
  'QR-based entry and ticket recovery',
  'Automated gate and vehicle-entry workflows',
  'Digital parking location guidance',
  'Cash and online payment support',
]

export default function ParkingManagementCaseStudy() {
  return (
    <div className="case-page">
      <ThemeToggle />
      <style>{`
        :root,[data-theme="light"]{--bg:#fff;--surface:#fff;--ink:#0e1b2e;--muted:#3a4d62;--line:rgba(79,127,163,.16);--signal:#ff6b35}
        [data-theme="dark"]{--bg:#0e1b2e;--surface:#0a1422;--ink:#edeff2;--muted:#8fa2b8;--line:rgba(143,211,232,.16);--signal:#ff6b35}
        .case-page{min-height:100vh;color:var(--ink);background-color:var(--bg);background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:48px 48px;font-family:Inter,sans-serif}.wrap{width:min(1120px,calc(100% - 40px));margin:auto}.nav{display:flex;justify-content:space-between;padding:28px 0}.nav a{color:var(--ink);text-decoration:none}.hero{padding:90px 0 65px}.kicker,.label{color:var(--signal);font:600 11px 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase}.hero h1{margin:18px 0 22px;max-width:1000px;font:700 clamp(42px,7vw,88px)/.96 'Space Grotesk',sans-serif;letter-spacing:-.05em}.lead{max-width:760px;color:var(--muted);font-size:clamp(18px,2.4vw,24px);line-height:1.55}
        .meta{display:grid;grid-template-columns:repeat(4,1fr);margin-top:48px;border:1px solid var(--line);background:var(--surface)}.meta div{padding:22px;border-right:1px solid var(--line)}.meta div:last-child{border:0}.meta span{display:block;color:var(--muted);font-size:14px;margin-top:7px}.shot{position:relative;aspect-ratio:16/8;border:1px solid var(--line);border-radius:18px;overflow:hidden}.shot img{object-fit:cover;object-position:top}.section{padding:90px 0;border-bottom:1px solid var(--line)}.grid{display:grid;grid-template-columns:1fr 1.7fr;gap:76px}.section h2{margin:12px 0 0;font:650 clamp(30px,4vw,48px)/1.05 'Space Grotesk',sans-serif;letter-spacing:-.035em}.copy{color:var(--muted);font-size:17px;line-height:1.75}.list{list-style:none;padding:0;margin:20px 0}.list li{padding:14px 0;border-bottom:1px solid var(--line);color:var(--ink)}.flow{margin-top:36px;padding:30px;border:1px solid var(--line);background:var(--surface);overflow:auto}.flow pre{margin:0;color:var(--ink);font:500 14px/1.9 'IBM Plex Mono',monospace}.outcomes{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:35px}.outcome{padding:25px;border:1px solid var(--line);background:var(--surface)}.outcome h3{margin:0 0 10px;font:600 18px 'Space Grotesk',sans-serif}.outcome p{margin:0;color:var(--muted);line-height:1.6}.note{padding:20px;border-left:3px solid var(--signal);background:var(--surface);color:var(--muted)}@media(max-width:760px){.meta{grid-template-columns:1fr 1fr}.grid{grid-template-columns:1fr;gap:28px}.outcomes{grid-template-columns:1fr}}
      `}</style>
      <div className="wrap">
        <nav className="nav"><Link href="/projects">← All projects</Link><Link href="/#contact">Discuss a similar system →</Link></nav>
        <header className="hero"><p className="kicker">Engineering case study · Operations SaaS</p><h1>Parking Management System</h1><p className="lead">A digital parking platform designed to reduce search time, congestion, ticket dependency, and manual payment friction across high-traffic parking facilities.</p><div className="meta"><div><b>Role</b><span>Full Stack Developer</span></div><div><b>Company</b><span>ConceptServe Technologies</span></div><div><b>Platform</b><span>Web and mobile workflows</span></div><div><b>Focus</b><span>Parking operations</span></div></div></header>
        <div className="shot"><Image src="/assets/images/pmscase.png" alt="Parking Management System interface" fill priority sizes="(max-width:1120px) 100vw,1120px" /></div>
        <section className="section grid"><div><p className="label">01 · Problem</p><h2>Parking created avoidable friction</h2></div><div className="copy"><p>Traditional parking operations relied heavily on paper tickets, manual guidance, cash transactions, and drivers searching for available spaces themselves.</p><ul className="list">{problems.map(item=><li key={item}>{item}</li>)}</ul></div></section>
        <section className="section grid"><div><p className="label">02 · Solution</p><h2>A connected parking workflow</h2></div><div className="copy"><p>The system digitizes the journey from reservation and entry through parking guidance, payment, and exit.</p><ul className="list">{capabilities.map(item=><li key={item}>{item}</li>)}</ul></div></section>
        <section className="section"><p className="label">03 · Product flow</p><h2>From reservation to exit</h2><div className="flow"><pre>{`Reserve an available parking space\n              ↓\nArrive and scan the entry QR code\n              ↓\nGate validation and vehicle entry\n              ↓\nNavigate to the reserved parking location\n              ↓\nPay digitally or by cash\n              ↓\nExit confirmation and parking completion`}</pre></div></section>
        <section className="section"><p className="label">04 · Operational value</p><h2>What the system improves</h2><div className="outcomes"><article className="outcome"><h3>Faster parking</h3><p>Reservations and location guidance reduce time spent searching for a space.</p></article><article className="outcome"><h3>Lower congestion</h3><p>Structured entry and parking workflows make traffic easier for operators to manage.</p></article><article className="outcome"><h3>Payment flexibility</h3><p>Drivers can complete parking payments through cash or online methods.</p></article></div></section>
        <section className="section grid"><div><p className="label">05 · Evidence</p><h2>Verified product outcomes</h2></div><div className="copy"><div className="note">The documented implementation reports reduced parking time and congestion, improved traffic control, QR-based ticket recovery, and support for online payments. Exact percentages are intentionally omitted because they were not published.</div></div></section>
      </div>
      <Footer />
    </div>
  )
}
