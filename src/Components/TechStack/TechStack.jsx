import './TechStack.css';
import Icon from './TechIcon/TechIcon';
import { stackone,stacktwo,stackthree } from '../../constants/index';

function TechStack() {
    return (
        <div className="container">
            <div className="title">
                Professional <span className='green bold'>SkillSet</span>
            </div>
            <div className="techstack_icon_container">
                {stackone.map(function (element) {
                    return (
                        <Icon
                            key={element.iconName}
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                        />
                    );
                })}
                
            </div>
            <div className="techstack_icon_container">
            {stacktwo.map(function (element) {
                    return (
                        <Icon
                            key={element.iconName}
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                        />
                    );
                })

                }
            </div>
            <div className="techstack_icon_container">
            {stackthree.map(function (element) {
                    return (
                        <Icon
                            key={element.iconName}
                            title={element.iconName}
                            altProperty={element.iconAltProperty}
                            image={element.iconImage}
                        />
                    );
                })

                }
            </div>



        </div>
    )
}
export default TechStack;