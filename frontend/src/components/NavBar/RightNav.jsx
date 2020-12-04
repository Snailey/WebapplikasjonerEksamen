import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Ul } from '../../styles/StyledComponents';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <li>
      <NavLink exact to="/" activeClassName="active">
        <a>Hjem</a>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/offices" activeClassName="active">
        <a>Kontorer</a>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/articles" activeClassName="active">
        <a>Fagartikler</a>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/contact" activeClassName="active">
        <a>Kontakt oss</a>
      </NavLink>
    </li>
    <li>
      <a>Logg inn</a>
    </li>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.any,
};

export default RightNav;
