import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [details, setDetails] = useState({
    author: 'Fyll ut navn',
    email: 'Fyll ut Epost',
    message: 'Skriv en melding',
  });

  const history = useHistory();
  // setError('');

  const submitHandler = async (e) => {
    // console.log(details);

    console.log(await create(details));
    await create(details);

    history.push('/');
    e.preventDefault();
  };

  return (
    <>
      <StyledWelcome>
        <p>Skriv en melding til LG Rørleggerservice AS</p>
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
              onChange={(e) =>
                setDetails({ ...details, author: e.target.value })
              }
              value={details.author}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">
              Din epostadresse <i>- som du vil få svar på</i>
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
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
