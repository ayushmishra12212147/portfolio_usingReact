/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ProjectTile.css';
function ProjectTile(props) {
    return (
        <div className='dabba'>
            <div className="tile">
                <p>{props.title}</p>
            </div>
            <div className="project_box_image_container">
                <img src={props.image} alt={props.title} />
            </div>
            
            <div className="project_box_sentences_container">
          {props.sentences.map((sentence, index) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
        </div>
    );
}
export default ProjectTile;