'use client'

import { useEffect } from 'react'

export function ScrollHandler() {
  useEffect(() => {
    // Handle initial scroll on page load
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // Add a small delay to ensure proper scroll after page hydration
        setTimeout(() => {
          element.scrollIntoView({ 
            block: 'start'
        })
        }, 100)
      }
    }

    // Handle scroll on hash change
    const handleHashChange = () => {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ 
            block: 'start'
        })
        
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return null
} 