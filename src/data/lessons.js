// Unityversity Onboarding Tutorial - Lessons Data Structure
// You can modify this to add more lessons and steps
export const lessonsData = [
  {
    id: 'lesson-1',
    title: 'Getting Started',
    description: 'This lesson introduces you to the Unityversity platform and covers the essential basics you need to know before diving deeper. Learn about the platform overview, account setup, and initial configuration to get started on your learning journey.',
    steps: [
      {
        id: 'step-1-1',
        name: 'Introduction',
        title: 'Step 1: Introduction',
        brief: 'Get acquainted with Unityversity and understand what this platform offers. This introduction video will walk you through the key features and how to navigate the interface effectively.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video URL
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', // YouTube thumbnail URL
        instructions: 'Welcome to Unityversity! This is the first step. Watch the video to learn about the platform overview, key features, and how to navigate the interface. Take notes on important points for future reference.'
      },
      {
        id: 'step-1-2',
        name: 'Account Setup',
        title: 'Step 2: Setup',
        brief: 'Learn how to set up your account and configure your profile. This step covers account creation, profile settings, and essential preferences to personalize your learning experience.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video URL
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        instructions: 'Follow along with the video to set up your account. You\'ll learn how to create your profile, set your preferences, and configure notification settings. Make sure to complete all steps shown in the video.'
      },
      {
        id: 'step-1-3',
        name: 'Initial Configuration',
        title: 'Step 3: Configuration',
        brief: 'Configure your workspace and learning settings. This step helps you customize the platform according to your needs, including theme preferences, notification settings, and learning path selection.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video URL
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        instructions: 'Configure your settings according to the video guide. This includes selecting your learning preferences, setting up your workspace, and choosing notification preferences. Don\'t forget to save all changes before proceeding.'
      }
    ]
  },
  {
    id: 'lesson-2',
    title: 'Advanced Features',
    description: 'Explore the advanced capabilities of Unityversity in this lesson. Master powerful features that will enhance your learning experience, including collaboration tools, analytics, and customization options that help you optimize your educational journey.',
    steps: [
      {
        id: 'step-2-1',
        name: 'Feature Overview',
        title: 'Step 1: Feature Overview',
        brief: 'Discover all the advanced features available in Unityversity. This comprehensive overview covers collaboration tools, progress tracking, analytics dashboard, and premium features that can enhance your learning experience.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video URL
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        instructions: 'Watch this video to discover advanced features available in Unityversity. The video covers collaboration tools, analytics dashboard, progress tracking, and customization options. Make a list of features that interest you most.'
      },
      {
        id: 'step-2-2',
        name: 'Best Practices',
        title: 'Step 2: Best Practices',
        brief: 'Learn proven strategies and best practices from experienced users. This step shares tips on maximizing your learning efficiency, staying organized, and getting the most value from Unityversity\'s features.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video URL
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        instructions: 'Learn best practices from experienced Unityversity users. The video shares tips on effective learning strategies, organization methods, and how to leverage advanced features for optimal results. Apply these strategies to your learning routine.'
      }
    ]
  }
]

// Helper function to get all steps flattened with their lesson info
export const getAllSteps = () => {
  const allSteps = []
  lessonsData.forEach((lesson, lessonIndex) => {
    lesson.steps.forEach((step, stepIndex) => {
      allSteps.push({
        ...step,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonDescription: lesson.description,
        globalStepNumber: allSteps.length + 1
      })
    })
  })
  return allSteps
}

// Helper function to get lesson by ID
export const getLessonById = (lessonId) => {
  return lessonsData.find(lesson => lesson.id === lessonId)
}
