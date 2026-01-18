import React, { useState } from 'react'
import Step from './Step'
import './Lesson.css'

function Lesson({ lesson, isStepCompleted, onToggleCompletion }) {
  const [isExpanded, setIsExpanded] = useState(true)

  const completedCount = lesson.steps.filter(step => isStepCompleted(step.id)).length
  const totalSteps = lesson.steps.length
  const progressPercentage = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0

  return (
    <div className="lesson">
      <div className="lesson-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="lesson-title-section">
          <h2>{lesson.title}</h2>
          <span className="lesson-progress">
            {completedCount} / {totalSteps} steps completed
          </span>
        </div>
        <div className="lesson-progress-bar">
          <div 
            className="lesson-progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="lesson-toggle">{isExpanded ? '▼' : '▶'}</span>
      </div>
      {isExpanded && (
        <div className="lesson-steps">
          {lesson.steps.map((step, index) => (
            <Step
              key={step.id}
              step={step}
              stepNumber={index + 1}
              isCompleted={isStepCompleted(step.id)}
              onToggleCompletion={onToggleCompletion}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Lesson
