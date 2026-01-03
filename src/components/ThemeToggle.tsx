'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { Sun, Moon, Loader2 } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = useCallback(async () => {
    if (isLoading) return
    
    setIsLoading(true)
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 150))
    
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
    
    setIsLoading(false)
  }, [isLoading])

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K for theme toggle
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        toggleTheme()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [toggleTheme])

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode (Ctrl/Cmd + K)`}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 size={20} className="theme-icon animate-spin" />
      ) : theme === 'light' ? (
        <Moon size={20} className="theme-icon" />
      ) : (
        <Sun size={20} className="theme-icon" />
      )}
    </button>
  )
}
