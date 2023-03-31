
import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';
function Nav({handleInput , value}) {
 
  const handleLogout = () => {
    alert("this is working na");
  }
  
  return (
    <div className='navbar'> 
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favourite">Favourites</Link></li>
            <li><input type="text" value={value} placeholder="Search Movies..." onChange={(e) => handleInput(e.target.value)}/></li>
            <li className='logout-btn' onClick={handleLogout}><Link to="/logout">Logout</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav