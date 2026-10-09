import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const directions = {
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  'up-right': { x: 0.7, y: -0.7 },
  'up-left': { x: -0.7, y: -0.7 },
  'down-right': { x: 0.7, y: 0.7 },
  'down-left': { x: -0.7, y: 0.7 },
}

const staggerOrigins = {
  'left-to-right': 'start',
  'right-to-left': 'end',
  outward: 'center',
  random: 'random',
}

function getText(children) {
  return Children.toArray(children).map((child) => {
    if (typeof child === 'string' || typeof child === 'number') return String(child)
    if (isValidElement(child)) return child.type === 'br' ? ' ' : getText(child.props.children)
    return ''
  }).join('')
}

function splitCharacters(children, indexRef, characterRefs) {
  return Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      const tokens = String(child).match(/\s+|[^\s]+/gu) || []

      return tokens.map((token) => {
        if (/^\s+$/u.test(token)) return token

        const wordStart = indexRef.current
        const characters = Array.from(token).map((character) => {
          const index = indexRef.current++
          return (
            <span
              className="flying-text__char"
              key={`${index}-${character}`}
              ref={(element) => {
                characterRefs.current[index] = element
              }}
            >
              {character}
            </span>
          )
        })

        return <span className="flying-text__word" key={`word-${wordStart}`}>{characters}</span>
      })
    }

    if (isValidElement(child) && child.props.children != null) {
      return cloneElement(child, {}, splitCharacters(child.props.children, indexRef, characterRefs))
    }

    return child
  })
}

function randomOffset(index, salt, amount) {
  const value = Math.sin((index + 1) * (salt + 12.9898)) * 43758.5453
  const normalized = value - Math.floor(value)
  return (normalized * 2 - 1) * amount
}

function FlyingText({
  as: Tag = 'span',
  children,
  className = '',
  id,
  direction = 'right',
  strength = 100,
  scatter = 0.5,
  rotation = 18,
  stagger = 0.025,
  mode = 'scatter',
  duration = 0.9,
  revealOrder = 'left-to-right',
  start = 'top 82%',
}) {
  const rootRef = useRef(null)
  const characterRefs = useRef([])
  const indexRef = useRef(0)
  const accessibleText = getText(children)
  indexRef.current = 0
  const visualChildren = splitCharacters(children, indexRef, characterRefs)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    let context
    let observer
    let resizeFrame = 0
    let disposed = false
    let fontsReady = false
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const buildAnimation = () => {
      if (disposed || !fontsReady) return
      context?.revert()
      context = undefined

      if (reducedMotion.matches) return

      const characters = characterRefs.current.filter(Boolean)
      if (characters.length === 0) return

      const rootBounds = root.getBoundingClientRect()
      const positions = characters.map((character) => {
        const bounds = character.getBoundingClientRect()
        return (bounds.left + bounds.width / 2 - rootBounds.left) / Math.max(rootBounds.width, 1)
      })
      const vector = directions[direction] || directions.right
      const strengthValue = Math.max(0, Number(strength) || 0)
      const scatterValue = Math.max(0, Number(scatter) || 0)
      const rotationValue = Math.max(0, Number(rotation) || 0)
      const origin = staggerOrigins[revealOrder] || 'start'
      const isReveal = mode === 'reveal'

      context = gsap.context(() => {
        gsap.fromTo(
          characters,
          isReveal ? {
            x: (index) => -vector.x * strengthValue * 0.35 + randomOffset(index, 2, strengthValue * scatterValue * 0.2),
            y: (index) => -vector.y * strengthValue * 0.35 + randomOffset(index, 3, strengthValue * scatterValue * 0.2),
            z: (index) => randomOffset(index, 4, strengthValue * 0.15),
            rotationX: (index) => randomOffset(index, 5, rotationValue),
            rotationY: (index) => randomOffset(index, 6, rotationValue),
            rotation: (index) => randomOffset(index, 7, rotationValue),
            autoAlpha: 0,
            scale: 0.84,
          } : {
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            rotation: 0,
            autoAlpha: 1,
            scale: 1,
          },
          {
            x: (index) => isReveal ? 0 : vector.x * strengthValue + (positions[index] - 0.5) * strengthValue * scatterValue + randomOffset(index, 8, strengthValue * scatterValue),
            y: (index) => isReveal ? 0 : vector.y * strengthValue + randomOffset(index, 9, strengthValue * scatterValue),
            z: (index) => isReveal ? 0 : randomOffset(index, 10, strengthValue * scatterValue),
            rotationX: (index) => isReveal ? 0 : randomOffset(index, 11, rotationValue),
            rotationY: (index) => isReveal ? 0 : randomOffset(index, 12, rotationValue),
            rotation: (index) => isReveal ? 0 : randomOffset(index, 13, rotationValue),
            autoAlpha: isReveal ? 1 : 0,
            scale: 1,
            duration,
            ease: 'power2.inOut',
            stagger: { each: stagger, from: origin },
            scrollTrigger: {
              trigger: root,
              start,
              end: () => `+=${Math.max(240, Math.round(window.innerHeight * duration))}`,
              scrub: 0.35,
              invalidateOnRefresh: true,
            },
          },
        )
      }, root)

      ScrollTrigger.refresh()
    }

    const scheduleResize = () => {
      if (!fontsReady || reducedMotion.matches) return
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(buildAnimation)
    }

    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        context?.revert()
        context = undefined
      } else {
        buildAnimation()
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(scheduleResize)
      observer.observe(root)
    }
    window.addEventListener('resize', scheduleResize)
    reducedMotion.addEventListener?.('change', handleMotionChange)

    const fontPromise = document.fonts?.ready || Promise.resolve()
    fontPromise.then(() => {
      if (disposed) return
      fontsReady = true
      buildAnimation()
    })

    return () => {
      disposed = true
      cancelAnimationFrame(resizeFrame)
      observer?.disconnect()
      window.removeEventListener('resize', scheduleResize)
      reducedMotion.removeEventListener?.('change', handleMotionChange)
      context?.revert()
    }
  }, [accessibleText, direction, duration, mode, revealOrder, rotation, scatter, stagger, start, strength])

  return (
    <Tag id={id} ref={rootRef} className={`flying-text ${className}`.trim()}>
      <span className="flying-text__sr-only">{accessibleText}</span>
      <span className="flying-text__visual" aria-hidden="true">{visualChildren}</span>
    </Tag>
  )
}

export default FlyingText