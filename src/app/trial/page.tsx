'use client'

import React, { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

const featuredProjects = [
  {
    id: 'PRJ — 01',
    category: 'Owned Product / AI SaaS',
    title: 'KwickLingo Chat Widget',
    description: 'My independently built AI support SaaS product, taken from product strategy and architecture through production deployment.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://kwicklingo.com/',
    image: '/assets/images/project-1.png'
  },
  {
    id: 'PRJ — 02',
    category: 'Owned Product / Restaurant SaaS',
    title: 'Manage MyCafe',
    description: 'My restaurant SaaS product for digital QR menus and online ordering, built across product UX, full-stack engineering, and deployment.',
    stack: ['React', 'Express', 'MongoDB', 'Node.js'],
    link: 'https://managemy.cafe',
    image: '/assets/images/managemycafe.png'
  },
  {
    id: 'PRJ — 03',
    category: 'Mobile App / LMS',
    title: 'Workforce LMS',
    description: 'Workforce LMS is a mobile application for the workforce management system.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Redux'],
    link: 'https://play.google.com/store/apps/details?id=com.anonymous.workforcelms&hl=en_IN',
    image: '/assets/images/PmsMobile.jpg'
  },
  {
    id: 'PRJ — 04',
    category: 'Consultancy Platform',
    title: 'Visa4.com',
    description: 'High-performance consultant portal streamlining applicant profiling, document submittals, and visa workflow tracking.',
    stack: ['Next.js', 'PostgreSQL', 'Figma', 'API integration'],
    link: 'https://www.visa4.com',
    image: '/assets/images/visa4.png'
  },
  {
    id: 'PRJ — 05',
    category: 'SaaS / AI Tech',
    title: 'BuiAiSolution',
    description: 'Custom AI infrastructure platform for businesses requiring automated document processing.',
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    link: '#',
    image: '/assets/images/project-3.png'
  }
]

// Skills are structured by category inside the Toolkit section

const resumeTimeline = [
  {
    badge: 'STEP 1',
    color: 'purple',
    title: 'Full Stack Product Engineer',
    company: 'Codyn',
    period: 'Nov 2024 - Present',
    description: 'Building and shipping production SaaS products across frontend, backend, databases, integrations, and deployment.',
    details: [
      'Build full-stack SaaS applications with Next.js, Node.js, and PostgreSQL',
      'Design APIs, authentication flows, data models, and AI integrations',
      'Own production deployments, debugging, and technical documentation'
    ],
    image: '/assets/images/project-1.png',
    active: true
  },
  {
    badge: 'STEP 2',
    color: 'blue',
    title: 'Full Stack Developer',
    company: 'Conceptserve Technologies',
    period: 'Sep 2023 - Sep 2024',
    description: 'Built production web and mobile features across user interfaces, backend services, and API integrations.',
    details: [
      'Built reusable React and React Native application workflows',
      'Integrated authentication, state management, and REST APIs',
      'Collaborated across design, QA, engineering, and production releases'
    ],
    image: '/assets/images/managemycafe.png',
    active: false
  },
  {
    badge: 'STEP 3',
    color: 'green',
    title: 'Master of Computer Application (MCA)',
    company: 'RIET, Jaipur',
    period: '2021 — 2024',
    description: 'Specialized in Advanced Web Systems, Object Oriented Design, and Frontend Framework architectures.',
    details: [
      'Comprehensive research/thesis on React.js state engines',
      'Built responsive modular layout systems',
      'Graduated with honors in Computer Application'
    ],
    image: '/assets/images/growingwing.png',
    active: false
  },
  {
    badge: 'STEP 4',
    color: 'orange',
    title: 'Trainee Web Designer',
    company: 'Rayna Technologies',
    period: 'June 2022 - Aug 2022',
    description: 'Learned fundamentals of semantic structure, layout styling, and client-side scripting.',
    details: [
      'Coded responsive layouts using HTML5, CSS3, and ES6 JS',
      'Optimized layout cross-compatibility across viewport sizes',
      'Learned version control practices with Git'
    ],
    image: '/assets/images/project-5.png',
    active: false
  },
  {
    badge: 'STEP 5',
    color: 'slate',
    title: 'Bachelor of Computer Application (BCA)',
    company: 'JP Institute, Meerut',
    period: '2018 — 2021',
    description: 'Acquired foundational skills in computing systems, relational databases, and algorithm logic.',
    details: [
      'C++, Java, and Object-Oriented Software Design',
      'Relational Database Management Systems & SQL',
      'Computer Networking and Operating Systems'
    ],
    image: '/assets/images/project-9.png',
    active: false
  }
]

