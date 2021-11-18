import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from './component/Rockets';
import Missions from './component/Missions';
import MyProfile from './component/MyProfile';
import Nav from './component/Nav';
import './App.css';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
