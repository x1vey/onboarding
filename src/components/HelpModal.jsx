import React, { useEffect } from 'react'
import './HelpModal.css'

function HelpModal({ isOpen, onClose, mode = 'help' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const isHelpMode = mode === 'help'

  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="help-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="help-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <div className="help-modal-header">
          <h2>{isHelpMode ? '💡 Need Help?' : '❓ Ask a Question'}</h2>
        </div>

        <div className="help-modal-body">
          {isHelpMode ? (
            <>
              <h3>How to use this tutorial:</h3>
              <ul>
                <li>Click on any step thumbnail to watch the video</li>
                <li>Use the "Next Video" button to mark the current step as complete and move to the next one</li>
                <li>Completed steps are marked with a green checkmark</li>
                <li>Track your progress with the progress bar at the top</li>
                <li>You can ask questions anytime using the "Ask Questions" button</li>
              </ul>
              <h3>Need more help?</h3>
              <p>If you're stuck or need clarification, click the "Ask Questions" button to get in touch with support or leave a question.</p>
            </>
          ) : (
            <>
              <h3>Ask your question:</h3>
              <form className="question-form" onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const question = formData.get('question')
                const email = formData.get('email')
                // Here you would typically send this to a backend
                alert(`Thank you for your question! We'll get back to you at ${email || 'your email'} soon.`)
                onClose()
              }}>
                <div className="form-group">
                  <label htmlFor="question">Your Question:</label>
                  <textarea
                    id="question"
                    name="question"
                    rows="5"
                    placeholder="Type your question here..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email (optional):</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={onClose} className="btn-cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit">
                    Submit Question
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HelpModal