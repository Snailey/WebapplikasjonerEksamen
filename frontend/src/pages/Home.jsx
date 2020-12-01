import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';

const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
    font: 
`;

const Home = () => 
(
    <StyledWelcome>
        <Heading>Velkommen til FG Rørleggerservice AS</Heading>
    </StyledWelcome>
);


export default Home;
