// import React, { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledWelcome,
  MainGrid,
  Article,
  Office,
  Contact,
  MainText,
  MainColumn,
} from '../styles/StyledComponents';
// import { create } from '../utils/logService';

const Home = () => (
  /*
  const sendLog = async (time, url) => {
    const timeSinceLoad = (new Date().getTime() - time.getTime()) / 1000;
    const data = {
      time: timeSinceLoad,
      url,
    };
    await create(data);
  };

  useEffect(() => {
    const time = new Date();
    const url = window.location.href;
    return () => {
      if (time && url) {
        sendLog(time, url);
      }
    };
  });
  */
  // return (
  <>
    <StyledWelcome>
      <p>Velkommen til LG Rørleggerservice AS</p>
    </StyledWelcome>
    <MainGrid>
      <MainColumn>
        <Link
          to="/offices/"
          style={{ textDecoration: 'none', color: '#000000' }}
        >
          <Office>
            <MainText>Kontorer</MainText>
          </Office>
        </Link>
        <Link
          to="/contact/"
          style={{ textDecoration: 'none', color: '#000000' }}
        >
          <Contact>
            <MainText>Kontakt</MainText>
          </Contact>
        </Link>
      </MainColumn>
      <Link to="/articles" style={{ textDecoration: 'none', color: '#000000' }}>
        <Article>
          <MainText>Se våre fagartikler om oppussing av bad</MainText>
        </Article>
      </Link>
    </MainGrid>
  </>
);
// };

export default Home;
