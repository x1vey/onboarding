import React from 'react'
import './ProgressBar.css'

function ProgressBar({ completedSteps, totalSteps, nextStep }) {
  const progressPercentage = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0
  const remainingSteps = totalSteps - completedSteps

  const getEncouragingMessage = () => {
    if (completedSteps === 0) {
      return "🎯 Let's get started! Your first step is just a click away."
    }
    if (completedSteps === totalSteps) {
      return "🎉 Congratulations! You've completed all steps. You're amazing!"
    }
    if (remainingSteps === 1) {
      return "🔥 You're almost there! One more step to go!"
    }
    if (progressPercentage >= 75) {
      return `💪 Great progress! Only ${remainingSteps} steps remaining. You've got this!`
    }
    if (progressPercentage >= 50) {
      return `✨ You're halfway there! ${remainingSteps} more steps to complete your journey.`
    }
    if (progressPercentage >= 25) {
      return `🌟 Well done! Keep going - ${remainingSteps} more steps ahead.`
    }
    return `🚀 You're on the right track! ${remainingSteps} more steps to master this course.`
  }

  const getNextStepInfo = () => {
    if (nextStep) {
      return `Next: ${nextStep.title}`
    }
    return "All steps completed!"
  }

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-wrapper">
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }} />
        <span className="progress-bar-text">
          {completedSteps} / {totalSteps} Steps Complete
        </span>
      </div>
      <div className="progress-bar-message">
        <p className="encouraging-message">{getEncouragingMessage()}</p>
        {nextStep && <p className="next-step-info">{getNextStepInfo()}</p>}
      </div>
    </div>
  )
}

export default ProgressBar