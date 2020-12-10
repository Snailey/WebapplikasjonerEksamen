import PropTypes from 'prop-types';
import { React, useState, useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Context } from '../../contexts/GlobalStateContext';
import { Ul } from '../../styles/StyledComponents';
import { logout } from '../../utils/users';
import './Button.css';

import Modal from '../Modal';

const RightNav = ({ open }) => {
  const [user, setUser] = useContext(Context);
  const [modal, setModal] = useState(false);

  const history = useHistory();

  const updateModal = (data) => {
    setModal(data);
  };

  const LogOutUser = () => {
    console.log(user);
    logout();
    setUser('');
    history.push('/');
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
        {user?.user?.role === 'super' && (
          <li>
            <NavLink exact to="/logs" activeClassName="active">
              <p>Logg</p>
            </NavLink>
          </li>
        )}
        {!user?.user?.role && (
          <li>
            <NavLink exact to="/register" activeClassName="active">
              <p>Registrer ny bruker</p>
            </NavLink>
          </li>
        )}
        {!user?.user?.role && (
          <li>
            <button type="button" onClick={() => updateModal(true)}>
              Logg inn
            </button>
          </li>
        )}
        {user?.user?.role && (
          <li>
            <button type="button" onClick={() => LogOutUser()}>
              Logg ut
            </button>
          </li>
        )}
      </Ul>
      {modal && <Modal modal={modal} updateModal={updateModal} />}
    </>
  );
};

RightNav.propTypes = {
  open: PropTypes.any,
};

export default RightNav;
