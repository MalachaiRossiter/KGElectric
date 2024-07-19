import { BroswerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
