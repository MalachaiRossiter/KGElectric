import './App.css';
import Resume from './Components/Resume';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected here
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
