import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Projects from './Projects.tsx'
import '../public/css/App.css'
import '../public/css/Project.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
          <App />
          <Projects/>
    </div>  
  </React.StrictMode>,
)
