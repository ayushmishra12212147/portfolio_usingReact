import './NavBar.css';
import { NAVBAR_TITLE, navOptions } from '../../constants';
console.log(navOptions);

function NavOption(props){
    // eslint-disable-next-line react/prop-types
    return <p>{props.navItem}</p>
}


function NavBar() {
    return (
        
        <div className="navbar_container">
            <div className="navbar_left">{NAVBAR_TITLE}</div>
            <div className="navbar_right">
                {navOptions.map(function(item,index){
                    return <NavOption key={index} navItem={item}/>;
                })}
            </div>
        </div>
    )
}
export default NavBar;