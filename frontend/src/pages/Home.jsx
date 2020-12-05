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

// let startTime;

const Home = () => (
  /*
  // LOG TiME SPENT ON PAGE
  useEffect(() => {
    useEffect(() => startTime = new Date(),[])
    return () => {
      const timeSinceLoad = (new Date().getTime() - startTime.getTime()) / 1000
      create(timeSinceLoad)
    }
  }, []);
  */

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

export default Home;
