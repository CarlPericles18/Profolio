import { useRef } from "react"
import Contact from './Contact.tsx'
import Project from "./Project.tsx";
import data from './data'
import upArrow from'../public/images/upload.png'


export default function App() {
  

  const About = useRef<null | HTMLDivElement>(null); 
  const Projects = useRef<null | HTMLDivElement>(null); 
  const contact = useRef<null | HTMLDivElement>(null); 
  
  
  const handleClickAbout = ()=>{
    About.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleClickProject = ()=>{
    Projects.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleClickContact = ()=>{
    contact.current?.scrollIntoView({behavior: 'smooth'});
  }
  const projectData = data.Projects.map((e)=>{
        return(
          <Project
              key={e.id}
              img = {e.img}
              title = {e.title}
              href = {e.href}
              code = {e.code}
            />
        )
  })
 
  return (
    <div>

          <header  ref={About}   className="Header">
              <h1>Carl Pericles</h1>
              <h3>About Me</h3>
              <p>I am a Web Developer looking for a position an any company to enhance my skill and learning. 
                I am willing to do what it take to become the best at what I do.
              </p>
              <div className="nav" >
              <button className="ProjectButton" onClick={handleClickAbout}>About</button>
              <button className="ProjectButton" onClick={handleClickProject}>Projects</button>
              <button className="ProjectButton" onClick={handleClickContact}>Contact</button>
              </div>
           </header>
           <div  ref={Projects}  ><h2 className="projectSubject">Projects</h2></div>
          <div className="projectData">{projectData}</div>
          <div  ref={contact} className="contactDiv" >
              <h2 className="ContactSubject" >Contact</h2>
          <div className="scrollUp"><img  onClick={handleClickAbout} src={upArrow} alt="upArrow"  ></img></div>
          <Contact/>
          </div>
          
    </div>
    )

    
}

