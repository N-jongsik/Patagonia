import React, { NavLink } from "react-router-dom";
function NavbarComp() {
  return (
    <nav>
      <h1>patagonia</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/detail">Detail</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/map">Map</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComp;
