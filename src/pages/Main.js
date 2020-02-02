import React from 'react';
import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import './Main.css';

const Main = () => ( 
    <div>
        <Nav/>
        <nav className='main-navigation'>
            <Link to='/salao' className='main-link'>Restaurante</Link>
            <Link to='/cozinha' className='main-link'>Cozinha</Link>
            <Link to='/delivery'className='main-link'>Delivery</Link>

        </nav>
    </div>
)

export default Main
  
