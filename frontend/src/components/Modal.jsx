/* eslint-disable no-unused-vars */
import { React, useState, useContext } from 'react';
import { Context } from '../contexts/GlobalStateContext';
import {
  Label,
  ModalContents,
  StyledModal,
  ModalHeader,
  ModalFormContainer,
} from '../styles/StyledComponents';
import { login } from '../utils/users';

const Modal = (modal, setModal) => {
  const [user, setUser] = useContext(Context);
  const [loginData, setLoginData] = useState('');

  const handleSubmit = (event) => {
    console.log(loginData);
    event.preventDefault();
    setUser(login(loginData));
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
            <button type="button" onClick={() => setModal(!modal)} id="close">
              &times;
            </button>
          </ModalHeader>
          <ModalFormContainer>
            <form>
              {JSON.stringify(user)}
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
    </>
  );
};

export default Modal;
