import React from 'react';
import Logo from './logo.png';
import './NavStyle.css';

const Nav = (props) => {

  return (

    <div className="image">
      <img
        width={"50px"}
        src={Logo}
        alt='logo burger queen' 
        />
      <nav id="main-nav">{props.text}</nav>

    </div>

  )
}

export default Nav;

