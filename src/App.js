import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import MapPage from './components/MapPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/map' element={<MapPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
