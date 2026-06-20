'use client'

import React, { useEffect, useState } from 'react'

const allProjects = [
  // SaaS
  {
    id: '01',
    filterCat: 'saas',
    category: 'SaaS / AI Support',
    title: 'KwickLingo Chat Widget',
    description: 'An intelligent AI-powered chat widget to replace manual customer support operations with automated messaging.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://kwicklingo.com/'
  },
  {
    id: '02',
    filterCat: 'saas',
    category: 'SaaS / Restaurant Management System',
    title: 'Manage MyCafe',
    description: 'ManageMy.cafe is a digital QR-menu & online ordering platform for restaurants/cafes in India.',
    stack: ['React', 'Express', 'MongoDB', 'Node.js'],
    link: 'https://managemy.cafe'
  },
  {
    id: '03',
    filterCat: 'saas',
    category: 'SaaS / Operations',
    title: 'Parking Management System',
    description: 'Smart parking solution simplifying facility management, automated billing, and real-time space tracking.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#'
  },
  {
    id: '04',
    filterCat: 'saas',
    category: 'SaaS / Mobile App',
    title: 'Parking Management App',
    description: 'Mobile control app providing drivers with real-time slot bookings and digital payments.',
    stack: ['React Native', 'TypeScript', 'Redux', 'API Integration'],
    link: 'https://pms.conceptserve.com/'
  },
  {
    id: '05',
    filterCat: 'saas',
    category: 'SaaS / AI Tech',
    title: 'BuiAiSolution',
    description: 'Custom AI infrastructure platform for businesses requiring automated document processing.',
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    link: '#'
  },

  // Professional
  {
    id: '06',
    filterCat: 'professional',
    category: 'Professional / Consultancy',
    title: 'Visa4.com',
    description: 'High-performance consultant portal streamlining applicant profiling, document submittals, and visa workflow tracking.',
    stack: ['Next.js', 'PostgreSQL', 'Figma', 'API integration'],
    link: 'https://www.visa4.com'
  },
  {
    id: '07',
    filterCat: 'professional',
    category: 'Professional / Education',
    title: 'Growingwing',
    description: 'Interactive educational platform delivering custom curriculum and virtual learning portals for children.',
    stack: ['React', 'Node.js', 'CSS Modules'],
    link: '#'
  },
  {
    id: '08',
    filterCat: 'professional',
    category: 'Professional / Rental',
    title: 'LucaBoat',
    description: 'Premium boat rental booking service equipped with interactive location filtering and secure reservation checkout.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#'
  },
  {
    id: '09',
    filterCat: 'professional',
    category: 'Professional / Mobile App',
    title: 'Workforce LMS',
    description: 'Workforce LMS is a mobile application for the workforce management system.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Redux'],
    link: 'https://play.google.com/store/apps/details?id=com.anonymous.workforcelms&hl=en_IN'
  },
  {
    id: '10',
    filterCat: 'professional',
    category: 'Professional / NGO',
    title: 'Gect Ngo',
    description: 'Web presence for a non-profit organization featuring donation systems, project showcase, and volunteer registries.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    link: '#'
  },
  {
    id: '11',
    filterCat: 'professional',
    category: 'Professional / Manufacturer',
    title: 'Rakpolyplast',
    description: 'Corporate platform for an industrial manufacturing enterprise presenting catalog data and spec sheets.',
    stack: ['React', 'Bootstrap', 'WordPress'],
    link: 'https://rakpolyplast.com/'
  },
  {
    id: '12',
    filterCat: 'professional',
    category: 'Professional / E-Commerce',
    title: 'Incredible Man',
    description: 'Modern men\'s grooming online store built with custom shopping cart filters and item reviews.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    link: 'https://ajitkushawaha.github.io/incredible-Man/'
  },
  {
    id: '13',
    filterCat: 'professional',
    category: 'Professional / Vehicle Tracking',
    title: 'Visal',
    description: 'Vehicle management system facilitating real-time fleet coordinates, dispatch routes, and maintenance logging.',
    stack: ['React', 'Express', 'MySQL', 'APIs'],
    link: 'https://vfms.co.in/'
  },
  {
    id: '14',
    filterCat: 'professional',
    category: 'Professional / Fashion Store',
    title: 'Mister Bouton',
    description: 'Elegant fashion e-commerce store with high-end typography, catalog configurations, and checkout flows.',
    stack: ['Next.js', 'Stripe', 'Tailwind CSS'],
    link: 'https://www.misterbouton.com/'
  },
  {
    id: '15',
    filterCat: 'professional',
    category: 'Professional / Real Estate',
    title: 'Blue City Real Estate',
    description: 'Real estate listing directory for properties, complete with dynamic filters and direct agent communication portals.',
    stack: ['React', 'API integrations', 'Google Maps'],
    link: 'https://bluecityrealestate.com/'
  },
  {
    id: '16',
    filterCat: 'professional',
    category: 'Professional / Restaurant',
    title: 'London Crust',
    description: 'Interactive restaurant landing page and online menu setup with digital reservations.',
    stack: ['React', 'CSS Modules', 'Vercel'],
    link: 'https://londoncrust.vercel.app/'
  },
  {
    id: '17',
    filterCat: 'professional',
    category: 'Professional / E-Commerce',
    title: 'MeowParivar',
    description: 'A full-featured pet product storefront with custom recommendation filters, payment options, and shipping systems.',
    stack: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: 'https://www.meowprivar.in'
  },

  // Ventures
  {
    id: '18',
    filterCat: 'ventures',
    category: 'Ventures / AI Chatbot',
    title: 'kwicklingo.com',
    description: 'Corporate site for KwickLingo platform, advertising AI chatbot features and developer APIs.',
    stack: ['Next.js', 'Node.js', 'Tailwind CSS'],
    link: 'https://kwicklingo.com'
  },

  // Labs
  {
    id: '19',
    filterCat: 'labs',
    category: 'Labs / E-Commerce',
    title: 'Village Fress',
    description: 'Fresh agricultural produce ordering app equipped with local delivery coordinates and pricing logs.',
    stack: ['React Native', 'Node.js', 'Fastify', 'Socket.io'],
    link: 'https://villagefress.vercel.app/'
  },
  {
    id: '20',
    filterCat: 'labs',
    category: 'Labs / Video Clone',
    title: 'YouTube Clone',
    description: 'High-performance cloning of the YouTube interface displaying mock video streams and feeds.',
    stack: ['React', 'YouTube API', 'CSS Grid'],
    link: 'https://github.com/ajitkushawaha/Youtube'
  },
  {
    id: '21',
    filterCat: 'labs',
    category: 'Labs / Travel Clone',
    title: 'Airbnb Clone',
    description: 'Interactive hotel listings UI featuring travel search fields and responsive maps.',
    stack: ['React', 'Redux', 'Mapbox', 'Tailwind'],
    link: 'https://github.com/ajitkushawaha/Airbnbs'
  },
  {
    id: '22',
    filterCat: 'labs',
    category: 'Labs / Social Clone',
    title: 'Facebook Clone',
    description: 'Social networking frontend showcasing feed updates, likes, user panels, and chats.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://ajitkushawaha.github.io/facebook-clone/'
  },
  {
    id: '23',
    filterCat: 'labs',
    category: 'Labs / Utility App',
    title: 'Contact Manager',
    description: 'Full-stack MERN application to create, update, search, and manage address directories.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/ajitkushawaha/contactManager'
  },
  {
    id: '24',
    filterCat: 'labs',
    category: 'Labs / Food App',
    title: 'Restaurant Website',
    description: 'Fast single page application presenting restaurant specials and custom menu calculators.',
    stack: ['React.js', 'CSS Modules', 'GitHub Pages'],
    link: 'https://ajitkushawaha.github.io/eat-meet'
  },
  {
    id: '25',
    filterCat: 'labs',
    category: 'Labs / Travel App',
    title: 'Adventure Site',
    description: 'Visually stunning landing page for mountain guides, featuring parallax scrolls and interactive galleries.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://ajitkushawaha.github.io/nature/'
  },
  {
    id: '26',
    filterCat: 'labs',
    category: 'Labs / Portfolio',
    title: 'Portfolio Website',
    description: 'Static portfolio webpage displaying basic grid cards and social integrations.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://ajitkushawaha.github.io'
  }
]

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'SaaS' },
  { id: 'professional', label: 'Professional' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'labs', label: 'Labs' }
]

