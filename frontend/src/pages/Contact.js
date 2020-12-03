import React, { useState }from 'react';
import { Heading } from '@chakra-ui/core';
import { StyledWelcome } from '../styles/StyledComponents';
import { FormGroup, Label, Input, Message, Button, FormContainer } from '../styles/Forms';

function  Contact() { 

    const [message, setMessage] = useState('');

    const MessageHandleChange = (e) => {
        setMessage(e.currentTarget.value)
    }

    const handleSubmit = (e) => {

    }

    return( 
    <>
        <StyledWelcome>
            <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Kontakt oss</Heading>
        </StyledWelcome>
        
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <FormGroup>
                <Label htmlFor="label">Navn</Label>
                <Input type="text" className="form-control" value='BrukerNavn fra GlobalState' />
                <Label>Melding</Label>
                <textarea className="form-control" placeholder="Skriv en melding" cols="40" rows="10" value={message} onChange={MessageHandleChange} />
                <Message>ErrorMsg: Skriv en melding før du sender meldingen</Message>       
                <Button type="submit">Send melding</Button>
            </FormGroup>
        </form>
    </>    
    )
}    
    
export default Contact;


/*
<form id="contact-form" onSubmit={handleSubmit} method="POST">
<div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" value='BrukerNavn fra GlobalState'/>
</div>
<div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea className="form-control" rows="5" value={message} onChange={MessageHandleChange} />
</div>
<button type="submit" className="btn btn-primary">Send</button>
</form>
*/