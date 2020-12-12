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
    value: 'Alle',
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
  const [filter, setFilter] = useState('Alle');
  const [articles, setArticles] = useState(null);

  function avgReadTime(str) {
    const words = str.split(' ').length;
    const sec = Math.ceil((words / 200) * 0.6);
    return sec;
  }

  const getPublishedArticles = async () => {
    const { data } = await getPublished(search, filter);
    if (!data?.success) {
      console.log('error getting data from db');
    } else {
      setArticles(data.data.data);
    }
  };

  const getPublicArticles = async () => {
    const { data } = await getPublic(search, filter);
    if (!data?.success) {
      console.log('error getting data from db');
    } else {
      setArticles(data.data.data);
      // console.log(data.data);
    }
  };

  const getData = () => {
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

  const handleChange = async (e) => {
    await setFilter(e.value);
    getData();
  };

  useEffect(() => {
    const fetchData = async () => {
      getData();
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
          articles.map((article) => (
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
*/
