import React from 'react';
import Logo from './logo.png';
import './NavStyle.css';
import { Link } from "react-router-dom"

const Nav = (props) => {

  return (
    <>
      <div className="image">         
         <Link to="/">
        <img src={Logo} alt='logo burger queen' className={'img'} /></Link>
        <nav className="main-nav">{props.text}</nav>
        {/* <div className={'navegation'}>
        <Link to="/salao" className='link'>Restaurante</Link>
        <Link to="/cozinha" className='link'>Cozinha</Link>
        <Link to="/delivery" className='link'>Delivery</Link>
      </div>   */}
      </div>
      <div>
       
      </div>
    
    
    </>
  )
}

export default Nav;

