import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../components/Nav/logo.png';
import './Main.css';

const Main = () => ( 
    <div>
            <nav className='main-navigation'>
            <img src={Logo} alt='logo burger queen' className='img-main' />       
            <Link to='/salao' className='main-link'>Restaurante</Link>
            <Link to='/cozinha' className='main-link'>Cozinha</Link>
            <Link to='/delivery'className='main-link'>Delivery</Link>

        </nav>
    </div>
)

export default Main
  
