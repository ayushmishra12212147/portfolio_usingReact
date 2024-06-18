import NavBar from '../src/Components/NavBar/NavBar';
import Home from '../src/Components/HomePage/HomePage';
import './App.css';
import Teck from '../src/Components/TechStack/TechStack';
import Project from '../src/Components/Projects/Projects';
import About from '../src/Components/About/About';
import Contact from '../src/Components/Contact/Contact';
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Home/>
      <Teck/>
      
      <Project/>
      
      <About/>
      <Contact/>
    </div>
  )
}

export default App
