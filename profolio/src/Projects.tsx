import data from './data'


export default function Heading(){
        
    return(
            <div className="projectContainers">
                {data.Projects.map((e)=>{
                    return(
                            <div className="containers">
                                <div className="imageDiv">
                                    <img className='projectImages' src={e.img} alt='projectImage'></img>
                                </div>
                                <h3>{e.title}</h3>                            
                                <div className="buttonDiv">
                                    <button><a href={e.href} target='_blank'>Live</a></button>
                                    <button><a href={e.code} target='_blank'>Code</a></button>
                                </div>
                            </div>
                        )
                })}
                
            </div>
        )
}