import React from 'react';
import { Link } from 'react-router-dom'
import './Main.css';

const Main = () => ( 
    <div>
        <nav className='main-navigation'>
            <Link to='/salao' className='main-link'>Restaurante</Link>
            <Link to='/cozinha' className='main-link'>Cozinha</Link>
            <Link to='/delivery'className='main-link'>Delivery</Link>

        </nav>
    </div>
)

export default Main
  
