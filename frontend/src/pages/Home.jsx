import React, { useEffect, useState } from 'react';
import { Box,Heading } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
`;


const Home = () => 
(
    <>
    <StyledWelcome>
        <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Velkommen til FG Rørleggerservice AS</Heading>
    </StyledWelcome>
    <Link to={'/offices/'}>
        <Box bg="#f0f5f5" d="inline-block" ml="3em" mr="1em" p="6" marginY="3em"><Heading fontSize="3em" >Kontorer</Heading></Box>
    </Link>
    <Box bg="#f0f5f5"  mr="3em" d="inline-block" marginY="3em" w="50%"p="6"><Heading fontSize="3em">Kontakt</Heading></Box>
    <Link to={'/articles'}>
        <Box  bg="#f0f5f5" d="inline-block" w="auto" ml="7em" mr="7em" p="6"><Heading fontSize="3em">Se våre fagartikler om oppussing av bad</Heading></Box>
    </Link>
    </>
);


export default Home;
