import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Ul } from '../../styles/StyledComponents';
import Modal from '../Modal';

const RightNav = ({ open }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
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
