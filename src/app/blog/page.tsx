'use client'

import React, { useEffect, useState } from 'react'

const blogPosts = [
  {
    id: '01',
    category: 'Blog / AI Chatbot',
    date: 'Jan 20, 2025',
    title: 'Best Chat Widget (#KwickLingo) for Websites in 2025',
    image: 'https://www.kwicklingo.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551434678-e076c223a692%3Fw%3D1200%26h%3D600%26fit%3Dcrop&w=3840&q=75',
    link: 'https://www.kwicklingo.com/blog/best-chat-widget-2025',
    description: 'Discover the best chat widgets (KwickLingo) to enhance customer engagement and support experience in 2025.'
  },
  {
    id: '02',
    category: 'Research / React',
    date: 'Feb 23, 2023',
    title: 'Research Paper in React',
    image: '/assets/images/research.png',
    link: 'https://ijsart.com/unleashing-the-power-of-react-js-a-comprehensive-study-on-front-end-development-and-framework-analysis-66076',
    description: 'A comprehensive study on front-end development and framework analysis published in IJSART.'
  },
  {
    id: '03',
    category: 'Coding / Humor',
    date: 'Jan 14, 2025',
    title: 'Dev Disasters: Hilarious React Bugs',
    image: '/assets/images/devdisater.png',
    link: 'https://www.linkedin.com/pulse/dev-disasters-hilarious-react-bugs-make-you-laugh-cry-ajit-kushwaha-awr8f?utm_source=share&utm_medium=member_android&utm_campaign=share_via',
    description: 'Hilarious React Bugs That Will Make You Laugh (or Cry!) 🐛💻😂'
  },
  {
    id: '04',
    category: 'Coding / Architecture',
    date: 'Dec 2, 2024',
    title: 'Promises vs. Async/Await',
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxfi8d5r2n9ocze5magi.jpg',
    link: 'https://dev.to/ajitkushawaha/promises-vs-asyncawait-whats-the-difference-2hh2',
    description: "What's the Difference? Deep dive into JavaScript promises and asynchronous flows."
  },
  {
    id: '05',
    category: 'Coding / Frontend',
    date: 'Jan 6, 2025',
    title: 'Micro-Frontends',
    image: '/assets/images/modaern.png',
    link: 'https://www.linkedin.com/pulse/copy-micro-frontends-modern-approach-building-web-ajit-kushwaha-uiw5f/?trackingId=1%2FegxDLVRnG5IxIykDcDqg%3D%3D',
    description: 'A Modern Approach to Building Scalable Web Applications using micro-frontend design patterns.'
  }
]

