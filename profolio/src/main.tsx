import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../public/css/App.css'
import '../public/css/Project.css'
import '../public/css/Contact.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
    <div>
        <App/>
    </div>  
  </React.StrictMode>,
)
