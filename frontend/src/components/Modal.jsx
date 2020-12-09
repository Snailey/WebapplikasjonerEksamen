/* eslint-disable no-unused-vars */
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

const Modal = (modal, setModal) => {
  const [user, setUser] = useContext(Context);
  const [loginData, setLoginData] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (event) => {
    console.log(loginData);
    event.preventDefault();
    const { data, error } = await login(loginData);
    if (error) setError(error);
    setUser(data);
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
              onClick={() => setModal(!modal)}
              id="close"
            >
              &times;
            </CloseButton>
          </ModalHeader>
          <ModalFormContainer>
            <form>
              {user !== null && (
                <p>
                  Logged in as:
                  {JSON.stringify(user.user.email)}
                  Token: {JSON.stringify(user.token)}
                </p>
              )}
              <Label>Epost:</Label>
              <input type="text" onChange={updateValue} name="email" />
              <Label>Passord:</Label>
              <input type="password" onChange={updateValue} name="password" />
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

export default Modal;
