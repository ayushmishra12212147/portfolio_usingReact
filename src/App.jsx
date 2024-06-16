import NavBar from '../src/Components/NavBar/NavBar';
import Home from '../src/Components/HomePage/HomePage';
import './App.css';
import Teck from '../src/Components/TechStack/TechStack';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Home/>
      <Teck/>
    </div>
  )
}

export default App
