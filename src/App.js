import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import MapPage from './components/MapPage';
import InfoPage from './components/InfoPage'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/map' element={<MapPage/>} />
        <Route path="/info/:id" element={<InfoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