const skillColors: Record<string, string> = {
  'React.js': '#61DAFB', 'Next.js': '#888888', 'React Native': '#61DAFB',
  'Redux Toolkit': '#764ABC', 'Context API': '#149ECA', 'JavaScript (ES6+)': '#F7DF1E',
  'Tailwind CSS': '#06B6D4', 'Material UI': '#007FFF', 'HTML5': '#E34F26', 'CSS3': '#1572B6',
  'Node.js': '#5FA04E', 'Express.js': '#888888', 'MongoDB': '#47A248', 'MySQL': '#4479A1',
  'REST APIs': '#FF6B35', 'Socket.io': '#8A8A8A', 'WebSocket': '#4F7FA3', 'Git': '#F05032',
  'GitHub': '#8A8A8A', 'AI Integration': '#10A37F', 'Sensors': '#7C3AED', 'Render': '#46E3B7',
  'Railway': '#A855F7', 'Vercel': '#888888', 'Hostinger': '#673DE6', 'GoDaddy': '#1BDBDB',
  'RTSP Streaming': '#EF4444', 'IoT': '#0EA5E9'
}

const skills = [
  { name: 'Front-End Development', percentage: 80 },
  { name: 'MERN Stack Development', percentage: 70 },
  { name: 'App Development', percentage: 60 },
  { name: 'Web Development', percentage: 80 }
]

