import './About.css';


function About(){
    return (
        <div className="about_me" >
        <div className="skill2">
            <h1 className='bold'>About <span className='green bold'>Me</span></h1>

            <li>
                <h3>Java</h3>
                <span className='bar'><span className='java'></span></span>
            </li>
            <li>
                <h3>C</h3>
                <span className='bar'><span className='c'></span></span>
            </li>
            <li>
                <h3>CPP</h3>
                <span className='bar'><span className='cpp'></span></span>
            </li>
            <li>
                <h3>Javascript</h3>
                <span className='bar'><span className='javascript'></span></span>
            </li>
            <li>
                <h3>React</h3>
                <span className='bar'><span className='react'></span></span>
            </li>
            <li>
                <h3>Mern</h3>
                <span className='bar'><span className='mern'></span></span>
            </li>
            <li>
                <h3>Angular</h3>
                <span className='bar'><span className='angular'></span></span>
            </li>
        </div>
        <div className="para">
        <p>Welcome to my portfolio! I am a dedicated B.Tech student specializing in Computer Science and Engineering, with a passion for coding and development. <br /> My academic journey has equipped me with a solid foundation in programming languages, software development, and problem-solving skills. <br /> I have successfully completed various projects that showcase my abilities in web development, app creation, and algorithm design. My work is driven by creativity, innovation, and a commitment to excellence. <br /> I am always eager to tackle new challenges and learn new technologies. Feel free to explore my projects and reach out if you would like to collaborate or learn more about my work.</p>
        </div>

        </div>
        
    )

}
export default About;