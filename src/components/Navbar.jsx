import React from "react";
import { NavLink } from "react-router-dom";
import '../OrderPizza.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink 
        exact 
        to="/" 
        activeClassName="active"
      >
        Anasayfa
      </NavLink>
      <span>-</span>
      <NavLink 
        to="/orderPizza" 
        activeClassName="active"
      >
        Sipariş Oluştur
      </NavLink>
    </nav>
  );
}
