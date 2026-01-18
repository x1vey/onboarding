# Corey Onboarding Tutorial App

A modern, interactive onboarding tutorial application built with React. This app helps users learn through structured lessons and steps, each containing video content and written instructions.

## Features

- 📚 **Multiple Lessons**: Organize content into different lessons
- 🎯 **Step-by-Step Learning**: Each lesson contains multiple steps
- 🎥 **Video Integration**: Embed videos as iframes (YouTube, Vimeo, etc.)
- ✅ **Progress Tracking**: Mark steps as complete with a checkmark button
- 💾 **Persistent Storage**: Progress is saved to localStorage
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful, intuitive interface with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Add Your Own Content

### Adding Lessons and Steps

Edit `src/data/lessons.js` to add or modify lessons and steps:

```javascript
export const lessonsData = [
  {
    id: 'lesson-1',
    title: 'Your Lesson Title',
    steps: [
      {
        id: 'step-1-1',
        title: 'Step 1: Step Title',
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        instructions: 'Your written instructions here...'
      },
      // Add more steps...
    ]
  },
  // Add more lessons...
]
```

### Video URL Format

- **YouTube**: Use `https://www.youtube.com/embed/VIDEO_ID`
- **Vimeo**: Use `https://player.vimeo.com/video/VIDEO_ID`
- **Other iframe sources**: Any iframe-compatible video URL will work

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Lesson.jsx          # Lesson container component
│   │   ├── Step.jsx            # Individual step component
│   │   ├── VideoModal.jsx      # Video popup modal
│   │   └── *.css               # Component styles
│   ├── data/
│   │   └── lessons.js          # Lessons and steps data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── *.css                   # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Features in Detail

### Progress Tracking
- Click the round button on any step to mark it as complete
- Progress is automatically saved to localStorage
- Visual progress bars show completion status for each lesson

### Video Modal
- Click any step to open the video in a full-screen modal
- Video starts playing automatically (if autoplay is enabled)
- Close with the × button or press Escape key
- Instructions are displayed below the video

### Responsive Design
- Adapts to different screen sizes
- Touch-friendly on mobile devices
- Optimized for both desktop and mobile viewing

## Customization

You can customize colors, fonts, and styling by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #50c878;
  --background: #f5f7fa;
  /* ... more variables ... */
}
```

## License

MIT License - feel free to use this project for your own purposes.

