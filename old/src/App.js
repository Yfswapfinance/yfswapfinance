import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Farming from './pages/Farming';
import Crops from './pages/Crops';
import HarvestPartyOne from './pages/HarvestPartyOne';
import HarvestPartyTwo from './pages/HarvestPartyTwo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Farming />
          </Route>
          <Route path="/crops">
            <Crops />
          </Route>
          <Route path="/harvestpartyone">
            <HarvestPartyOne />
          </Route>
          <Route path="/harvestpartytwo">
            <HarvestPartyTwo />
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
