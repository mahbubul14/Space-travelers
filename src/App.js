import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from './component/Rockets';
import MyProfile from './component/MyProfile';
import Missions from './component/Missions';
import Nav from './component/Nav';
import { loadRocketsData } from './redux/rockets/rockets';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRocketsData());
  }, [dispatch]);

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
};

export default App;
