import PropTypes from 'prop-types';
import { React, useState, useEffect } from 'react';
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
        const path = data?.data?.data?.path;
        const path2 = path?.substring(path?.lastIndexOf('\\') + 1);
        setSrc(`http://localhost:5000/images/${path2}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
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