export default function AjitKushwahaVanillaStyle() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('AJIT KUSHWAHA')
  const [headerCollapsed, setHeaderCollapsed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const resumeContainerRef = useRef<HTMLDivElement>(null)
  const [resumeScrollProgress, setResumeScrollProgress] = useState(0)

  useEffect(() => {
    const handleScrollProgress = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const entryPoint = viewportHeight - 100
        const fullPoint = viewportHeight * 0.35
        const totalRange = entryPoint - fullPoint
        const currentPos = rect.top
        let progress = (entryPoint - currentPos) / totalRange
        progress = Math.min(Math.max(progress, 0), 1)
        setScrollProgress(progress)
      }

      if (resumeContainerRef.current) {
        const rect = resumeContainerRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const entryPoint = viewportHeight - 100
        const fullPoint = viewportHeight * 0.2
        const totalRange = entryPoint - fullPoint
        const currentPos = rect.top
        let progress = (entryPoint - currentPos) / totalRange
        progress = Math.min(Math.max(progress, 0), 1)
        setResumeScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScrollProgress, { passive: true })
    window.addEventListener('resize', handleScrollProgress)
    handleScrollProgress()

    return () => {
      window.removeEventListener('scroll', handleScrollProgress)
      window.removeEventListener('resize', handleScrollProgress)
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
    }, { threshold: 0.12 })

    revealEls.forEach((el) => {
      io.observe(el)
    })

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const sectionLabels = [
        { id: 'work', label: 'SELECTED WORK' }, { id: 'about', label: 'ABOUT' },
        { id: 'toolkit', label: 'STACK & FOCUS' }, { id: 'resume', label: 'EXPERIENCE' },
        { id: 'contact', label: "LET'S CONNECT" }
      ]
      const marker = currentScrollY + window.innerHeight * 0.35
      let currentLabel = 'AJIT KUSHWAHA'
      sectionLabels.forEach(({ id, label }) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top + window.scrollY <= marker) currentLabel = label
      })
      setActiveSection(currentLabel)
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          document.body.classList.add('scrolled')
          setHeaderCollapsed(true)
        } else {
          document.body.classList.remove('scrolled')
          setHeaderCollapsed(false)
        }
      } else {
        document.body.classList.remove('scrolled')
        setHeaderCollapsed(false)
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('scrolled')
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

      // Clear any existing contents to avoid stacking multiple canvases on route changes/re-renders
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

      if (!supportsWebGL()) {
        return
      }

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
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler)
      }
      if (io) {
        io.disconnect()
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root, [data-theme="light"] {
          --navy: #FFFFFF;
          --navy-deep: #FFFFFF;
          --line: #4F7FA3;
          --line-soft: rgba(79, 127, 163, 0.12);
          --signal: #FF6B35;
          --paper: #0E1B2E;
          --ink: #0E1B2E;
          --ink-dim: #3A4D62;
          --ink-faint: #5C7088;

          --display: 'Space Grotesk', sans-serif;
          --body: 'Inter', sans-serif;
          --mono: 'IBM Plex Mono', monospace;
        }

        [data-theme="dark"] {
          --navy: #0E1B2E;
          --navy-deep: #0A1422;
          --line: #4F7FA3;
          --line-soft: rgba(143,211,232,0.16);
          --signal: #FF6B35;
          --paper: #F4F0E6;
          --ink: #EDEFF2;
          --ink-dim: #8FA2B8;
          --ink-faint: #5C7088;
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

        /* ---------- corner-bracket signature element ---------- */
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

        /* ---------- header ---------- */
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
        .logo-label { display:inline-block; animation:island-label-in .24s ease both; }
        @keyframes island-label-in { from { opacity:0; transform:translateY(4px); filter:blur(3px); } to { opacity:1; transform:none; filter:blur(0); } }
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

        /* ---------- hero ---------- */
        .hero {
          padding: 168px 0 100px;
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
        .hero-sub {
          margin-top: 28px; max-width: 560px; font-size: 18px; color: var(--ink-dim);
        }
        .hero-sub strong { color: var(--ink); font-weight: 600; }
        .hero-actions {
          margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap;
        }
        .btn {
          font-family: var(--mono); font-size: 13px; letter-spacing: 0.03em;
          padding: 14px 24px; display: inline-flex; align-items: center; gap: 10px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .btn-primary { background: var(--signal); color: var(--navy-deep); font-weight: 500; }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-ghost { border: 1px solid var(--line-soft); color: var(--ink); }
        .btn-ghost:hover { border-color: var(--signal); transform: translateY(-2px); }

        .spec-panel {
          margin-top: 72px; border-top: 1px solid var(--line-soft);
          padding-top: 28px;
          display: grid; grid-template-columns: repeat(4,1fr); gap: 24px;
        }
        @media(max-width:760px) { .spec-panel { grid-template-columns: repeat(2,1fr); } }
        .spec-item .k { font-family: var(--mono); font-size: 11px; color: var(--ink-faint); letter-spacing: 0.06em; text-transform: uppercase; }
        .spec-item .v { font-family: var(--display); font-size: 20px; margin-top: 6px; }

        /* ---------- section frame ---------- */
        section { padding: 60px 0; position: relative; }
        .sec-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 56px; gap: 24px; flex-wrap: wrap;
        }
        @media (min-width: 769px) {
          .sec-head {
            display: grid !important;
            grid-template-columns: 1fr auto 1fr !important;
            align-items: flex-end !important;
            width: 100% !important;
            gap: 24px !important;
          }
          .sec-head-center {
            text-align: center;
          }
          .sec-head-center .sec-note {
            margin: 8px auto 0 auto !important;
          }
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
        .sec-head .sec-note { font-size: 14px; color: var(--ink-dim);}

        /* ---------- projects ---------- */
        .proj-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 1px;
          background: var(--line-soft);
          border: 1px solid var(--line-soft);
        }
        @media(max-width:760px) { .proj-grid { grid-template-columns: 1fr; } }
        .proj-card {
          background: var(--navy); padding: 36px; position: relative;
          transition: background .25s ease;
        }
        .proj-card:hover { background: var(--navy-deep); }
        .proj-id {
          font-family: var(--mono); font-size: 12px; color: var(--ink-faint);
          display: flex; justify-content: space-between; margin-bottom: 28px;
        }
        .proj-id .tag { color: var(--signal); }
        .proj-card h3 {
          font-family: var(--display); font-size: 24px; font-weight: 600; margin-bottom: 10px;
        }
        .proj-card p { color: var(--ink-dim); font-size: 14px; max-width: 380px; }
        .proj-stack {
          display: flex; gap: 8px; flex-wrap: wrap; margin-top: 22px;
        }
        .proj-stack span {
          font-family: var(--mono); font-size: 11px; color: var(--ink-dim);
          border: 1px solid var(--line-soft); padding: 4px 10px;
        }
        .proj-link {
          margin-top: 26px; font-family: var(--mono); font-size: 13px;
          display: inline-flex; align-items: center; gap: 8px; color: var(--ink);
          border-bottom: 1px solid transparent; transition: border-color .2s ease, gap .2s ease;
        }
        .proj-card:hover .proj-link { border-color: var(--signal); gap: 12px; }

        .view-all {
          margin-top: 40px; display: flex; justify-content: center;
        }

        /* ---------- about ---------- */
        .about-grid {
          display: grid; grid-template-columns: 340px 1fr; gap: 72px;
        }
        @media(max-width:880px) { .about-grid { grid-template-columns: 1fr; gap: 48px; } }
        .about-photo { aspect-ratio: 4/5; background: var(--paper); position: relative; overflow: hidden; }
        .about-photo .ph-fill {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          display: flex; align-items: flex-end; justify-content: center;
        }
        .about-photo .ph-label {
          background-color: rgba(14, 27, 46, 0.85);
          color: white;
          font-family: var(--mono);
          font-size: 11px;
          padding: 8px 16px;
          border-top: 1px solid var(--line-soft);
          width: 100%;
          text-align: center;
          backdrop-filter: blur(4px);
        }
        .about-copy p { color: var(--ink-dim); margin-bottom: 18px; font-size: 16px; max-width: 600px; }
        .about-copy strong { color: var(--ink); font-weight: 600; }
        .about-socials {
          display: flex; gap: 20px; margin-top: 32px; flex-wrap: wrap;
        }
        .about-socials a {
          font-family: var(--mono); font-size: 13px; color: var(--ink-dim);
          border-bottom: 1px solid var(--line-soft); padding-bottom: 3px;
          transition: color .2s ease, border-color .2s ease;
        }
        .about-socials a:hover { color: var(--signal); border-color: var(--signal); }

        /* ---------- toolkit ---------- */
        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }
        @media(max-width:880px) {
          .skills-categories-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .focus-list {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;
        }
        @media(max-width:760px) { .focus-list { grid-template-columns: 1fr 1fr; } }
        .focus-item {
          border-left: 2px solid var(--signal); padding-left: 16px;
        }
        .focus-item .k { font-family: var(--mono); font-size: 11px; color: var(--ink-faint); }
        .focus-item .v { font-family: var(--display); font-size: 16px; margin-top: 6px; }
        .skills-block { overflow: hidden; isolation: isolate; }
        .skills-block::after { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none; opacity: .3; }
        .skills-block.visual-frontend::after { background: linear-gradient(var(--line-soft) 1px,transparent 1px),linear-gradient(90deg,var(--line-soft) 1px,transparent 1px); background-size: 24px 24px; }
        .skills-block.visual-backend::after { background: repeating-linear-gradient(180deg,transparent 0 34px,var(--line-soft) 35px 37px); }
        .skills-block.visual-tools::after { background: radial-gradient(circle at 11px 11px,var(--signal) 1px,transparent 1.5px); background-size: 22px 22px; opacity: .16; }

        /* ---------- contact ---------- */
        .contact-block {
          border: 1px solid var(--line-soft); padding: 72px 56px; text-align: center;
          position: relative;
        }
        @media(max-width:600px) { .contact-block { padding: 48px 24px; } }
        .contact-block h2 {
          font-family: var(--display); font-weight: 700; font-size: clamp(30px,5vw,52px);
          letter-spacing: -0.01em; max-width: 680px; margin: 0 auto 20px;
        }
        .contact-block p { color: var(--ink-dim); max-width: 480px; margin: 0 auto 36px; }
        .contact-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        /* ---------- footer ---------- */
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

        /* ---------- Visa Process Resume Styles ---------- */
        @media (min-width: 769px) {
          .steps-wrapper {
            position: relative;
            height: 560px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 60px;
            margin-bottom: -240px;
            width: calc(100% + 80px);
            margin-left: -40px;
          }
          .step-card {
            position: absolute;
            width: 230px;
            height: 430px;
            left: 50%;
            top: 50%;
            margin-top: -215px; /* Center vertically */
            margin-left: -115px; /* Center horizontally */
            transform-origin: center center;
            background: #ffffff;
            border: 1px solid rgba(143, 211, 232, 0.08);
            border-radius: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, background-color 0.3s;
            overflow: visible;
          }
          .step-card:nth-child(1) {
            z-index: 1;
            transform: translateX(calc(-470px * var(--step-1-progress))) translateY(calc(-45px * var(--step-1-progress)));
          }
          .step-card:nth-child(2) {
            z-index: 2;
            transform: translateX(calc(-235px * var(--step-2-progress))) translateY(calc(45px * var(--step-2-progress)));
          }
          .step-card:nth-child(3) {
            z-index: 3;
            transform: translateY(calc(-45px * var(--step-3-progress)));
          }
          .step-card:nth-child(4) {
            z-index: 4;
            transform: translateX(calc(235px * var(--step-4-progress))) translateY(calc(45px * var(--step-4-progress)));
          }
          .step-card:nth-child(5) {
            z-index: 5;
            transform: translateX(calc(470px * var(--step-5-progress))) translateY(calc(-45px * var(--step-5-progress)));
          }
        }
        @media (max-width: 768px) {
          .steps-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: auto;
            width: 100%;
            margin-top: 40px;
          }
          .step-card {
            background: #ffffff;
            border: 1px solid rgba(143, 211, 232, 0.08);
            border-radius: 20px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            position: relative;
            min-height: 400px;
            transition: all 0.4s ease;
            overflow: hidden;
            width: 100%;
            transform: none !important;
          }
          .journey-label,
          .step-card:nth-child(odd) .journey-label,
          .step-card:nth-child(even) .journey-label {
            position: static;
            display: block;
            width: auto;
            transform: none;
            text-align: left;
            margin-bottom: 14px;
          }
          .journey-label img { display: none; }
        }
        .step-card:hover {
          border-color: rgba(255, 107, 53, 0.4);
          background: #ffffff;
        }
        .step-card.active {
          border-color: #FF6B35;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.05);
        }
        #resume { padding-bottom: 20px; }
        #contact { padding-top: 20px; }
        .step-badge {
          align-self: flex-start;
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 5px 12px;
          border-radius: 100px;
          text-transform: uppercase;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 107, 53, 0.3);
          background: rgba(255, 107, 53, 0.1);
          color: #FF6B35;
        }
        .step-badge.purple {
          border-color: rgba(168, 85, 247, 0.3);
          background: rgba(168, 85, 247, 0.1);
          color: #c084fc;
        }
        .step-badge.blue {
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
        }
        .step-badge.green {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
        }
        .step-badge.orange {
          border-color: rgba(249, 115, 22, 0.3);
          background: rgba(249, 115, 22, 0.1);
          color: #fb923c;
        }
        .step-badge.slate {
          border-color: rgba(148, 163, 184, 0.3);
          background: rgba(148, 163, 184, 0.1);
          color: #cbd5e1;
        }
        .step-header {
          margin-bottom: 16px;
        }
        .step-title {
          font-family: var(--display);
          font-size: 20px;
          font-weight: 600;
          color: #0E1B2E;
          line-height: 1.3;
          margin: 0 0 6px 0;
        }
        .step-subtitle {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--ink-faint);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .step-content {
          flex-grow: 1;
          margin-bottom: 32px;
          overflow: hidden;
        }
        .step-description {
          font-size: 13px;
          color: var(--ink-dim);
          line-height: 1.6;
          margin: 0;
        }
        .step-list {
          list-style: none;
          padding: 0;
          margin: 12px 0 0 0;
        }
        .step-list li {
          font-size: 12px;
          color: var(--ink-dim);
          position: relative;
          padding-left: 16px;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .step-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #FF6B35;
        }
        .step-image {
          width: 100%;
          height: 160px;
          border-radius: 12px;
          border: 1px solid rgba(143, 211, 232, 0.06);
          margin: 0 0 20px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          position: relative;
        }
        .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: all 0.4s ease;
        }
        .step-card:hover .step-image img {
          opacity: 0.95;
          transform: scale(1.05);
        }
        .step-card.active .step-image img {
          opacity: 0.9;
        }
        .step-period-overlay {
          position: absolute;
          right: 10px;
          bottom: 8px;
          color: #ffffff;
          font-family: var(--display);
          font-size: 13px;
          font-weight: 700;
          text-shadow: 0 2px 8px rgba(0,0,0,0.75);
        }
        .journey-label {
          position: absolute;
          left: 50%;
          width: 210px;
          transform: translateX(-50%);
          text-align: center;
          color: var(--ink);
          font-family: var(--display);
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
          pointer-events: none;
        }
        .journey-label img {
          display: block;
          width: 54px;
          height: 48px;
          margin: 6px auto 0;
          object-fit: contain;
        }
        .step-card:nth-child(even) .journey-label img {
          transform: rotate(180deg);
        }
        .step-card:nth-child(odd) .journey-label {
          bottom: -92px;
          display: flex;
          flex-direction: column-reverse;
        }
        .step-card:nth-child(odd) .journey-label img {
          transform: none;
          margin: 0 auto 6px;
        }
        .step-card:nth-child(even) .journey-label { top: -86px; }
        .journey-year {
          position: absolute;
          right: 18px;
          bottom: 14px;
          color: var(--signal);
          font-family: var(--display);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -0.03em;
          max-width: calc(100% - 36px);
          text-align: right;
        }
        @media (max-width: 768px) {
          .journey-label,
          .step-card:nth-child(odd) .journey-label,
          .step-card:nth-child(even) .journey-label {
            position: static;
            display: flex;
            flex-direction: column;
            width: auto;
            transform: none;
            text-align: left;
            margin-bottom: 14px;
          }
          .journey-label img,
          .step-card:nth-child(odd) .journey-label img,
          .step-card:nth-child(even) .journey-label img {
            display: block;
            width: 48px;
            height: 42px;
            margin: 6px 0 0 18px;
            transform: rotate(180deg);
          }
        }
        @media (min-width: 769px) {
          .step-list { display: none; }
        }
        .skills-block {
          background: var(--navy-deep);
          padding: 24px;
          position: relative;
        }
        .skills-title {
          font-family: var(--display);
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 18px;
        }
        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .skill-cat {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cat-name {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--signal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .cat-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-dim);
          background: rgba(14,27,46,0.5);
          border: 1px solid var(--line-soft);
          padding: 4px 10px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .skill-tag:hover {
          border-color: var(--signal);
          color: var(--ink);
        }

        /* ---------- reveal on scroll ---------- */
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

        /* ── Fanned Documents Projects Section ── */
        .documents-container {
          width: 100%;
          overflow: hidden;
          padding: 40px 0 80px 0;
          position: relative;
        }

        .documents-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 40px;
          position: relative;
          min-height: 480px;
        }

        @media (max-width: 768px) {
          .documents-wrapper {
            flex-direction: column;
            gap: 24px;
            padding: 20px;
            min-height: auto;
            justify-content: center;
          }
        }

        .document-card {
          width: 230px;
          height: 345px;
          background: #0E1B2E;
          border: 1px solid rgba(143, 211, 232, 0.15);
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
          transition: border-color 0.3s, background-color 0.3s, box-shadow 0.3s;
          position: absolute;
          cursor: pointer;
          transform-origin: bottom center;
          transform: rotate(0deg) translateY(0px) translateX(0px);
        }

        @media (max-width: 768px) {
          .document-card {
            position: relative;
            width: 100%;
            max-width: 280px;
            height: 360px;
            transform: none !important;
          }
        }

        @media (min-width: 769px) {
          .document-card:nth-child(1) { 
            z-index: 1;
            transform: translateX(calc(-470px * var(--scroll-progress))) translateY(calc(-38px * var(--scroll-progress))); 
          }
          .document-card:nth-child(2) { 
            z-index: 2;
            transform: translateX(calc(-235px * var(--scroll-progress))) translateY(calc(38px * var(--scroll-progress))); 
          }
          .document-card:nth-child(3) { 
            z-index: 3;
            transform: translateX(0px) translateY(calc(-38px * var(--scroll-progress))); 
          }
          .document-card:nth-child(4) { 
            z-index: 4;
            transform: translateX(calc(235px * var(--scroll-progress))) translateY(calc(38px * var(--scroll-progress))); 
          }
          .document-card:nth-child(5) { 
            z-index: 5;
            transform: translateX(calc(470px * var(--scroll-progress))) translateY(calc(-38px * var(--scroll-progress))); 
          }

        }

        .document-title {
          font-family: var(--display);
          font-size: 15px;
          font-weight: 500;
          color: #EDEFF2;
          text-align: center;
          letter-spacing: -0.01em;
        }

        @media (min-width: 769px) {
          .document-title.desktop-only {
            display: block;
            position: absolute;
            top: -36px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            white-space: nowrap;
            pointer-events: none;
          }
          .document-title.mobile-only {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .document-card {
            width: 100%;
            max-width: 280px;
            height: 360px;
            transform: none !important;
          }
          .document-title.desktop-only {
            display: none;
          }
          .document-title.mobile-only {
            display: block;
            margin-top: 14px;
            margin-bottom: 0;
          }
        }

        .document-image {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .document-preview-desc {
          font-size: 11px;
          color: #8FA2B8;
          line-height: 1.4;
          margin-top: 8px;
        }

        .document-preview-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .document-preview-tech span {
          font-family: var(--mono);
          font-size: 9px;
          color: #FF6B35;
          background: rgba(255, 107, 53, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .document-preview-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: var(--mono);
          font-size: 10px;
          color: rgba(143, 211, 232, 0.5);
        }

        /* ── Section Header Spacers ── */
        @media (min-width: 769px) {
          .sec-head-spacer {
            display: block;
          }
        }
        }

        [data-theme="light"] .text-white {
          color: var(--ink) !important;
        }
        [data-theme="light"] .jordan-body {
          background-color: #ffffff;
        }
        [data-theme="light"] header.jordan-header {
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
          border-color: rgba(79, 127, 163, 0.2);
        }
        [data-theme="light"] body.scrolled header.jordan-header,
        [data-theme="light"] body.scrolled header.jordan-header:hover {
          background: rgba(0, 0, 0, 0.96);
          border-color: rgba(255, 107, 53, 0.35);
          box-shadow: 0 20px 40px rgba(14, 27, 46, 0.3);
        }
        [data-theme="light"] body.scrolled header.jordan-header .logo,
        [data-theme="light"] body.scrolled header.jordan-header .nav-links a { color: #EDEFF2; }
        [data-theme="dark"] body.scrolled header.jordan-header,
        [data-theme="dark"] body.scrolled header.jordan-header:hover {
          background: rgba(0, 0, 0, 0.96);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }
        [data-theme="light"] header.jordan-header .logo,
        [data-theme="light"] header.jordan-header .nav-links a {
          color: var(--ink);
        }
        [data-theme="light"] header.jordan-header .nav-links a:hover {
          color: var(--signal);
        }
        [data-theme="light"] .hero .btn-primary {
          background: var(--signal);
          color: white;
        }
        [data-theme="light"] .btn-ghost {
          border-color: var(--ink);
          color: var(--ink);
        }
        [data-theme="light"] .btn-ghost:hover {
          background: rgba(14, 27, 46, 0.05);
        }
        [data-theme="light"] .step-card {
          background: #ffffff;
          border: 1px solid rgba(14, 27, 46, 0.08);
        }
        [data-theme="light"] .proj-card,
        [data-theme="light"] .proj-card:hover,
        [data-theme="light"] .skill-cat,
        [data-theme="light"] .skills-block,
        [data-theme="light"] .contact-block {
          background: #ffffff;
        }
        [data-theme="light"] .step-card .step-title {
          color: var(--ink);
        }
        [data-theme="light"] .skills-block {
          background: #ffffff;
        }
        [data-theme="light"] .skill-tag {
          background: #ffffff;
        }
        [data-theme="light"] .document-card {
          background: #ffffff;
          border: 1px solid rgba(14, 27, 46, 0.15);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
        [data-theme="light"] .document-title {
          color: var(--ink);
        }
        [data-theme="light"] .sec-head h2 {
          color: var(--ink) !important;
        }
      ` }} />


      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div className="jordan-body min-h-screen text-slate-100 selection:bg-[#FF6B35] selection:text-[#0A1422]">
        <ThemeToggle />

        <header className="jordan-header">
          <nav className="nav">
            <a href="#top" className="logo">
              <span className="dot"></span><span key={headerCollapsed ? activeSection : 'name'} className="logo-label">{headerCollapsed ? activeSection : 'AJIT KUSHWAHA'}</span>
            </a>
            <ul className="nav-links">
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="/trial/blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <span className="nav-loc">AHMEDABAD, IN — 23.0N 72.5E</span>
          </nav>
        </header>

        <main id="top" style={{ display: 'block', width: '100%', maxWidth: 'none', margin: '0', padding: '0' }}>

          <div className="wrap">
            <section className="hero" style={{ paddingBottom: 0 }}>
              <div className="hero-canvas-wrap" id="heroCanvasWrap" aria-hidden="true" />
              <div>
                <p className="eyebrow">AVAILABLE FOR WORK / Q3 2026</p>
                <h1 className="jordan-h1 text-white">Full-stack products built for <span className="accent">production.</span></h1>
                <p className="hero-sub font-normal">
                  <strong>Ajit Kushwaha</strong> — Full Stack Developer building reliable SaaS
                  applications across frontend, backend, databases, integrations, and deployment.
                </p>
                <div className="hero-actions">
                  <a href="#work" className="btn btn-primary">View the work →</a>
                  <a href="#contact" className="btn btn-ghost">Discuss an opportunity</a>
                  <a href="/AJIT_KUSHWAHA.pdf" download="Ajit-Kushwaha-Resume.pdf" className="btn btn-ghost">Download résumé ↓</a>
                </div>
              </div>

              <div className="spec-panel">
                <div className="spec-item"><div className="k">Based in</div><div className="v text-white">Ahmedabad, India</div></div>
                <div className="spec-item"><div className="k">Experience</div><div className="v text-white">3+ years</div></div>
                <div className="spec-item"><div className="k">Focus</div><div className="v text-white">SaaS / Full-stack</div></div>
                <div className="spec-item"><div className="k">Status</div><div className="v text-white">Open to roles</div></div>
              </div>
            </section>
          </div>

          <div className="wrap">
            <section id="work" className="reveal">
              <div className="sec-head sec-head-work">
                <p className="sec-tag">Index <span>01</span> — Selected work</p>
                <div className="sec-head-work-center">
                  <h2 className="text-white">Recent builds</h2>
                  <p className="sec-note">A handful of products from the last two years. Each one shipped to real users.</p>
                </div>
                <div className="sec-head-spacer"></div>
              </div>

              {/* Interactive Fanned Projects Showcase */}
              <div
                ref={containerRef}
                className="documents-container"
                style={{ '--scroll-progress': scrollProgress } as React.CSSProperties}
              >
                <div className="documents-wrapper animated">
                  {featuredProjects.map((project, idx) => (
                    <a
                      key={idx}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="document-card ng-star-inserted"
                    >
                      <div className="document-title desktop-only">{project.title}</div>
                      <div className="document-image">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{
                              width: '100%',
                              height: '110px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              marginBottom: '10px'
                            }}
                          />
                        )}
                        <span className="document-preview-badge">{project.id}</span>
                        <div className="document-preview-desc" style={{ flexGrow: 1 }}>
                          {project.description}
                        </div>
                        <div className="document-preview-tech" style={{ marginTop: '8px' }}>
                          {project.stack.slice(0, 3).map((tech, tIdx) => (
                            <span key={tIdx}>{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="document-title mobile-only">{project.title}</div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="proj-grid">
                {featuredProjects.map((project, idx) => (
                  <div key={idx} className="proj-card bracketed">
                    <span className="bk-tr"></span><span className="bk-br"></span>
                    <div className="proj-id">
                      <span>{project.id}</span>
                      <span className="tag">{project.category}</span>
                    </div>
                    <h3 className="text-white">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="proj-stack">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx}>{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                      View project →
                    </a>
                  </div>
                ))}
              </div>

              <div className="view-all" style={{ gap: '16px', flexWrap: 'wrap' }}>
                <a href="/trial/projects" className="btn btn-primary">
                  View all projects →
                </a>
                <a href="https://github.com/ajitkushawaha" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  View all projects on GitHub →
                </a>
              </div>
            </section>
          </div>

          <div className="wrap">
            <section id="about" className="reveal">
              <div className="sec-head">
                <p className="sec-tag">Index <span>02</span> — Profile</p>
                <div className="sec-head-center">
                  <h2 className="text-white">About</h2>
                </div>
                <div className="sec-head-spacer"></div>
              </div>

              <div className="about-grid">
                <div className="about-photo bracketed">
                  <span className="bk-tr"></span><span className="bk-br"></span>
                  <div className="ph-fill" style={{ backgroundImage: `url('/icons/ajit.jpeg')` }}>
                    <div className="ph-label">AJIT KUSHWAHA</div>
                  </div>
                </div>
                <div className="about-copy">
                  <p><strong className="text-white">I&apos;ve always cared more about how things work than how they look on a pitch deck.</strong></p>
                  <p>
                    I started out breaking things on purpose — web servers, UI components,
                    then production databases (once, briefly). Somewhere along the way that
                    curiosity turned into a job: building software, structuring system APIs, and
                    co-founding Codyn.
                  </p>
                  <p>
                    Today, people come to me with a rough idea and a deadline, and I
                    help turn it into something their customers or team can rely on.
                    I care deeply about performance optimization, load times, robust type systems,
                    and direct communications.
                  </p>
                  <p>Outside of code, I am passionate about learning emerging technologies, reading engineering newsletters, and working on next-generation Web platforms.</p>

                  <div className="about-socials">
                    <a href="https://www.linkedin.com/in/ajitreact/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/ajitkushawaha" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:ajit.kushwaha.work@gmail.com">Email</a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="wrap">
            <section id="toolkit" className="reveal">
              <div className="sec-head">
                <p className="sec-tag">Index <span>03</span> — Toolkit</p>
                <div className="sec-head-center">
                  <h2 className="text-white">Stack &amp; focus</h2>
                </div>
                <div className="sec-head-spacer"></div>
              </div>

              <div className="skills-categories-grid">
                <div className="skills-block visual-frontend bracketed">
                  <span className="bk-tr"></span><span className="bk-br"></span>
                  <h4 className="skills-title text-white">Frontend</h4>
                  <div className="cat-tags">
                    {['React.js', 'Next.js', 'React Native', 'Redux Toolkit', 'Context API', 'JavaScript (ES6+)', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3'].map((s, idx) => (
                      <span key={idx} className="skill-tag" style={{ borderColor: skillColors[s] }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="skills-block visual-backend bracketed">
                  <span className="bk-tr"></span><span className="bk-br"></span>
                  <h4 className="skills-title text-white">Backend</h4>
                  <div className="cat-tags">
                    {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'Socket.io', 'WebSocket'].map((s, idx) => (
                      <span key={idx} className="skill-tag" style={{ borderColor: skillColors[s] }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="skills-block visual-tools bracketed">
                  <span className="bk-tr"></span><span className="bk-br"></span>
                  <h4 className="skills-title text-white">Other / Tools</h4>
                  <div className="cat-tags">
                    {['Git', 'GitHub', 'AI Integration', 'Sensors', 'Render', 'Railway', 'Vercel', 'Hostinger', 'GoDaddy', 'RTSP Streaming', 'IoT'].map((s, idx) => (
                      <span key={idx} className="skill-tag" style={{ borderColor: skillColors[s] }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="focus-list">
                <div className="focus-item"><div className="k">FOCUS — 01</div><div className="v text-white">Full-stack development</div></div>
                <div className="focus-item"><div className="k">FOCUS — 02</div><div className="v text-white">API &amp; database architecture</div></div>
                <div className="focus-item"><div className="k">FOCUS — 03</div><div className="v text-white">AI integration &amp; chatbots</div></div>
              </div>
            </section>
          </div>

          <div className="wrap">
            <section id="resume" className="reveal">
              <div className="sec-head">
                <p className="sec-tag">Index <span>04</span> — Timeline</p>
                <div className="sec-head-center">
                  <h2 className="text-white">Resume</h2>
                  <p className="sec-note">Education, professional experience, and core competencies.</p>
                </div>
                <div className="sec-head-spacer"></div>
              </div>

              <div
                ref={resumeContainerRef}
                className="steps-wrapper"
                style={{
                  '--step-1-progress': Math.min(Math.max(resumeScrollProgress * 2.5, 0), 1),
                  '--step-2-progress': Math.min(Math.max((resumeScrollProgress - 0.15) * 2.5, 0), 1),
                  '--step-3-progress': Math.min(Math.max((resumeScrollProgress - 0.3) * 2.5, 0), 1),
                  '--step-4-progress': Math.min(Math.max((resumeScrollProgress - 0.45) * 2.5, 0), 1),
                  '--step-5-progress': Math.min(Math.max((resumeScrollProgress - 0.6) * 2.5, 0), 1),
                } as React.CSSProperties}
              >
                {resumeTimeline.map((step, idx) => (
                  <div key={idx} className={`step-card visible ${step.active ? 'active' : ''}`}>
                    <div className="journey-label">
                      <span>{step.title}</span>
                      <img src={`/assets/images/resume-arrows/arrow-${(idx % 3) + 1}.svg`} alt="" aria-hidden="true" />
                    </div>
                    <div className="step-header">
                      <h3 className="step-title">{step.company}</h3>
                    </div>
                    <span className="journey-year">{step.period.replace(/ - /g, ' — ')}</span>
                    <div className="step-content">
                      <p className="step-description">{step.description}</p>
                      {step.details && (
                        <ul className="step-list">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="wrap">
            <section id="contact" className="reveal">
              <div className="contact-block bracketed">
                <span className="bk-tr"></span><span className="bk-br"></span>
                <h2 className="text-white">Building something worth building? Let&apos;s talk.</h2>
                <p>I take on a small number of projects at a time. If that overlaps with what you&apos;re working on, get in touch.</p>
                <div className="contact-actions">
                  <a href="mailto:ajit.kushwaha.work@gmail.com" className="btn btn-primary">Email me →</a>
                  <a href="https://www.linkedin.com/in/ajitreact/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
                  <a href="/AJIT_KUSHWAHA.pdf" download="Ajit-Kushwaha-Resume.pdf" className="btn btn-ghost">Download résumé ↓</a>
                </div>
              </div>
            </section>
          </div>

        </main>

        <Footer />

      </div>
    </>
  )
}
