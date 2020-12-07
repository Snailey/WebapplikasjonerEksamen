import React, { useState } from 'react';
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
  ArticleReadTime,
  OfficeFilterButton,
} from '../styles/StyledComponents';

const data = [
  {
    id: 1,
    title: 'Artikkeltittel 1',
    category: 'Innredning',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    readTime: 156,
  },
  {
    id: 2,
    title: 'Artikkeltittel 2',
    category: 'Bad',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    readTime: 560,
  },
  {
    id: 3,
    title: 'Artikkeltittel 3',
    category: 'Kjøkken',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    readTime: 300,
  },
  {
    id: 4,
    title: 'Artikkeltittel 4',
    category: 'Kjøkken',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    readTime: 600,
  },
  {
    id: 5,
    title: 'Artikkeltittel 5',
    category: 'Bad',
    content:
      'Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god ' +
      'kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge ' +
      'drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i ' +
      'trygge hender',
    image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    readTime: 500,
  },
];

const filterData = [
  {
    value: '',
    label: 'Alle',
  },
  {
    value: 'Bad',
    label: 'Bad',
  },
  {
    value: 'Kjøkken',
    label: 'Kjøkken',
  },
  {
    value: 'Armatur',
    label: 'Armatur',
  },
  {
    value: 'Innredning',
    label: 'Innredning',
  },
];

function Articles() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.value);
    console.log(filter);
  };

  return (
    <>
      <StyledWelcome>
        <p>Fagartikler</p>
      </StyledWelcome>
      <ArticleBodyContainer>
        <ArticleBtnContainer>
          <Link to="/newArticle">
            <ArticleNewBtn>NY ARTIKKEL</ArticleNewBtn>
          </Link>
          <ArticleBoxContainer>
            <ArticleSearchBtn>SØK</ArticleSearchBtn>
            <textarea
              type="text"
              name="search"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <ArticleSearchBtn>FILTER</ArticleSearchBtn>
            <OfficeFilterButton
              placeholder="Filter"
              value={filterData.find((obj) => obj.value === filter)}
              options={filterData}
              onChange={handleChange}
            />
          </ArticleBoxContainer>
        </ArticleBtnContainer>
        {data
          .filter((category) => category.category.includes(filter))
          .filter(
            (title) =>
              title.title.toLowerCase().includes(search.toLowerCase()) ||
              title.content.toLowerCase().includes(search.toLowerCase())
          )
          .map((article) => (
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
                  <ArticleReadTime>
                    Lesetid ca. {Math.floor(article.readTime / 60)} minutter.
                  </ArticleReadTime>
                </div>
              </ArticleContainer>
            </Link>
          ))}
      </ArticleBodyContainer>
    </>
  );
}

export default Articles;
