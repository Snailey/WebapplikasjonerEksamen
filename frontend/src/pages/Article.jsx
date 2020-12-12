import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledWelcome,
  ArticleBodyContainer,
  ArticleDeleteBtn,
  ArticleEditBtn,
  ArticleBoxContainer,
  ArticleContainer,
  ArticleReadTime,
} from '../styles/StyledComponents';
import { Context } from '../contexts/GlobalStateContext';
import { create } from '../utils/logService';
import { get, remove } from '../utils/article';

function Article() {
  const [user] = useContext(Context);
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  const history = useHistory();

  function avgReadTime(str) {
    const words = str?.split(' ').length;
    const sec = Math.ceil((words / 200) * 0.6);
    return sec;
  }

  const removeArticle = async () => {
    const { data } = await remove(id);
    if (!data.success) {
      console.log('error getting data from db');
    } else {
      history.push('/articles');
    }
  };

  const getArticle = async () => {
    const { data } = await get(id);
    if (!data.success) {
      console.log('error getting data from db');
    } else {
      setArticle(data.data);
    }
  };

  const sendLog = async (time, url) => {
    const timeSinceLoad = (new Date().getTime() - time.getTime()) / 1000;
    const logData = {
      time: timeSinceLoad,
      url,
    };
    await create(logData);
  };

  useEffect(() => {
    const fetchData = async () => {
      getArticle();
    };
    fetchData();
    const time = new Date();
    const url = window.location.href;
    return () => {
      if (time && url) {
        sendLog(time, url);
      }
    };
  }, []);

  return (
    <>
      <StyledWelcome>
        <p>{article?.title}</p>
      </StyledWelcome>
      <ArticleBodyContainer>
        <ArticleContainer>
          <p>Av {article?.author}</p>
          <ArticleBoxContainer>
            <p className="article_date">{article?.date}</p>
          </ArticleBoxContainer>
        </ArticleContainer>
        <p>{article?.ingress}</p>
        <p>{article?.content}</p>
        <p>
          <b>{article?.category}</b>
        </p>
        <div>
          {user?.user?.role === 'admin' && (
            <>
              <ArticleDeleteBtn onClick={removeArticle}>SLETT</ArticleDeleteBtn>
              <ArticleEditBtn>REDIGER</ArticleEditBtn>
            </>
          )}

          <ArticleReadTime>
            Lesetid ca. {avgReadTime(article?.content)} minutte(r)
          </ArticleReadTime>
        </div>
      </ArticleBodyContainer>
    </>
  );
}

export default Article;
