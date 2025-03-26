import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';



function FormNav() {
  return (
    <header className="form-nav-header">
      <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="header-img" />
      <Nav className="nav-container">
        <NavItem className="nav-item">
          <NavLink to="/" >
            Anasayfa 
          </NavLink>
        </NavItem>
        <span> - </span>
        <NavItem className="nav-item">
          <NavLink to="" >
            Seçenekler
          </NavLink>
        </NavItem>
        <span> - </span>
        <NavItem className="nav-item">
          <NavLink to="/orderPizza" >
            Sipariş Oluştur
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}

export default FormNav;
