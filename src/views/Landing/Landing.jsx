import React from 'react';
import {NavLink} from "react-router-dom";

const Landing = () => {
  return ( 
    <>
    <h3>Landing</h3>
    <NavLink
      to="/home"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <button>Home</button>
    </NavLink>
    </>
   );
}
 
export default Landing;