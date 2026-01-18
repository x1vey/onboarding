import React, { useEffect, useRef } from 'react'
import './VideoModal.css'

function VideoModal({ step, stepNumber, onClose, onNext, hasNext, isLastStepInLesson }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    // Focus management for accessibility
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <div className="video-modal-header">
          <div className="video-modal-header-top">
            {step.lessonTitle && (
              <span className="video-modal-lesson-badge">{step.lessonTitle}</span>
            )}
          </div>
          <h2>Step {stepNumber}: {step.name || step.title}</h2>
          {step.brief && (
            <p className="video-modal-brief">{step.brief}</p>
          )}
        </div>

        <div className="video-modal-video-container">
          <iframe
            ref={iframeRef}
            src={step.videoUrl}
            title={step.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-modal-iframe"
          />
        </div>

        <div className="video-modal-instructions">
          <h3>Instructions:</h3>
          <p>{step.instructions}</p>
        </div>

        <div className="video-modal-actions">
          {hasNext && (
            <button 
              className="video-modal-next-button"
              onClick={onNext}
            >
              ✓ {isLastStepInLesson ? 'Mark Done & Next Lesson →' : 'Mark Done & Next Step →'}
            </button>
          )}
          {!hasNext && (
            <button 
              className="video-modal-next-button video-modal-complete-button"
              onClick={onNext}
            >
              ✓ Mark Complete
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoModal