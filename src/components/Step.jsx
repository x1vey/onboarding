import React, { useState } from 'react'
import VideoModal from './VideoModal'
import './Step.css'

function Step({ step, stepNumber, isCompleted, onToggleCompletion }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStepClick = () => {
    setIsModalOpen(true)
  }

  const handleDoneClick = (e) => {
    e.stopPropagation()
    onToggleCompletion(step.id)
  }

  return (
    <>
      <div 
        className={`step ${isCompleted ? 'step-completed' : ''}`}
        onClick={handleStepClick}
      >
        <div className="step-header">
          <span className="step-number">Step {stepNumber}</span>
          <button
            className={`step-done-button ${isCompleted ? 'step-done-completed' : ''}`}
            onClick={handleDoneClick}
            aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as done'}
          >
            {isCompleted ? '✓' : ''}
          </button>
        </div>
        <h3 className="step-title">{step.title}</h3>
        <p className="step-preview">{step.instructions}</p>
        <div className="step-indicator">Click to watch video →</div>
      </div>

      {isModalOpen && (
        <VideoModal
          step={step}
          stepNumber={stepNumber}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default Step
