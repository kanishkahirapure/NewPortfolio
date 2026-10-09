import { useEffect, useRef, useState } from 'react'

function ToolModal({ tool, onClose }) {
  const [isClosing, setIsClosing] = useState(false)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsClosing(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeModal = () => setIsClosing(true)

  useEffect(() => {
    if (!isClosing) return undefined

    const timeout = window.setTimeout(onClose, 320)
    return () => window.clearTimeout(timeout)
  }, [isClosing, onClose])

  return (
    <div className="tool-modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) closeModal()
    }}>
      <div
        className={`tool-modal__panel tool-modal__panel--${tool.animation}${isClosing ? ' is-closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tool-modal-title"
      >
        <button ref={closeButtonRef} className="tool-modal__close" type="button" onClick={closeModal} aria-label="Close tool details">
          <span aria-hidden="true">×</span>
        </button>

        <div className="tool-modal__topline">
          <span className="tool-modal__icon" aria-hidden="true">{tool.icon}</span>
          <span className="tool-modal__index">TOOL / {String(tool.name.length).padStart(2, '0')}</span>
        </div>

        <div className="tool-modal__content">
          <p className="tool-modal__eyebrow">BUILDING WITH</p>
          <h2 id="tool-modal-title">{tool.name}</h2>
          <p className="tool-modal__description">{tool.description}</p>

          <div className="tool-modal__features">
            <p>Key capabilities</p>
            <ul>
              {tool.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolModal
