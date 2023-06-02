import React from 'react';
import { NavLink } from 'react-router-dom';

 const NavBar = () => {
  return ( 
    <div className='header'>
      <h3>Countries</h3>
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <button>Home</button>
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <button>Form</button>
      </NavLink>
    </div>
   );
 }
  
 export default NavBar;