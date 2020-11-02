import React from 'react';
import Header from './components/Header';
import HeaderUser from './components/HeaderUser';
import HeaderExchange from './components/HeaderExchange';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import YfethHarvestParty from './pages/YfethHarvestParty';
import BittoHarvestParty from './pages/BittoHarvestParty';
import Staking from './pages/Staking';
import Exchange from './pages/Exchange';
import InsufficientBalance from './pages/InsufficientBalance';
import SufficientBalance from './pages/SufficientBalance';
import ConfirmSwap from './pages/ConfirmSwap';
import AddLiquidity from './pages/AddLiquidity';
import ImportPool from './pages/ImportPool';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/exchange" component={HeaderExchange} />
        <Route exact path="/insufficient-balance" component={HeaderExchange} />
        <Route exact path="/sufficient-balance" component={HeaderExchange} />
        <Route exact path="/confirm-swap" component={HeaderExchange} />
        <Route component={HeaderUser} />
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
          <Route path="/exchange">
            <Exchange />
          </Route>
          <Route path="/insufficient-balance">
            <InsufficientBalance />
          </Route>
          <Route path="/sufficient-balance">
            <SufficientBalance />
          </Route>
          <Route path="/confirm-swap">
            <ConfirmSwap />
          </Route>
          <Route path="/add-liquidity">
            <AddLiquidity />
          </Route>
          <Route path="/import-pool">
            <ImportPool />
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
