import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Ul } from '../../styles/StyledComponents';
import { logout } from '../../utils/users';
import './Button.css';

import Modal from '../Modal';

const RightNav = ({ open }) => {
  const [modal, setModal] = useState(false);

  const updateModal = (data) => {
    setModal(data);
  };

  return (
    <>
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
          <button type="button" onClick={() => updateModal(true)}>
            Logg inn
          </button>
        </li>
        <li>
          <button type="button" onClick={() => logout()}>
            Logg ut
          </button>
        </li>
      </Ul>
      {modal && <Modal modal={modal} updateModal={updateModal} />}
    </>
  );
};

RightNav.propTypes = {
  open: PropTypes.any,
};

export default RightNav;
