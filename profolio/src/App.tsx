import { useRef } from "react"


export default function App() {
  const About = useRef<null | HTMLDivElement>(null); 
  const Projects = useRef<null | HTMLDivElement>(null); 
  const Contact = useRef<null | HTMLDivElement>(null); 

  const handleClickAbout = ()=>{
    About.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleClickProject = ()=>{
    Projects.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleClickContact = ()=>{
    Contact.current?.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <div>
          <header ref={About} className="Header">
              <h1>Carl Pericles</h1>
              <h3>About Me</h3>
              <p>I am a Web Developer looking for a position an any company to enhance my skill and learning. 
                I am willing to do what it take to become the best at what I do.
              </p>
              <nav>
              <button className="ProjectBttn" onClick={handleClickAbout}>About</button>
              <button className="ProjectBttn" onClick={handleClickProject}>Projects</button>
              <button className="ProjectBttn" onClick={handleClickContact}>Contact</button>
              </nav>
           </header>

           <div ref={Projects} ><h2>Projects</h2></div>
    </div>
    )
}

