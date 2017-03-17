import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RouterLink from './RouterLink';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Invoice App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <RouterLink to="/invoices">Invoices</RouterLink>
      <RouterLink to="/customers">Customers</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
    </Nav>
  </Navbar>
)

export default Header;
