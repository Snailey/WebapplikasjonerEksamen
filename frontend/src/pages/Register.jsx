import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../utils/users.js';

import {
  StyledWelcome,
  Button,
  FormContainer,
  FormGroup,
  Label,
  Input,
  CenterH2,
} from '../styles/StyledComponents';

function Register() {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const history = useHistory();

  const submitHandler = async () => {
    console.log(data);
    const registerUser = await register(data);
    console.log(registerUser);
    if (registerUser) {
      history.push('/');
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
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Din epostadresse</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Passord</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
            />
          </FormGroup>
          <Button type="submit">Registrer bruker</Button>
        </FormContainer>
      </form>
    </>
  );
}

export default Register;
