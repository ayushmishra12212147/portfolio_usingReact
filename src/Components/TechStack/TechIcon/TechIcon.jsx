/* eslint-disable react/prop-types */
import './TechIcon.css';



function TechIcon (props){
    return (
        <div className='techstack_icons'>
        <img src={props.image} alt={props.altProperty} />
        <p>{props.title}</p>
    </div>
    )
}

export default TechIcon;
