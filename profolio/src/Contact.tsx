import gitHub from '../public/images/icons-github.png'
import linkedIn from '../public/images/icons-linkedin.png'
import email from '../public/images/gmailIcon.png'

export default function Contact(){
    return(
        <div className="contactContainers">
            <div className="phoneAndEmail">
                <p>+1 954-600-3955</p>            
                <a className='emailLink' href="mailto:carlpericles18@gmail.com" target="blank">carlpericles18@gmail.com</a>
            </div>
            <div className="contactImages">
                    <a href="https://www.linkedin.com/in/carl-pericles-8940ab15b/" target="blank"><img src={linkedIn} alt="linkedInIcon"></img></a>
                    <a href="https://github.com/CarlPericles18" target="blank"><img src={gitHub} alt="gitHubIcon"></img></a>
                    <a href="mailto:carlpericles18@gmail.com" target="blank"><img src={email} alt="emailIcon"></img></a>
            </div>
        </div>
    )
}