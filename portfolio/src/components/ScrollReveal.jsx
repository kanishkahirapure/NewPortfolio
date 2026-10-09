import { useEffect, useRef } from 'react'

function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      element?.classList.add('reveal--visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.transitionDelay = `${delay}ms`
          element.classList.add('reveal--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default ScrollReveal
