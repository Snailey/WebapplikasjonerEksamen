import React, { useEffect } from 'react';
import {
  StyledWelcome,
  ArticleBodyContainer,
  ArticleDeleteBtn,
  ArticleEditBtn,
  ArticleBoxContainer,
  ArticleContainer,
  ArticleReadTime,
} from '../styles/StyledComponents';
import { create } from '../utils/logService';

const data = {
  id: 2,
  title: 'Artikkeltittel 2',
  author: 'Forfatter',
  date: '05.12.20',
  category: 'Kategorinavn',
  ingress:
    'Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og ' +
    'entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi ' +
    'foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for ' +
    'faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',
  content: [
    {
      subtitle: 'Undertittel',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
        'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
        'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
        'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
        'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
        'ipsum dolor sit amet. ' +
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
        'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
        'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
        'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
        'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
        'ipsum dolor sit amet.',
    },
    {
      subtitle: 'Undertittel',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
        'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
        'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
        'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
        'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
        'ipsum dolor sit amet. ' +
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
        'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
        'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
        'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
        'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
        'ipsum dolor sit amet.',
    },
    {
      subtitle: 'Undertittel',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
        'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
        'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
        'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
        'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
        'ipsum dolor sit amet. ' +
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
        'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
        'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
        'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
        'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
        'ipsum dolor sit amet.',
    },
  ],
  imgage: 'https://www.gamereactor.no/media/65/_1976583.jpg',
  readTime: 350,
};

function Article() {
  const sendLog = async (time, url) => {
    const timeSinceLoad = (new Date().getTime() - time.getTime()) / 1000;
    const logData = {
      time: timeSinceLoad,
      url,
    };
    await create(logData);
  };

  useEffect(() => {
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
        <p>{data?.title}</p>
      </StyledWelcome>
      <ArticleBodyContainer>
        <ArticleContainer>
          <p>Av {data?.author}</p>
          <ArticleBoxContainer>
            <p className="article_date">{data?.date}</p>
          </ArticleBoxContainer>
        </ArticleContainer>
        <p>{data.ingress}</p>
        {data?.content?.map((content) => (
          <>
            <h2>{content?.subtitle}</h2>
            <p>{content?.content}</p>
          </>
        ))}
        <p>
          <b>{data.category}</b>
        </p>
        <div>
          <ArticleDeleteBtn>SLETT</ArticleDeleteBtn>
          <ArticleEditBtn>REDIGER</ArticleEditBtn>
          <ArticleReadTime>
            Lesetid ca. {Math.floor(data?.readTime / 60)} minutter.
          </ArticleReadTime>
        </div>
      </ArticleBodyContainer>
    </>
  );
}

export default Article;
