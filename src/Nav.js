import React from "react";
import {Link} from "react-router-dom";
import "./nav.css";
const Nav=()=>{
  return <nav>
    <ul>
<Link to="/">
      <li>logo</li>
</Link>
<Link to="/about">
      <li>About</li>
</Link>
<Link to="/shop">
      <li>Shop</li>
</Link>
     
      </ul>
      </nav>
};
export default Nav;