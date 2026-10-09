import { useEffect, useState } from 'react'

export function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.ceil((100 - current) / 12), 100)
        if (next >= 100) window.clearInterval(timer)
        return next
      })
    }, 45)

    const hideTimer = window.setTimeout(() => setVisible(false), 900)
    return () => {
      window.clearInterval(timer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="page-loader" aria-label="Loading portfolio">
      <div className="page-loader__mark">&lt;DEV /&gt;</div>
      <div className="page-loader__track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <span className="page-loader__count">{String(progress).padStart(3, '0')}%</span>
    </div>
  )
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY })
    const enter = () => setActive(true)
    const leave = () => setActive(false)

    window.addEventListener('pointermove', move)
    document.querySelectorAll('a, button, .project-row, .skill-badge').forEach((element) => {
      element.addEventListener('pointerenter', enter)
      element.addEventListener('pointerleave', leave)
    })

    return () => {
      window.removeEventListener('pointermove', move)
      document.querySelectorAll('a, button, .project-row, .skill-badge').forEach((element) => {
        element.removeEventListener('pointerenter', enter)
        element.removeEventListener('pointerleave', leave)
      })
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${active ? 'custom-cursor--active' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    >
      <span>VIEW</span>
    </div>
  )
}
