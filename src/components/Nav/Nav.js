import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (

    <nav>
      <ul>
        <li>
          <Link to="/restaurant">Salão</Link>
        </li>
        <li>
          <Link to="/kitchen">Cozinha</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Nav;