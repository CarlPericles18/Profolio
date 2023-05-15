import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Contact from './Contact.tsx'
import Projects from './Projects.tsx'
import '../public/css/App.css'
import '../public/css/Project.css'
import '../public/css/Contact.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
    <div>
          <App />
          <Projects/>
    </div>  
  </React.StrictMode>,
)
