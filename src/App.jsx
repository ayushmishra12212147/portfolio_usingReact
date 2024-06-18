import NavBar from '../src/Components/NavBar/NavBar';
import Home from '../src/Components/HomePage/HomePage';
import './App.css';
import Teck from '../src/Components/TechStack/TechStack';
import Project from '../src/Components/Projects/Projects';
import About from '../src/Components/About/About';
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Home/>
      <Teck/>
      
      <Project/>
      
      <About/>
    </div>
  )
}

export default App
