import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar">
            <Link to="/"><h1>#VANLIFE</h1></Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <div className='footer'>&copy;2022 #VANLIFE</div>
  </BrowserRouter>
  );
}

export default App;
