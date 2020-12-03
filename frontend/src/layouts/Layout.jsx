import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Layout = ({ children }) => (
  <>
    <Nav />
    <AppContainer>{children}</AppContainer>
    <Footer />
  </>
);

export default Layout;
