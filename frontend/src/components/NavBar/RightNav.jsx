import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Ul } from '../../styles/StyledComponents';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <li>
      <NavLink exact to="/" activeClassName="active">
        <p>Hjem</p>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/offices" activeClassName="active">
        <p>Kontorer</p>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/articles" activeClassName="active">
        <p>Fagartikler</p>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/contact" activeClassName="active">
        <p>Kontakt oss</p>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/logs" activeClassName="active">
        <p>Logg</p>
      </NavLink>
    </li>
    <li>
      <p>Logg inn</p>
    </li>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.any,
};

export default RightNav;
