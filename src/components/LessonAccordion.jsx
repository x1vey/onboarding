import React, { useState } from 'react'
import StepThumbnail from './StepThumbnail'
import './LessonAccordion.css'

function LessonAccordion({ lesson, lessonIndex, onStepClick, isStepCompleted }) {
  const [isExpanded, setIsExpanded] = useState(lessonIndex === 0) // First lesson expanded by default

  const completedCount = lesson.steps.filter(step => isStepCompleted(step.id)).length
  const totalSteps = lesson.steps.length
  const progressPercentage = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0

  return (
    <div className="lesson-accordion">
      <div className="lesson-accordion-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="lesson-accordion-header-content">
          <div className="lesson-accordion-title-section">
            <h2>{lesson.title}</h2>
            <span className="lesson-accordion-progress-badge">
              {completedCount} / {totalSteps} steps
            </span>
          </div>
          {lesson.description && (
            <p className="lesson-accordion-description">{lesson.description}</p>
          )}
          <div className="lesson-accordion-progress-bar">
            <div 
              className="lesson-accordion-progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <span className="lesson-accordion-toggle">{isExpanded ? '▼' : '▶'}</span>
      </div>
      
      {isExpanded && (
        <div className="lesson-accordion-content">
          <div className="lesson-accordion-steps-grid">
            {lesson.steps.map((step, stepIndex) => (
              <StepThumbnail
                key={step.id}
                step={step}
                stepNumber={stepIndex + 1}
                isCompleted={isStepCompleted(step.id)}
                onClick={() => onStepClick(lessonIndex, stepIndex)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LessonAccordion