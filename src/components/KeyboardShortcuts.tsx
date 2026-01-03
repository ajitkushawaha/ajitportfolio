'use client'

import React, { useState, useEffect } from 'react'

export default function KeyboardShortcuts() {
  const [showShortcuts, setShowShortcuts] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ctrl/Cmd + ? for shortcuts
      if ((event.ctrlKey || event.metaKey) && event.key === '?') {
        event.preventDefault()
        setShowShortcuts(prev => !prev)
      }
      
      // Escape to close shortcuts
      if (event.key === 'Escape') {
        setShowShortcuts(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!showShortcuts) return null

  return (
    <div className="keyboard-shortcuts-overlay" onClick={() => setShowShortcuts(false)}>
      <div className="keyboard-shortcuts-modal" onClick={(e) => e.stopPropagation()}>
        <div className="shortcuts-header">
          <h3>Keyboard Shortcuts</h3>
          <button 
            onClick={() => setShowShortcuts(false)}
            className="close-shortcuts"
            aria-label="Close shortcuts"
          >
            ×
          </button>
        </div>
        <div className="shortcuts-list">
          <div className="shortcut-item">
            <span className="shortcut-key">Ctrl/Cmd + K</span>
            <span className="shortcut-description">Toggle theme</span>
          </div>
          <div className="shortcut-item">
            <span className="shortcut-key">Ctrl/Cmd + ?</span>
            <span className="shortcut-description">Show/hide shortcuts</span>
          </div>
          <div className="shortcut-item">
            <span className="shortcut-key">Escape</span>
            <span className="shortcut-description">Close modals/shortcuts</span>
          </div>
        </div>
      </div>
    </div>
  )
}
