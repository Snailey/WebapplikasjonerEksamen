/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { React, useState, useContext } from 'react';
import { Context } from '../contexts/GlobalStateContext';
import {
  Label,
  ModalContents,
  StyledModal,
  ModalHeader,
  ModalFormContainer,
  CloseButton,
} from '../styles/StyledComponents';
import { login } from '../utils/users';

const Modal = (props) => {
  const [user, setUser] = useContext(Context);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    console.log(loginData);
    const { data, error } = await login(loginData);
    // console.log(data);
    if (!data.success) {
      setError(error);
    }
    setUser(data);
    if (error) setError(error);
    else setUser(data);
    props.updateModal(false);
    event.preventDefault();
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setLoginData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <>
      <StyledModal>
        <ModalContents>
          <ModalHeader>
            <p>Logg inn</p>
            <CloseButton
              type="button"
              onClick={() => props.updateModal(false)}
              id="close"
            >
              &times;
            </CloseButton>
          </ModalHeader>
          <ModalFormContainer>
            <form>
              <Label>Epost:</Label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                value={loginData.email}
              />
              <Label>Passord:</Label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                value={loginData.password}
              />
              <button type="button" onClick={handleSubmit}>
                Logg inn
              </button>
            </form>
          </ModalFormContainer>
        </ModalContents>
      </StyledModal>
      {error && <p>Error Message:{error}</p>}
    </>
  );
};

Modal.propTypes = {
  updateModal: PropTypes.func,
};

export default Modal;
