"use client"

import { useEffect, useState, useRef } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const targetPosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number>()

  useEffect(() => {
    // Animation fluide avec interpolation
    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.08,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.08,
      }))
      animationFrame.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.pageX, y: e.pageY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [isVisible])

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 w-full h-full z-50"
      style={{ minHeight: "100vh" }}
      aria-hidden="true"
    >
      {/* Lueur principale douce */}
      <div
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          width: "1000px",
          height: "1000px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, 
            oklch(0.7 0.18 272 / 0.12) 0%, 
            oklch(0.62 0.14 270 / 0.06) 30%, 
            transparent 55%
          )`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-out",
          filter: "blur(80px)",
        }}
      />
      {/* Lueur centrale subtile */}
      <div
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, 
            oklch(0.75 0.2 272 / 0.15) 0%, 
            oklch(0.65 0.16 270 / 0.06) 35%, 
            transparent 55%
          )`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-out",
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}
