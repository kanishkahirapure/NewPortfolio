import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import developerPortrait from '../assets/avatar.png'
import './PhotoLoader.css'

const defaultSlides = [
  { type: 'text', text: 'Hello' },
  { type: 'text', text: 'Welcome to' },
  { type: 'text', text: 'My Portfolio' },
  { type: 'photo', src: developerPortrait },
]

const cardMotion = [
  { x: '-19px', y: 14, rotate: '-7deg' },
  { x: '18px', y: 5, rotate: '6deg' },
  { x: '-13px', y: -3, rotate: '-4deg' },
  { x: '15px', y: 9, rotate: '8deg' },
  { x: '-9px', y: -8, rotate: '-3deg' },
  { x: '10px', y: 2, rotate: '5deg' },
]

function PhotoLoader({ slides = defaultSlides, onFinish }) {
  const loaderRef = useRef(null)
  const stackRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const loader = loaderRef.current
    const stack = stackRef.current
    const cards = cardRefs.current

    if (!loader || !stack || cards.length === 0) return undefined

    const slideEase = 'power3.out'
    const exitEase = 'power3.inOut'
    const timeline = gsap.timeline({
      defaults: { ease: slideEase },
      onComplete: onFinish,
    })

    timeline.set(stack, { opacity: 1 })

    cards.forEach((card, index) => {
      const motion = cardMotion[index % cardMotion.length]
      const startY = window.innerHeight * 0.56

      timeline.fromTo(
        card,
        {
          opacity: 0,
          y: startY,
          scale: 0.84,
          rotate: motion.rotate,
        },
        {
          opacity: 1,
          y: motion.y,
          scale: 1,
          rotate: motion.rotate,
          duration: 0.86,
          ease: exitEase,
        },
        index === 0 ? 0 : `-=0.45`,
      )
    })

    timeline
      .to(stack, { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
      .to(stack, {
        opacity: 0,
        y: -window.innerHeight * 0.34,
        scale: 0.96,
        duration: 0.7,
        ease: exitEase,
      })
      .to(loader, {
        opacity: 0,
        duration: 0.28,
        ease: 'power1.inOut',
      })

    return () => timeline.kill()
  }, [onFinish, slides])

  return (
    <div ref={loaderRef} className="photo-loader" aria-label="Loading portfolio">
      <div ref={stackRef} className="photo-loader__stack" aria-hidden="true">
        {slides.map((slide, index) => {
          const motion = cardMotion[index % cardMotion.length]

          return (
            <div
              ref={(element) => {
                if (element) cardRefs.current[index] = element
              }}
              className={`photo-loader__card photo-loader__card--${slide.type} photo-loader__card--${index + 1}`}
              key={`${slide.type}-${slide.text || slide.src}-${index}`}
              style={{
                '--card-x': motion.x,
                '--card-y': `${motion.y}px`,
                '--card-rotate': motion.rotate,
              }}
            >
              {slide.type === 'photo'
                ? <img src={slide.src} alt="" />
                : <span className="photo-loader__card-copy">{slide.text}</span>}
            </div>
          )
        })}
      </div>
      <span className="photo-loader__label">Loading portfolio</span>
    </div>
  )
}

export default PhotoLoader
