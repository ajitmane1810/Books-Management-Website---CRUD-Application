import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  // Function to close drawer when clicking a link
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className='navbar'>
          <Link to='/' onClick={closeDrawer} className='navbar-title'>
        <h2>BOOK KEEPING WEBSITE</h2>
      </Link>
        <button className='menu-button' onClick={toggleDrawer}>
        {isDrawerOpen ? '✖' : '☰'}
      </button>
        <ul className={`navbar-menu ${isDrawerOpen ? 'open' : ''}`}>
        <li>
          <Link  to='/' onClick={closeDrawer}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/bookForm' onClick={closeDrawer}>
            Add Book
          </Link>
        </li>
        <li>
          <Link to='/books' onClick={closeDrawer}>
            Books
          </Link>
        </li>
            
        </ul>
       
    </div>
  )
}

export default Navbar