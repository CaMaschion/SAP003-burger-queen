import React from 'react';
// import Header from './components/Header';
// import Input from './components/Input/Input';
// import Button from './components/Button/index';
// import MenuList from './components/Menu/menu.js'
// import firebase from './utils/firebase.js'
import Nav from './components/Nav/Nav';
//import styled from 'styled-components'

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
            <Route path="/restaurant" component={Restaurant}/>           
            <Route path="/kitchen" component={Kitchen}/>                    
          </Switch>
        </div>
      </Router>
    );
  }



  