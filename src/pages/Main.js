import React from 'react';
import { Link } from 'react-router-dom'

const Main = () => ( 
    <div>
        <nav>
            <Link to='/salao'>Restaurante</Link>
            <Link to='/cozinha'>Cozinha</Link>
            <Link to='/delivery'>Delivery</Link>

        </nav>
    </div>
)

export default Main
  