export default function TrialBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          document.body.classList.add('scrolled')
        } else {
          document.body.classList.remove('scrolled')
        }
      } else {
        document.body.classList.remove('scrolled')
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('scrolled')
    }
  }, [])

  useEffect(() => {
    // Reveal on scroll logic
    const revealEls = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    
    revealEls.forEach((el) => {
      io.observe(el)
    })

    return () => {
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    let renderer: any = null
    let rafId: number | null = null
    let resizeHandler: any = null
    let io: IntersectionObserver | null = null

    const initThree = () => {
      const windowAny = window as any
      const THREE = windowAny.THREE
      if (typeof THREE === 'undefined') return

      var wrap = document.getElementById('heroCanvasWrap')
      if (!wrap) return

      wrap.innerHTML = ''

      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      function supportsWebGL() {
        try {
          var c = document.createElement('canvas')
          return !!(window.WebGLRenderingContext &&
            (c.getContext('webgl') || c.getContext('experimental-webgl')))
        } catch (e) {
          return false
        }
      }

      if (!supportsWebGL()) return

      var width = wrap.clientWidth
      var height = wrap.clientHeight

      var scene = new THREE.Scene()
      var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
      camera.position.set(0, 4.4, 7.5)
      camera.lookAt(0, 0, 0)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(width, height)
      wrap.appendChild(renderer.domElement)

      var lineColor = new THREE.Color(0x4f7fa3)
      var signalColor = new THREE.Color(0xff6b35)

      var segs = 36
      var geometry = new THREE.PlaneGeometry(16, 16, segs, segs)
      geometry.rotateX(-Math.PI / 2.05)
      var basePositions = geometry.attributes.position.array.slice()

      var material = new THREE.MeshBasicMaterial({
        color: lineColor,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      })
      var grid = new THREE.Mesh(geometry, material)
      scene.add(grid)

      var pointCount = 26
      var pointGeo = new THREE.BufferGeometry()
      var pointPos = new Float32Array(pointCount * 3)
      var pointPhase: number[] = []
      for (var i = 0; i < pointCount; i++) {
        var gx = (Math.random() - 0.5) * 14
        var gz = (Math.random() - 0.5) * 14
        pointPos[i * 3] = gx
        pointPos[i * 3 + 1] = 0
        pointPos[i * 3 + 2] = gz
        pointPhase.push(Math.random() * Math.PI * 2)
      }
      pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPos, 3))
      var pointMat = new THREE.PointsMaterial({
        color: signalColor,
        size: 0.09,
        transparent: true,
        opacity: 0.85
      })
      var points = new THREE.Points(pointGeo, pointMat)
      scene.add(points)

      var clock = new THREE.Clock()
      var visible = true

      function animateFrame() {
        var t = clock.getElapsedTime()
        var pos = geometry.attributes.position
        for (var idx = 0; idx < pos.count; idx++) {
          var bx = basePositions[idx * 3]
          var bz = basePositions[idx * 3 + 2]
          var wave = Math.sin(bx * 0.4 + t * 0.6) * 0.18 +
            Math.cos(bz * 0.35 + t * 0.5) * 0.18
          pos.setY(idx, wave)
        }
        pos.needsUpdate = true

        var ppos = pointGeo.attributes.position
        for (var p = 0; p < pointCount; p++) {
          var py = Math.sin(t * 0.8 + pointPhase[p]) * 0.3
          ppos.setY(p, py)
        }
        ppos.needsUpdate = true

        if (renderer) {
          renderer.render(scene, camera)
        }
      }

      function loop() {
        if (!visible) return
        animateFrame()
        rafId = requestAnimationFrame(loop)
      }

      function start() {
        if (rafId !== null) return
        if (reduceMotion) {
          animateFrame()
          if (renderer) renderer.domElement.classList.add('ready')
          return
        }
        loop()
        if (renderer) renderer.domElement.classList.add('ready')
      }

      function stop() {
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
      }

      const wrapEl = wrap
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          visible = e.isIntersecting
          if (visible) {
            start()
          } else {
            stop()
          }
        })
      }, { threshold: 0 })
      io.observe(wrapEl)

      resizeHandler = function () {
        var w = wrapEl.clientWidth
        var h = wrapEl.clientHeight
        if (w === 0 || h === 0) return
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        if (renderer) {
          renderer.setSize(w, h)
        }
      }
      window.addEventListener('resize', resizeHandler)
    }

    const windowAny = window as any
    let script: HTMLScriptElement | null = null

    if (windowAny.THREE) {
      initThree()
    } else {
      script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r160/three.min.js'
      script.onload = () => {
        initThree()
      }
      document.body.appendChild(script)
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      if (resizeHandler) window.removeEventListener('resize', resizeHandler)
      if (io) io.disconnect()
      if (script && script.parentNode) script.parentNode.removeChild(script)
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --navy: #0E1B2E;
          --navy-deep: #0A1422;
          --line: #4F7FA3;
          --line-soft: rgba(143,211,232,0.16);
          --signal: #FF6B35;
          --paper: #F4F0E6;
          --ink: #EDEFF2;
          --ink-dim: #8FA2B8;
          --ink-faint: #5C7088;

          --display: 'Space Grotesk', sans-serif;
          --body: 'Inter', sans-serif;
          --mono: 'IBM Plex Mono', monospace;
        }

        .jordan-body {
          background: var(--navy);
          color: var(--ink);
          font-family: var(--body);
          line-height: 1.6;
          overflow-x: hidden;
          background-image:
            linear-gradient(var(--line-soft) 1px, transparent 1px),
            linear-gradient(90deg, var(--line-soft) 1px, transparent 1px);
          background-size: 48px 48px;
          background-position: center top;
        }

        .wrap { max-width: 1180px; margin: 0 auto; padding: 0 32px; }

        .bracketed {
          position: relative;
          border: 1px solid rgba(143,211,232,0.22);
        }
        .bracketed::before,
        .bracketed::after,
        .bracketed .bk-tr,
        .bracketed .bk-br {
          content: "";
          position: absolute;
          width: 14px; height: 14px;
          border-color: var(--signal);
          border-style: solid;
          transition: width .25s ease, height .25s ease;
        }
        .bracketed::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .bracketed::after { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
        .bracketed .bk-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .bracketed .bk-br { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .bracketed:hover::before,
        .bracketed:hover::after,
        .bracketed:hover .bk-tr,
        .bracketed:hover .bk-br { width: 22px; height: 22px; }

        header.jordan-header {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          background: rgba(10, 20, 34, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid var(--line-soft);
          border-radius: 999px;
          padding: 8px 24px;
          width: max-content;
          max-width: 95%;
          box-shadow: 0 16px 32px rgba(0,0,0,0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .logo {
          font-family: var(--mono); font-size: 13px; letter-spacing: 0.04em;
          display: flex; align-items: center; gap: 8px;
          color: var(--ink);
          font-weight: 600;
        }
        .logo .dot {
          width: 8px; height: 8px; background: #4caf50; display: inline-block;
          border-radius: 50%;
          box-shadow: 0 0 8px #4caf50;
        }
        .nav-links {
          display: flex;
          gap: 16px;
          align-items: center;
          max-width: 600px;
          opacity: 1;
          overflow: hidden;
          transition: max-width 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, gap 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-links a {
          font-family: var(--mono); font-size: 12px; color: var(--ink-dim);
          letter-spacing: 0.03em; transition: all .2s ease; position: relative;
          padding: 6px 16px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .nav-links a:hover {
          color: var(--ink);
          background: rgba(255,255,255,0.08);
        }
        .nav-loc {
          font-family: var(--mono); font-size: 11px; color: var(--ink-faint);
          white-space: nowrap;
        }

        /* Scrolled state: Dynamic Island collapses */
        body.scrolled header.jordan-header {
          padding: 8px 16px;
          background: rgba(10, 20, 34, 0.95);
          border-color: rgba(255, 107, 53, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        body.scrolled header.jordan-header .nav-links {
          max-width: 0;
          opacity: 0;
          pointer-events: none;
          gap: 0;
        }
        body.scrolled header.jordan-header .nav-loc {
          display: none;
        }
        
        /* Hovering the collapsed island expands it back dynamically */
        body.scrolled header.jordan-header:hover {
          padding: 8px 24px;
          background: rgba(10, 20, 34, 0.95);
          border-color: var(--signal);
        }
        body.scrolled header.jordan-header:hover .nav-links {
          max-width: 600px;
          opacity: 1;
          pointer-events: auto;
          gap: 16px;
        }

        @media(max-width: 760px) {
          header.jordan-header {
            padding: 6px 16px;
            top: 16px;
          }
          .nav {
            gap: 16px;
          }
          .nav-loc {
            display: none;
          }
          .nav-links {
            display: flex;
            gap: 4px;
          }
          .nav-links a {
            padding: 4px 8px;
            font-size: 11px;
          }
          body.scrolled header.jordan-header {
            padding: 6px 12px;
          }
          body.scrolled header.jordan-header .nav-links {
            max-width: 0;
            opacity: 0;
            pointer-events: none;
          }
          body.scrolled header.jordan-header:hover .nav-links {
            max-width: 320px;
            opacity: 1;
            pointer-events: auto;
            gap: 4px;
          }
        }

        .hero {
          padding: 168px 0 60px;
          position: relative;
        }
        .hero-canvas-wrap {
          position: absolute;
          top: -80px; left: 0; right: 0; bottom: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-canvas-wrap canvas {
          width: 100%; height: 100%;
          display: block;
          opacity: 0;
          transition: opacity 1.2s ease;
        }
        .hero-canvas-wrap canvas.ready { opacity: 0.55; }
        .hero-canvas-wrap::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 0%, var(--navy) 92%);
        }
        .hero > *:not(.hero-canvas-wrap) { position: relative; z-index: 1; }
        .eyebrow {
          font-family: var(--mono); font-size: 13px; color: var(--signal);
          letter-spacing: 0.08em; margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }
        .eyebrow::before {
          content: ""; width: 28px; height: 1px; background: var(--signal);
        }
        .jordan-h1 {
          font-family: var(--display); font-weight: 700;
          font-size: clamp(40px, 7vw, 84px);
          line-height: 1.02; letter-spacing: -0.02em;
          max-width: 920px;
        }
        .jordan-h1 .accent { color: var(--signal); }

        section { padding: 60px 0; position: relative; }
        .sec-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 40px; gap: 24px; flex-wrap: wrap;
        }
        .sec-tag {
          font-family: var(--mono); font-size: 12px; color: var(--ink-faint);
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px;
        }
        .sec-tag span { color: var(--signal); }
        .sec-head h2 {
          font-family: var(--display); font-weight: 600; font-size: clamp(28px,4vw,42px);
          letter-spacing: -0.01em;
        }

        /* ---------- blog grid ---------- */
        .blog-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 24px;
        }
        @media(max-width:760px) { .blog-grid { grid-template-columns: 1fr; } }
        .blog-card {
          background: var(--navy-deep); padding: 28px; position: relative;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .blog-meta-info {
          font-family: var(--mono); font-size: 12px; color: var(--ink-faint);
          display: flex; justify-content: space-between; margin-bottom: 20px;
        }
        .blog-meta-info .tag { color: var(--signal); }
        .blog-img-wrap {
          width: 100%; aspect-ratio: 16/9; overflow: hidden;
          background: var(--navy); border: 1px solid var(--line-soft);
          margin-bottom: 20px;
        }
        .blog-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.3s ease;
        }
        .blog-card:hover .blog-img-wrap img {
          transform: scale(1.05);
        }
        .blog-card h3 {
          font-family: var(--display); font-size: 22px; font-weight: 600; margin-bottom: 12px;
          line-height: 1.3;
        }
        .blog-card p { color: var(--ink-dim); font-size: 14px; line-height: 1.5; margin-bottom: 24px; }
        .blog-card-link {
          font-family: var(--mono); font-size: 13px;
          display: inline-flex; align-items: center; gap: 8px; color: var(--ink);
          border-bottom: 1px solid transparent; transition: border-color .2s ease, gap .2s ease;
          width: fit-content;
        }
        .blog-card:hover .blog-card-link { border-color: var(--signal); gap: 12px; }

        footer.jordan-footer { border-top: 1px solid var(--line-soft); padding: 64px 0 0; }
        .foot-grid {
          display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; margin-bottom: 56px;
        }
        @media(max-width:700px) { .foot-grid { grid-template-columns: 1fr; gap: 32px; } }
        .foot-grid h4 {
          font-family: var(--display); font-size: 26px; margin-bottom: 6px;
        }
        .foot-grid .foot-label {
          font-family: var(--mono); font-size: 11px; color: var(--ink-faint);
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 16px;
        }
        .foot-grid a, .foot-grid span {
          display: block; font-size: 14px; color: var(--ink-dim); margin-bottom: 10px;
        }
        .foot-grid a:hover, .foot-grid a:hover h4 { color: var(--signal) !important; }
        .foot-bottom {
          border-top: 1px solid var(--line-soft); padding-top: 24px;
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
          font-family: var(--mono); font-size: 12px; color: var(--ink-faint);
        }

        .reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        .foot-large-name {
          font-family: var(--display);
          font-size: clamp(48px, 12vw, 150px);
          font-weight: 700;
          text-align: center;
          color: var(--ink);
          letter-spacing: -0.03em;
          margin-top: 36px;
          line-height: 0.9;
          user-select: none;
          opacity: 0.95;
          text-transform: uppercase;
        }
      ` }} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div className="jordan-body min-h-screen text-slate-100 selection:bg-[#FF6B35] selection:text-[#0A1422]">
        
        <header className="jordan-header">
          <nav className="nav">
            <a href="/" className="logo">
              <span className="dot"></span>AJIT KUSHWAHA
            </a>
            <ul className="nav-links">
              <li><a href="/#work">Work</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#resume">Resume</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
            <span className="nav-loc">AHMEDABAD, IN — 23.0N 72.5E</span>
          </nav>
        </header>

        <main style={{ display: 'block', width: '100%', maxWidth: 'none', margin: '0', padding: '0' }}>

          <div className="wrap">
            <section className="hero" style={{ paddingBottom: 0 }}>
              <div className="hero-canvas-wrap" id="heroCanvasWrap" aria-hidden="true" />
              <p className="eyebrow">READING / 05 ARTICLES</p>
              <h1 className="jordan-h1 text-white">Thoughts, guides, &amp; <span className="accent">stories.</span></h1>
            </section>
          </div>

          <div className="wrap">
            <section id="blog-posts" style={{ paddingTop: 0 }}>
              <div className="blog-grid reveal in">
                {blogPosts.map((post, idx) => (
                  <div key={idx} className="blog-card bracketed">
                    <span className="bk-tr"></span><span className="bk-br"></span>
                    <div>
                      <div className="blog-meta-info">
                        <span className="tag">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <div className="blog-img-wrap">
                        <img src={post.image} alt={post.title} loading="lazy" />
                      </div>
                      <h3 className="text-white">{post.title}</h3>
                      <p>{post.description}</p>
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-card-link">
                      Read article →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </main>

        <footer className="jordan-footer">
          <div className="wrap">
            <div className="foot-grid">
              <div>
                <p className="foot-label">Let&apos;s build</p>
                <a href="mailto:ajit.kushwaha.work@gmail.com" style={{ textDecoration: 'none' }}>
                  <h4 className="text-white hover-signal" style={{ margin: 0 }}>ajit.kushwaha.work@gmail.com</h4>
                </a>
              </div>
              <div className="flex flex-col">
                <p className="foot-label">Site map</p>
                <a href="/">Home</a>
                <a href="/#work">Work</a>
                <a href="/#about">About</a>
                <a href="/#resume">Resume</a>
                <a href="/#contact">Contact</a>
              </div>
              <div className="flex flex-col">
                <p className="foot-label">Elsewhere</p>
                <a href="https://www.linkedin.com/in/ajitreact/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/ajitkushawaha" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="foot-bottom">
              <span>BASED IN AHMEDABAD, IN — 23.0N 72.5E</span>
              <span>© 2026 AJIT KUSHWAHA</span>
            </div>
            <div className="foot-large-name">
              AJIT KUSHWAHA
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
