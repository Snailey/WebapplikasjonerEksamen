import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { StyledWelcome } from '../styles/StyledComponents';

const Home = () => (
  <>
    <StyledWelcome>
      <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">
        Velkommen til LG Rørleggerservice AS
      </Heading>
    </StyledWelcome>
    <Link to="/offices/">
      <Box bg="#f0f5f5" d="inline-block" ml="3em" mr="1em" p="6" marginY="3em">
        <Heading fontSize="3em">Kontorer</Heading>
      </Box>
    </Link>
    <Link to="/contact/">
      <Box bg="#f0f5f5" mr="3em" d="inline-block" marginY="3em" w="50%" p="6">
        <Heading fontSize="3em">Kontakt</Heading>
      </Box>
    </Link>
    <Link to="/articles">
      <Box bg="#f0f5f5" d="inline-block" w="auto" ml="7em" mr="7em" p="6">
        <Heading fontSize="3em">
          Se våre fagartikler om oppussing av bad
        </Heading>
      </Box>
    </Link>
  </>
);

export default Home;
