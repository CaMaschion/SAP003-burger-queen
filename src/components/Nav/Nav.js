import React from 'react';
import Logo from './logo.png'

const Nav = (props) => {

  return (
    <>
      <div className="image">
        <img
          width={"150px"}
          src={Logo}
          alt='logo burger queen' />
      </div>
      <nav id="main-nav">{props.text}</nav>

    </>
  )
}

export default Nav;

