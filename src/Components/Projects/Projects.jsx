import './Projects.css';
// import {projectData} from '../../constants/index';
import ProjectTile from '../Projects/ProjectTile/ProjectTile';
import { projectData } from '../../constants';
function Projects(){
    return (
        <div className="container_Projects">
            <div className="title">
                My <span className='green bold'>Projects</span>
            </div>
            <div className="project_list">
                {projectData.map((project,index)=>
                <ProjectTile
                key={project}
                index={index}
                title={project.title}
                image={project.image}
                sentences={project.sentences}
                />
                )}
            </div>
        </div>
    )
}
export default Projects;