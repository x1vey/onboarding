import React from 'react'
import './StepThumbnail.css'

function StepThumbnail({ step, stepNumber, isCompleted, onClick }) {
  return (
    <div 
      className={`step-thumbnail ${isCompleted ? 'step-thumbnail-completed' : ''}`}
      onClick={onClick}
    >
      <div className="step-thumbnail-image-container">
        <img 
          src={step.thumbnailUrl || `https://via.placeholder.com/640x360?text=Step+${stepNumber}`}
          alt={step.title}
          className="step-thumbnail-image"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/640x360?text=Step+${stepNumber}`
          }}
        />
        <div className="step-thumbnail-overlay">
          <div className="play-button">
            ▶
          </div>
        </div>
        {isCompleted && (
          <div className="step-thumbnail-checkmark">
            ✓
          </div>
        )}
      </div>
      <div className="step-thumbnail-info">
        <h3 className="step-thumbnail-title">Step {stepNumber}</h3>
        <p className="step-thumbnail-name">{step.name || step.title}</p>
        {step.brief && (
          <p className="step-thumbnail-brief">{step.brief}</p>
        )}
      </div>
    </div>
  )
}

export default StepThumbnail