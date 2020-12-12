import { React, useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import ExpandingTextArea from './ExpandingTextarea';
import ImageModal from './ImageModal';
import { Context } from '../contexts/GlobalStateContext';
import { catList } from '../utils/categoryService';
import CategoryModal from './CategoryModal';
import { create } from '../utils/article';
import ArticleImage from './ArticleImage';
import {
  Label,
  Input,
  FormContainer,
  ErrorMessage,
  CenterH2,
} from '../styles/StyledComponents';

const EditArticle = ({ before }) => {
  const [error, setError] = useState('');
  const [cats, setCats] = useState('');
  const [showImg, setShowImg] = useState(false);
  const [state, setState] = useState(before);
  const [categoryModal, setCategoryModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [user] = useContext(Context);
  const updateImageModal = (data) => {
    setImageModal(data);
  };
  const updateCategoryModal = (data) => {
    setCategoryModal(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await catList();
      if (!data) {
        setError('fetching categories failed');
      } else {
        setCats(data);
      }
    };
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // for (const key in state)
    alert(JSON.stringify(state));
    const { data, error } = await create(state);
    if (!data.success) {
      if (error) setError(error);
      else setError(data);
    } else {
      alert('sendt');
    }
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    console.log(inputValue);
    setState((prev) => ({
      ...prev,
      ...inputValue,
    }));
    console.log(JSON.stringify(state));
  };
  const handleCheckBox = (e) => {
    const inputValue = { [e.target.name]: e.target.value };
    setState((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };
  return (
    <>
      {(() => {
        if (!user) {
          return (
            <ErrorMessage>
              Vennligst logg inn for å redigere artikler.
            </ErrorMessage>
          );
        }
        if (
          user.user.role === 'admin' ||
          user.user.role === 'writer' ||
          user.user.role === 'super'
        ) {
          return (
            <>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <CenterH2>Rediger artikkel</CenterH2>
              <FormContainer>
                <form onSubmit={handleSubmit}>
                  <Label>Tittel</Label>
                  <Input
                    onChange={updateValue}
                    name="title"
                    value={state?.title}
                    placeholder="Skriv din tittel her"
                  />
                  <Label>Ingress</Label>
                  <Input
                    name="ingress"
                    onChange={updateValue}
                    value={state?.ingress}
                    placeholder="Skriv ingressen her"
                  />
                  <Label>Innhold</Label>
                  <ExpandingTextArea setState={setState} />
                  <Label>Bilde</Label>
                  {showImg && <ArticleImage id={state.image} />}
                  <button type="button" onClick={() => updateImageModal(true)}>
                    Last opp bilde..
                  </button>
                  <Label>Forfatter</Label>
                  <select
                    onChange={updateValue}
                    value={state?.author}
                    name="author"
                  >
                    <option disabled selected value>
                      Velg forfatter...
                    </option>
                    <option value="Lars Larsen">Lars Larsen</option>
                    <option value="Gunn Gundersen">Gunn Gundersen</option>
                    <option value="Simen Simensen">Simen Simensen</option>
                  </select>
                  <Label>Kategori</Label>
                  <section>
                    <select
                      name="category"
                      value={state?.category}
                      onChange={updateValue}
                    >
                      <option disabled selected value>
                        Velg kategori...
                      </option>
                      {cats?.data?.data?.map((e, key) => (
                        <option key={key} value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => updateCategoryModal(true)}
                    >
                      Legg til kategori
                    </button>
                  </section>
                  {user.user.role === 'admin' && (
                    <>
                      <Label>Make public</Label>
                      <input
                        type="checkbox"
                        name="public"
                        onChange={handleCheckBox}
                        checked={state?.public}
                      />
                      <Label>Publish</Label>
                      <input
                        type="checkbox"
                        name="publish"
                        onChange={handleCheckBox}
                        checked={state?.published}
                      />
                    </>
                  )}
                  <button type="submit">Send inn artikkel</button>
                </form>
              </FormContainer>
              {imageModal && (
                <ImageModal
                  modal={imageModal}
                  updateModal={updateImageModal}
                  setState={setState}
                  state={state}
                  setShowImg={setShowImg}
                />
              )}
              {categoryModal && (
                <CategoryModal
                  modal={categoryModal}
                  updateModal={updateCategoryModal}
                  setState={setState}
                />
              )}
            </>
          );
        }
        <ErrorMessage>
          Du må være administrator eller forfatter for å redigere artikler. Du
          er en {user?.user?.role}.
        </ErrorMessage>;
      })()}
    </>
  );
};

EditArticle.propTypes = {
  before: PropTypes.object,
};

export default EditArticle;
