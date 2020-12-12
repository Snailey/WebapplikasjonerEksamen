import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { download } from '../utils/imageService';
import { ImageContainer, Image } from '../styles/StyledComponents';

const ArticleImage = ({ id }) => {
  const [src, setSrc] = useState(null);

  function arrayBufferToBase64(buffer) {
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
  };
  return (
    <>
      {id && downloadImage}
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
