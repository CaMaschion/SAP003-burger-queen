import React from 'react';
// import Header from './components/Header';
// import Input from './components/Input/Input';
// import Button from './components/Button/index';
// import MenuList from './components/Menu/menu.js'
// import firebase from './utils/firebase.js'
import Nav from './components/Nav/Nav';

import {
    BrowserRouter as Router,
    Switch,
    Route,    
  } from "react-router-dom";  

import Restaurant from "./pages/Restaurant";
import Kitchen from "./pages/Kitchen";

export default function App () {
    return (
      <Router>
          <Nav/>
        <div>          
          <Switch>
            <Route path="/salao" component={Restaurant}/>           
            <Route path="/cozinha" component={Kitchen}/>                    
          </Switch>
        </div>
      </Router>
    );
  }



  