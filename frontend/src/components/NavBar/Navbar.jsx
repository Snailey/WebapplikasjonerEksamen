import React from 'react';
import { Nav, MainText } from '../../styles/StyledComponents';
import Burger from './Burger';

const Navbar = () => (
  <Nav>
    <MainText>LG Rørleggerservice AS</MainText>
    <Burger />
  </Nav>
);

export default Navbar;
