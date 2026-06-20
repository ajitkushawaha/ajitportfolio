'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function SmoothScroll() {
  const pathname = usePathname()
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let lenis: any = null
    let rafId: number | null = null

    // Load Lenis script dynamically
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.36/dist/lenis.min.js'
    script.onload = () => {
      const LenisClass = (window as any).Lenis
      if (!LenisClass) return

      // Initialize Lenis
      lenis = new LenisClass({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      })
      lenisRef.current = lenis

      // Animation frame loop
      const raf = (time: number) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }
    document.body.appendChild(script)

    return () => {
      if (lenis) {
        lenis.destroy()
      }
      if (rafId !== null) cancelAnimationFrame(rafId)
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  // Reset scroll and notify Lenis when the page route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
