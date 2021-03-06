/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar/Navbar';

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <AppContainer>{children}</AppContainer>
    <Footer />
  </>
);

export default Layout;
