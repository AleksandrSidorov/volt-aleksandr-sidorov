import React from 'react';
import { NavLink } from 'react-router-dom';

const RouterLink = ({ to, children }) => {
  return (
    <li>
      <NavLink to={to} activeStyle={{ color: '#0f0f0f' }}>{children}</NavLink>
    </li>
  )
}

export default RouterLink;
