import React, { useState, useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import { register } from '../utils/users.js';
import { Context } from '../contexts/GlobalStateContext';

import {
  StyledWelcome,
  Button,
  FormContainer,
  FormGroup,
  Label,
  Input,
  CenterH2,
  ErrorMessage,
} from '../styles/StyledComponents';

function Register() {
  const [user, setUser] = useContext(Context);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errormsg, setErrormsg] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data, error } = await register(registerData);
    console.log(data);
    if (!data.success) {
      if (error) setErrormsg(error);
      else setErrormsg(data);
    } else if (data.success) {
      setUser(data);
      console.log(user);
    }
  };

  return (
    <>
      <StyledWelcome>
        <p>Registrer ny bruker</p>
      </StyledWelcome>
      <form onSubmit={submitHandler}>
        <FormContainer>
          <CenterH2>Registrer ny bruker</CenterH2>
          <FormGroup>
            <Label htmlFor="name">Navn</Label>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              value={registerData.name}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Din epostadresse</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              value={registerData.email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Passord</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              value={registerData.password}
            />
          </FormGroup>
          {!user?.user?.role && <Button type="submit">Registrer bruker</Button>}
          {user?.user?.role && <h3>Du er registrert</h3>}
        </FormContainer>
        {errormsg && <ErrorMessage>{errormsg}</ErrorMessage>}
      </form>
    </>
  );
}

export default Register;
