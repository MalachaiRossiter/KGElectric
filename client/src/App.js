import './App.css';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BroswerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
