import React from 'react';
import Restaurant from './pages/Restaurant';
import Kitchen from './pages/Kitchen';
import Main from './pages/Main';
import Delivery from './pages/Delivery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>      
      <div>
        <Switch>
          <Route path="/salao" component={Restaurant} />
          <Route path="/cozinha" component={Kitchen} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App


