import React from 'react';
import { Nav } from '../../styles/StyledComponents';
import Burger from './Burger';

const Navbar = () => (
  <Nav>
    <div className="logo">LG Rørleggerservice AS</div>
    <Burger />
  </Nav>
);

export default Navbar;
