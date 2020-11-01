import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import YfethHarvestParty from './pages/YfethHarvestParty';
import BittoHarvestParty from './pages/BittoHarvestParty';
import Staking from './pages/Staking';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={null} /> */}
        <Route component={Header} />
      </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/yfeth-harvest-party">
            <YfethHarvestParty />
          </Route>
          <Route path="/bitto-harvest-party">
            <BittoHarvestParty />
          </Route>
          <Route path="/staking">
            <Staking />
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
