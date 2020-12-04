import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Heading } from '@chakra-ui/core';
// import axios from 'axios';
import create from '../utils/messageService.js';

import {
  StyledWelcome,
  Button,
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  CenterH2,
  //  Message,
} from '../styles/StyledComponents';

function Contact() {
  // const [error, setError] = useState('');
  // const [message, setMessage] = useState('');
  const [details, setDetails] = useState({ name: '', message: '' });

  // const history = useHistory();
  // setError('');

  const submitHandler = async () => {
    // console.log(details);
    await create(details);

    /*
    axios
      .post(`https://localhost:5000/appi/vi/message`, { ...details })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
      */

    // history.push('/');
  };

  return (
    <>
      <StyledWelcome>
        <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">
          Skriv en melding til LG Rørleggerservice AS
        </Heading>
      </StyledWelcome>
      <form onSubmit={submitHandler}>
        <FormContainer>
          <CenterH2>Send en melding til LG Rørlegger</CenterH2>
          <FormGroup>
            <Label htmlFor="name">Navn</Label>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Melding</Label>
            <TextArea
              type="text"
              name="message"
              id="message"
              onChange={(e) =>
                setDetails({ ...details, message: e.target.value })
              }
              value={details.message}
            />
          </FormGroup>
          <Button type="submit">Send Melding</Button>
        </FormContainer>
      </form>
    </>
  );
}

export default Contact;
