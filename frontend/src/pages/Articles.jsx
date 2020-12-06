import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledWelcome,
  ArticleImageContainer,
  ArticleBodyContainer,
  ArticleBtnContainer,
  ArticleContainer,
  ArticleSearchBtn,
  ArticleNewBtn,
  ArticleBoxContainer,
} from '../styles/StyledComponents';

const data = [
  {
    id: 1,
    title: 'Artikkeltittel 1',
    category: 'Kategorinavn',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
  },
  {
    id: 2,
    title: 'Artikkeltittel 2',
    category: 'Kategorinavn',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
  },
  {
    id: 3,
    title: 'Artikkeltittel 3',
    category: 'Kategorinavn',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
  },
  {
    id: 4,
    title: 'Artikkeltittel 4',
    category: 'Kategorinavn',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
  },
  {
    id: 5,
    title: 'Artikkeltittel 5',
    category: 'Kategorinavn',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
  },
];

function Articles() {
  return (
    <>
      <StyledWelcome>
        <p>Fagartikler</p>
      </StyledWelcome>
      <ArticleBodyContainer>
        <ArticleBtnContainer>
          <ArticleNewBtn>NY ARTIKKEL</ArticleNewBtn>
          <ArticleBoxContainer>
            <ArticleSearchBtn>SØK</ArticleSearchBtn>
            <ArticleSearchBtn>FILTER</ArticleSearchBtn>
          </ArticleBoxContainer>
        </ArticleBtnContainer>
        {data.map((article) => (
          <Link to={`/articles/${article.id}`}>
            <ArticleContainer>
              <ArticleImageContainer>
                <img
                  src={article.image}
                  alt="Bilde av Rørlegger"
                  width="128"
                  height="128"
                />
              </ArticleImageContainer>
              <div>
                <ArticleContainer>
                  <h1>{article.title}</h1>
                  <ArticleBoxContainer>
                    <p>
                      <b>{article.category}</b>
                    </p>
                  </ArticleBoxContainer>
                </ArticleContainer>
                <p>{article.content}</p>
              </div>
            </ArticleContainer>
          </Link>
        ))}
      </ArticleBodyContainer>
    </>
  );
}

export default Articles;
