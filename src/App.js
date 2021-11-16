import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './component/Rockets';
import Missions from './component/Missions';
import MyProfile from './component/MyProfile';
import Nav from './component/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
      </Routes>
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
