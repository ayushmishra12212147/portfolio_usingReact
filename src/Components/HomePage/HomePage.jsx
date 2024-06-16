

import Jadu from '../Typing/Type';

import './HomePage.css';
const am = "I'm";
import git from '../../assets/icons8-github-50.png';
import hack from '../../assets/icons8-hackerrank-32.png';
import din from '../../assets/icons8-linkedin-50.png';
import ins from '../../assets/icons8-instagram-50.png';



function HomePage() {
  return (

    <div className='Main_container'>
      <div className="main_left">
        <p>Welcome to My Digital World!</p>
        <div className="details">
          <p>Hi, {am} Ayush Kumar Mishra , </p><Jadu />
        </div>
        <div className="discription">
          a second-year B.Tech student specializing in Computer Science Engineering at Lovely Professional University. <br />
          As a dedicated Full Stack Developer, I thrive on mastering technologies like MERN (MongoDB, Express.js, React.js, Node.js) stack and Angular. <br />
          {am} passionate about creating dynamic and efficient web applications that bring innovative ideas to life. <br />
          Explore my projects to see how I blend creativity with code!
        </div>
        <div className="contact">
          <a href=""><img src={git} alt="" className='social'/></a>
          <a href=""><img src={hack} alt="" className='hack social' /></a>
          <a href=""><img src={din} alt="" className='social'/></a>
          <img src={ins} alt="" className='social'/>
        </div>
        <div className="button">
          
        </div>

      </div>
      <div className="main_right">

      </div>

    </div>
  )
}
export default HomePage;
