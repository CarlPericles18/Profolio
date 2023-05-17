interface Props {
    key:Number;
    img: string;
    title: string;
    href: string;
    code: string;
}


export default function Project(props:Props){

    return(
        <div className="projectContainers">
                <div className="containers">
                    <div className="imageDiv">
                        <img className='projectImages'key={props.img} src={props.img} alt='projectImage'></img>
                    </div>
                    <div className="projectInfo">
                        <h3 className='projectTitle'>{props.title}</h3>                            
                        <div className="buttonDiv">
                        <a href={props.href} target='_blank'><button>Live</button></a>
                        <a href={props.code} target='_blank'><button>Code</button></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}