/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import {
  Label,
  ModalContents,
  StyledModal,
  ModalHeader,
  ModalFormContainer,
  CloseButton,
  ErrorMessage,
} from '../styles/StyledComponents';
import { create } from '../utils/categoryService';

const Modal = (props) => {
  const [category, setCategory] = useState('');
  const [errormsg, setErrormsg] = useState('');

  const handleSubmit = async (event) => {
    const { data, error } = await create(category);
    if (!data.success) {
      if (error) setErrormsg(error);
      else setErrormsg(data);
    } else if (data.success) {
      props.updateModal(false);
    }

    event.preventDefault();
  };

  return (
    <>
      <StyledModal>
        <ModalContents>
          <ModalHeader>
            <p>Logg inn</p>
            <CloseButton
              type="button"
              onClick={() => props.updateModal(false)}
              id="close"
            >
              &times;
            </CloseButton>
          </ModalHeader>
          <ModalFormContainer>
            <form>
              <Label>Category name:</Label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory({ name: e.target.value })}
                value={category.name}
              />
              <button type="button" onClick={handleSubmit}>
                Add category
              </button>
            </form>
          </ModalFormContainer>
          {errormsg && <ErrorMessage>{errormsg}</ErrorMessage>}
        </ModalContents>
      </StyledModal>
    </>
  );
};

Modal.propTypes = {
  updateModal: PropTypes.func,
};

export default Modal;
