
import React from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';
function Nav({handleInput , value , favourite}) {
 
  const handleLogout = ({}) => {
    alert("this is working na");
  }
  
  return (
    <div className='navbar'> 
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Popular</NavLink></li>
            <li><NavLink to="/">Top Rated</NavLink></li>
            <li><NavLink to="/">Upcoming</NavLink></li>
            <li><NavLink to="/favourite">Favourites</NavLink> <small  className="favourite-counter">{favourite.length > 0 ? favourite.length : ""}</small></li>
            <li><input type="text" value={value} placeholder="Search Movies..." onChange={(e) => handleInput(e.target.value)}/></li>
            {/* <li className='logout-btn' onClick={handleLogout}><NavLink to="/logout">Logout</NavLink></li> */}
        </ul>
    </nav>
    </div>
  )
}

export default Nav