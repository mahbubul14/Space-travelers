import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <div>
        <Nav />
        <hr className="mb-5 mr-1 ml-1" />
      </div>
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
