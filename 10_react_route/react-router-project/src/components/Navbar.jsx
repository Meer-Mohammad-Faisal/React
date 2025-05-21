import './Navbar.css';
import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/" className={({isActive}) => isActive? "active-link": ""}>Home</Link>
        </li>
        <li>
            <Link to="/about" className={({isActive}) => isActive? "active-link": ""}>About</Link>
        </li>
        <li>
            <Link to="/dashboard" className={({isActive}) => isActive? "active-link": ""}>Dashboard</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar
