# Textbook Library

A reusable React component library for building interactive educational textbooks with integrated exam systems.

## Features

- 📚 **Markdown-based textbooks** with GitHub Flavored Markdown support
- ❓ **Integrated exam system** with customizable question banks
- 📝 **Vocabulary lists** and concept maps
- 🎥 **YouTube video embedding**
- 🧭 **Smart navigation** with breadcrumbs and internal linking
- 🎨 **Customizable styling** via CSS variables

## Installation

### Local Development (before publishing)

```bash
# In your textbook project
npm install ../path/to/textbook-lib
```

### From npm (after publishing)

```bash
npm install @srfoster/textbook-lib
```

## Usage

### Basic Setup

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import '@srfoster/textbook-lib/styles'; // Import library styles
import './index.css'; // Your custom overrides

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
```

```jsx
// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import {
  TextbookPage,
  ExamDashboard,
  ExamInterface,
  loadAllQuestions
} from '@srfoster/textbook-lib';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentExam, setCurrentExam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllQuestions()
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading questions:', error);
        setLoading(false);
      });
  }, []);

  const startExam = (examData) => {
    setCurrentExam(examData);
  };

  const endExam = () => {
    setCurrentExam(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>My Textbook</h1>
        <nav>
          <Link to="/">Textbook</Link>
          <Link to="/exams">Exams</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<TextbookPage />} />
          <Route path="/exams" element={
            currentExam ? (
              <ExamInterface 
                questions={currentExam.questions} 
                settings={currentExam.settings}
                onEndExam={endExam}
              />
            ) : (
              <ExamDashboard 
                questions={questions} 
                onStartExam={startExam}
              />
            )
          } />
          <Route path="/textbook/*" element={<TextbookPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
```

## Components

### TextbookPage

Renders markdown content with support for embedded components.

```jsx
<TextbookPage />
```

Supports these embedded components in markdown:
- `{{ExamQuestions:path/to/questions.yml}}`
- `{{VocabList:path/to/vocab.yml}}`
- `{{ConceptMap:path/to/concept-map.yml}}`
- `{{YouTube:VIDEO_URL}}`

### ExamDashboard

Question bank overview and exam generator.

```jsx
<ExamDashboard 
  questions={questions} 
  onStartExam={startExam}
/>
```

### ExamInterface

Interactive exam taking interface.

```jsx
<ExamInterface 
  questions={examQuestions} 
  settings={examSettings}
  onEndExam={endExam}
/>
```

## Content Structure

Your textbook project should have this structure:

```
your-textbook/
├── public/
│   ├── textbook/
│   │   ├── index.md
│   │   ├── chapter-1.md
│   │   └── ...
│   └── questions.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── compiled/
│       └── index.js  (generated)
└── package.json
```

## Configuration

The library expects content to be served from specific paths. Configure your Vite build:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/your-repo/' : '/',
}))
```

## Development

### Building the Library

```bash
cd textbook-lib
npm install
# No build step needed for now - we're using source directly
```

### Testing Changes

Make changes in `textbook-lib/src/` and they'll be reflected in your consumer project immediately (when using local linking).

## License

MIT

## Author

Stephen Foster
