import React, { useState, useEffect } from 'react'
import LessonAccordion from './components/LessonAccordion'
import VideoModal from './components/VideoModal'
import ProgressBar from './components/ProgressBar'
import HelpModal from './components/HelpModal'
import { lessonsData, getAllSteps } from './data/lessons'
import './App.css'

function App() {
  const allSteps = getAllSteps()
  const [completedSteps, setCompletedSteps] = useState(() => {
    const saved = localStorage.getItem('completedSteps')
    return saved ? JSON.parse(saved) : []
  })
  
  const [currentVideoState, setCurrentVideoState] = useState(null) // { lessonIndex, stepIndex }
  const [helpModalOpen, setHelpModalOpen] = useState(false)
  const [helpModalMode, setHelpModalMode] = useState('help')

  useEffect(() => {
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps))
  }, [completedSteps])

  const toggleStepCompletion = (stepId) => {
    setCompletedSteps(prev => {
      if (prev.includes(stepId)) {
        return prev.filter(id => id !== stepId)
      } else {
        return [...prev, stepId]
      }
    })
  }

  const isStepCompleted = (stepId) => {
    return completedSteps.includes(stepId)
  }

  const handleStepClick = (lessonIndex, stepIndex) => {
    setCurrentVideoState({ lessonIndex, stepIndex })
  }

  const handleNextVideo = () => {
    if (currentVideoState === null) return

    const { lessonIndex, stepIndex } = currentVideoState
    const currentLesson = lessonsData[lessonIndex]
    const currentStep = currentLesson.steps[stepIndex]
    
    // Mark current step as completed
    if (!isStepCompleted(currentStep.id)) {
      toggleStepCompletion(currentStep.id)
    }
    
    const isLastStepInLesson = stepIndex === currentLesson.steps.length - 1
    const isLastLesson = lessonIndex === lessonsData.length - 1

    // Move to next step or next lesson
    if (!isLastStepInLesson) {
      // Move to next step in same lesson
      setCurrentVideoState({ lessonIndex, stepIndex: stepIndex + 1 })
    } else if (!isLastLesson) {
      // Move to first step of next lesson
      setCurrentVideoState({ lessonIndex: lessonIndex + 1, stepIndex: 0 })
    } else {
      // All videos completed
      setCurrentVideoState(null)
    }
  }

  const handleCloseModal = () => {
    setCurrentVideoState(null)
  }

  const getCurrentStep = () => {
    if (currentVideoState === null) return null
    const { lessonIndex, stepIndex } = currentVideoState
    const lesson = lessonsData[lessonIndex]
    if (!lesson || !lesson.steps[stepIndex]) return null
    
    const step = lesson.steps[stepIndex]
    return {
      ...step,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonDescription: lesson.description,
      lessonIndex,
      stepIndex
    }
  }

  const getNextStepInfo = () => {
    if (currentVideoState === null) return { isLastStepInLesson: false, isLastLesson: false }
    const { lessonIndex, stepIndex } = currentVideoState
    const lesson = lessonsData[lessonIndex]
    const isLastStepInLesson = stepIndex === lesson.steps.length - 1
    const isLastLesson = lessonIndex === lessonsData.length - 1
    return { isLastStepInLesson, isLastLesson }
  }

  const getNextStep = () => {
    const firstIncomplete = allSteps.find(step => !isStepCompleted(step.id))
    return firstIncomplete || null
  }

  const completedCount = completedSteps.length
  const totalSteps = allSteps.length
  const currentStep = getCurrentStep()
  const nextStep = getNextStep()
  const nextStepInfo = getNextStepInfo()

  // Calculate global step number for display
  const getGlobalStepNumber = (lessonIndex, stepIndex) => {
    let count = 1
    for (let i = 0; i < lessonIndex; i++) {
      count += lessonsData[i].steps.length
    }
    return count + stepIndex
  }

  return (
    <div className="app">
      <div className="app-top-bar">
        <div className="top-bar-left">
          <h1 className="app-title">Unityversity Onboarding Tutorial</h1>
        </div>
        <div className="top-bar-right">
          <button 
            className="help-button"
            onClick={() => {
              setHelpModalMode('help')
              setHelpModalOpen(true)
            }}
          >
            💡 Ask for Help
          </button>
          <button 
            className="question-button"
            onClick={() => {
              setHelpModalMode('question')
              setHelpModalOpen(true)
            }}
          >
            ❓ Ask Questions
          </button>
        </div>
      </div>

      <ProgressBar 
        completedSteps={completedCount}
        totalSteps={totalSteps}
        nextStep={nextStep}
      />

      <main className="app-main">
        <div className="lessons-accordion-container">
          {lessonsData.map((lesson, lessonIndex) => (
            <LessonAccordion
              key={lesson.id}
              lesson={lesson}
              lessonIndex={lessonIndex}
              onStepClick={handleStepClick}
              isStepCompleted={isStepCompleted}
            />
          ))}
        </div>
      </main>

      {currentVideoState !== null && currentStep && (
        <VideoModal
          step={currentStep}
          stepNumber={getGlobalStepNumber(currentVideoState.lessonIndex, currentVideoState.stepIndex)}
          onClose={handleCloseModal}
          onNext={handleNextVideo}
          isLastStepInLesson={nextStepInfo.isLastStepInLesson}
          hasNext={!nextStepInfo.isLastLesson || !nextStepInfo.isLastStepInLesson}
        />
      )}

      <HelpModal
        isOpen={helpModalOpen}
        onClose={() => setHelpModalOpen(false)}
        mode={helpModalMode}
      />
    </div>
  )
}

export default App