export default function TrialProjects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        document.body.classList.add('scrolled')
      } else {
        document.body.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('scrolled')
    }
  }, [])

  useEffect(() => {
    // Reveal on scroll logic
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal')
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      }, { threshold: 0.01 })

      revealEls.forEach((el) => {
        io.observe(el)
      })

      return () => {
        io.disconnect()
      }
    }, 50)

    return () => {
      clearTimeout(timer)
    }
  }, [activeFilter])

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

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.filterCat === activeFilter)

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
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

        /* ---------- filter tabs ---------- */
        .tabs-list {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .tab-btn {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-dim);
          border: 1px solid var(--line-soft);
          background: rgba(14,27,46,0.5);
          padding: 8px 16px;
          cursor: pointer;
          transition: border-color .2s ease, color .2s ease, background .2s ease;
        }
        .tab-btn:hover {
          border-color: var(--ink-dim);
          color: var(--ink);
        }
        .tab-btn.active {
          border-color: var(--signal);
          color: var(--navy-deep);
          background: var(--signal);
          font-weight: 500;
        }

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
              <p className="eyebrow">ARCHIVE / 26 BUILDS</p>
              <h1 className="jordan-h1 text-white">All projects &amp; <span className="accent">deployments.</span></h1>
            </section>
          </div>

          <div className="wrap">
            <section id="archive" style={{ paddingTop: 0 }}>
              <div className="tabs-list">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`tab-btn ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="proj-grid">
                {filtered.map((project, idx) => (
                  <div key={idx} className="proj-card bracketed reveal">
                    <span className="bk-tr"></span><span className="bk-br"></span>
                    <div className="proj-id">
                      <span>PRJ — {project.id}</span>
                      <span className="tag">{project.category}</span>
                    </div>
                    <h3 className="text-white">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="proj-stack">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx}>{tech}</span>
                      ))}
                    </div>
                    {project.link && project.link !== '#' ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                        View project →
                      </a>
                    ) : (
                      <span className="proj-link" style={{ color: 'var(--ink-faint)', cursor: 'not-allowed' }}>
                        Internal Project
                      </span>
                    )}
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
