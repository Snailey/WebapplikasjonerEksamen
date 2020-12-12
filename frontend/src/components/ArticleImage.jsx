import PropTypes from 'prop-types';
imagimport { React, useState, useEffect } from 'react';
import { get } from '../utils/imageService';
import {
  ImageContainer,
  Image,
  ErrorMessage,
} from '../styles/StyledComponents';

const ArticleImage = ({ id }) => {
  const [src, setSrc] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(`test${id}`);
    const fetchData = async () => {
      console.log('hailmary');
      const data = await get(id);
      if (!data) {
        setError('fetching image source failed');
      } else {
        console.log(JSON.stringify(data));
        setSrc(data?.data?.data?.path);
      }
    };
    fetchData();
  }, []);

  /* function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const downloadImage = async () => {
    const { data } = await download(id);
    console.log(data);
    const img = await data.arrayBuffer().then((buffer) => {
      const base64Flag = 'data:image/jpeg;base64,';
      const imageStr = arrayBufferToBase64(buffer);
      return base64Flag + imageStr;
    });
    console.log(img);
    // const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
    setSrc(img);
  }; */
  return (
    <>
      <p>Test{`thisisthe${src}`}</p>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {src && (
        <ImageContainer>
          <Image alt="your upload" src={src} />
        </ImageContainer>
      )}
    </>
  );
};

ArticleImage.propTypes = {
  id: PropTypes.any,
};

export default ArticleImage;
