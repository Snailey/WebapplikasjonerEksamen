/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { upload } from '../utils/imageService';
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

  const updateValue = () => {
    props.downloadImage(id);
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
              <button type="submit">Last opp</button>
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
  downloadImage: PropTypes.func,
};

export default ImageModal;
