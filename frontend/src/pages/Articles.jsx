import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../contexts/GlobalStateContext';
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
import { getPublic, getPublished } from '../utils/article';
// import { catList } from '../utils/categoryService';

const filterData = [
  {
    value: ' ',
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
  const [user] = useContext(Context);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(' ');
  const [articles, setArticles] = useState(null);

  function avgReadTime(str) {
    const words = str.split(' ').length;
    const sec = Math.ceil((words / 200) * 0.6);
    return sec;
  }

  const handleChange = (e) => {
    setFilter(e.value);
  };

  const getPublishedArticles = async () => {
    const { data } = await getPublished();
    if (!data?.success) {
      console.log('error getting data from db');
    } else {
      setArticles(data.data);
      // console.log(data.data);
    }
  };

  const getPublicArticles = async () => {
    const { data } = await getPublic();
    if (!data?.success) {
      console.log('error getting data from db');
    } else {
      setArticles(data.data);
      // console.log(data.data);
    }
  };

  /*
  const getFilter = async () => {
    const { data } = await catList();
    if (!data?.success) {
      console.log('error getting data from db');
    } else {
      setFilter(data.data);
      // console.log(filter);
    }
  };
*/

  useEffect(() => {
    const fetchData = async () => {
      // getFilter();
      if (
        user?.user?.role === 'user' ||
        user?.user?.role === 'admin' ||
        user?.user?.role === 'super'
      ) {
        getPublishedArticles();
      } else {
        getPublicArticles();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledWelcome>
        <p>Fagartikler</p>
      </StyledWelcome>
      <ArticleBodyContainer>
        <ArticleBtnContainer>
          {user?.user?.role === 'admin' && (
            <Link to="/newArticle">
              <ArticleNewBtn>NY ARTIKKEL</ArticleNewBtn>
            </Link>
          )}
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
            {filter && (
              <OfficeFilterButton
                value={filterData?.find((obj) => obj.value === filter)}
                options={filterData}
                onChange={handleChange}
              />
            )}
          </ArticleBoxContainer>
        </ArticleBtnContainer>
        {articles &&
          articles
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
                    {article?.img && (
                      <img
                        src={article?.image}
                        alt="Bilde av Rørlegger"
                        width="128"
                        height="128"
                      />
                    )}
                  </ArticleImageContainer>
                  <div>
                    <ArticleContainer>
                      <h1>{article?.title}</h1>
                      <ArticleBoxContainer>
                        <p>
                          <b>{article?.category}</b>
                        </p>
                      </ArticleBoxContainer>
                    </ArticleContainer>
                    <p>{article?.content}</p>
                    <p>{article?.ingress}</p>
                    <ArticleReadTime>
                      Lesetid ca. {avgReadTime(article?.content)} minutte(r)
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

/*

.filter((category) => category.category.includes(filter))
            .filter(
              (title) =>
                title.title.toLowerCase().includes(search.toLowerCase()) ||
                title.content.toLowerCase().includes(search.toLowerCase())
            )



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
*/
