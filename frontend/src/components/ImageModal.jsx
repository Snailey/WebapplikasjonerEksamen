/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { upload, download } from '../utils/imageService';
import {
  Label,
  ModalContents,
  StyledModal,
  ModalHeader,
  ModalFormContainer,
  CloseButton,
  ErrorMessage,
} from '../styles/StyledComponents';

const ImageModal = (props) => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [id, setImageId] = useState(null);
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
  const updateValue = () => {
    const inputValue = { image: id };
    props.setState((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    if (!data.success) {
      setError(data.message);
    } else {
      setImageId(data?.data?._id);
      setSuccess(true);
      setError(null);
      updateValue();
      props.updateModal(false);
    }
  };
  return (
    <>
      <StyledModal>
        <ModalContents>
          <ModalHeader>
            <p>Last opp bilde</p>
            <CloseButton
              type="button"
              onClick={() => props.updateModal(false)}
              id="close"
            >
              &times;
            </CloseButton>
          </ModalHeader>
          <ModalFormContainer>
            {src && <img alt="my" src={src} />}
            {success && (
              <p>
                Bilde opplastet med{' '}
                <button type="button" onClick={downloadImage}>
                  {id}
                </button>
              </p>
            )}
            {error && <p>Noe gikk galt med opplastingen</p>}
            <form
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
            >
              <label htmlFor="image">Last opp bilde</label>
              <input
                type="file"
                id="image"
                name="image"
                accept=".jpg"
                onChange={(event) => {
                  console.log(event);
                  const imageFile = event.target.files[0];
                  setFile(imageFile);
                }}
              />
              <button type="submit">Lagre</button>
            </form>
          </ModalFormContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ModalContents>
      </StyledModal>
    </>
  );
};

ImageModal.propTypes = {
  updateModal: PropTypes.func,
  setState: PropTypes.func,
};

export default ImageModal;
