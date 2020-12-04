import React, { useState } from 'react';
import { Heading } from '@chakra-ui/core';
import create from '../utils/messageService.js';
import {
  FormGroup,
  Label,
  Input,
  Message,
  Button,
  StyledWelcome,
} from '../styles/StyledComponents';

function Contact() {
  const [message, setMessage] = useState('');

  const MessageHandleChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = () => {
    create(message);
  };

  return (
    <>
      <StyledWelcome>
        <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">
          Kontakt oss
        </Heading>
      </StyledWelcome>

      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <FormGroup>
          <Label htmlFor="label">Navn</Label>
          <Input
            type="text"
            className="form-control"
            value="BrukerNavn fra GlobalState"
          />
          <Label>Melding</Label>
          <textarea
            className="form-control"
            placeholder="Skriv en melding"
            cols="40"
            rows="10"
            value={message}
            onChange={MessageHandleChange}
          />
          <Message>ErrorMsg: Skriv en melding før du sender meldingen</Message>
          <Button type="submit">Send melding</Button>
        </FormGroup>
      </form>
    </>
  );
}

export default Contact;
