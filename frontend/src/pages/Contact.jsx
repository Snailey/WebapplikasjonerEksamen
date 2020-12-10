import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from '../utils/messageService.js';
import { getUserInfo } from '../utils/users.js';

import {
  StyledWelcome,
  Button,
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  CenterH2,
} from '../styles/StyledComponents';

function Contact() {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [getData, setGetData] = useState(null);

  const history = useHistory();

  const submitHandler = async () => {
    const data = {
      author,
      email,
      message,
    };
    console.log(data);
    await create(data);
    history.push('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserInfo();
      if (!data.success) {
        console.log('Laster ikke ned data fra db');
      } else {
        setGetData(data.data);
        if (getData) {
          setAuthor(getData.name);
        }
        if (getData) {
          setEmail(getData.email);
        }
      }
    };
    fetchData();
  });

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
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Melding</Label>
            <TextArea
              type="text"
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </FormGroup>
          <Button type="submit">Send Melding</Button>
        </FormContainer>
      </form>
    </>
  );
}

export default Contact;
