import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Ul } from '../../styles/StyledComponents';
import './Button.css';

import Modal from '../Modal';

const RightNav = ({ open }) => {
  const [modal, setModal] = useState(false);

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
          <button type="button" onClick={() => setModal(!modal)}>
            Logg inn
          </button>
        </li>
      </Ul>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </>
  );
};

RightNav.propTypes = {
  open: PropTypes.any,
};

export default RightNav;
