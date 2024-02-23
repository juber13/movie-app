
import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';

import { GetMovieContext } from '../context/myContext';
function Nav() {

  const data = GetMovieContext();
  const { favourite, handleInput, movieName } = data;
  console.log(favourite)

  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <h6 style={{ color: "orange" }}>
            <Link to="/">House Hub</Link></h6>
        </div>
        <div>
          <ul>
            <li ><Link to="/">Home</Link></li>
            <li>
              <Link to="/favourite">Favourites</Link>
              <small className="favourite-counter">
                {/* {favourite.length } */}
              </small>
            </li>
            <li><input type="text" value={movieName} placeholder="Search Movies..." onChange={(e) => handleInput(e.target.value)} /></li>
          </ul>
        </div>
      </div>

      <div className="bottom-navbar">
        <form className='flex'>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder='Enter City' />
          </div>

          <div>
            <label htmlFor="data">Date</label>
            <input type="date" placeholder='Enter Date' />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='Enter Price' />
          </div>

          <div>
            <label htmlFor="property-type">Property Type</label>
            <select>
              <option value="house">House</option>
              <option value="pg">Pg</option>
              <option value="villa">Villa</option>
              <option value="hotel">Hotel</option>
              <option value="oyo">Oyo</option>
            </select>
          </div>

          <div>
            <label htmlFor="submit"></label>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Nav