"use client"

import { useEffect, useRef, useCallback } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number | null>(null)
  const isAnimating = useRef(false)
  const isVisible = useRef(false)

  const animate = useCallback(() => {
    const dx = targetPosition.current.x - currentPosition.current.x
    const dy = targetPosition.current.y - currentPosition.current.y
    
    // Si la différence est minime, arrêter l'animation pour économiser le CPU
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
      currentPosition.current = { ...targetPosition.current }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) translate(-50%, -50%)`
      }
      isAnimating.current = false
      return
    }

    // Interpolation fluide avec lerp factor réduit pour moins de calculs
    currentPosition.current.x += dx * 0.15
    currentPosition.current.y += dy * 0.15

    // Manipulation directe du DOM avec translate3d pour accélération GPU
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) translate(-50%, -50%)`
    }

    animationFrame.current = requestAnimationFrame(animate)
  }, [])

  const startAnimation = useCallback(() => {
    if (!isAnimating.current) {
      isAnimating.current = true
      animationFrame.current = requestAnimationFrame(animate)
    }
  }, [animate])

  useEffect(() => {
    // Désactiver sur mobile/tablette et si l'utilisateur préfère moins de mouvement
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouchDevice || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      
      if (!isVisible.current && glowRef.current) {
        isVisible.current = true
        glowRef.current.style.opacity = "1"
      }
      
      startAnimation()
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        isVisible.current = false
        glowRef.current.style.opacity = "0"
      }
      // Arrêter l'animation quand la souris sort
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
        isAnimating.current = false
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      // Initialiser la position immédiatement pour éviter un saut
      targetPosition.current = { x: e.clientX, y: e.clientY }
      currentPosition.current = { x: e.clientX, y: e.clientY }
      
      if (glowRef.current) {
        isVisible.current = true
        glowRef.current.style.opacity = "1"
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [startAnimation])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Lueur unique optimisée - utilise une seule div au lieu de deux */}
      <div
        ref={glowRef}
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle at center, 
            rgba(139, 92, 246, 0.12) 0%, 
            rgba(99, 102, 241, 0.06) 30%, 
            transparent 60%
          )`,
          opacity: 0,
          transition: "opacity 0.3s ease-out",
          borderRadius: "50%",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  )
}
