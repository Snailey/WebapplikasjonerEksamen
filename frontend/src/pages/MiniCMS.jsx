import { React, useContext, useState, useEffect } from 'react';
import ExpandingTextArea from '../components/ExpandingTextarea';
import ImageModal from '../components/ImageModal';
import { Context } from '../contexts/GlobalStateContext';
import { catList } from '../utils/categoryService';
import { download } from '../utils/imageService';
import CategoryModal from '../components/CategoryModal';
import { create } from '../utils/article';
// eslint-disable-next-line no-unused-vars
import ArticleImage from '../components/ArticleImage';
import {
  StyledWelcome,
  Label,
  Input,
  FormContainer,
  ErrorMessage,
  Image,
  ImageContainer,
} from '../styles/StyledComponents';

const MiniCMS = () => {
  const [error, setError] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [cats, setCats] = useState('');
  const [src, setSrc] = useState(null);
  const [state, setState] = useState({
    title: '',
    author: '',
    ingress: '',
    content: '',
    category: '',
  });
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

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const downloadImage = async (id) => {
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
      {(() => {
        if (!user) {
          return (
            <ErrorMessage>
              Vennligst logg inn for å skrive artikler.
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
              <StyledWelcome>
                <p>Ny Artikkel</p>
              </StyledWelcome>
              <FormContainer>
                <form onSubmit={handleSubmit}>
                  <Label>Tittel</Label>
                  <Input
                    onChange={updateValue}
                    name="title"
                    placeholder="Skriv din tittel her"
                  />
                  <Label>Ingress</Label>
                  <Input
                    name="ingress"
                    onChange={updateValue}
                    placeholder="Skriv ingressen her"
                  />
                  <Label>Innhold</Label>
                  <ExpandingTextArea setState={setState} />
                  <Label>Bilde</Label>
                  {src && (
                    <ImageContainer>
                      <Image alt="your upload" src={src} />
                    </ImageContainer>
                  )}
                  <button type="button" onClick={() => updateImageModal(true)}>
                    Last opp bilde..
                  </button>
                  <Label>Forfatter</Label>
                  <select onChange={updateValue} name="author">
                    <option disabled selected value>
                      Velg forfatter...
                    </option>
                    <option value="Lars Larsen">Lars Larsen</option>
                    <option value="Gunn Gundersen">Gunn Gundersen</option>
                    <option value="Simen Simensen">Simen Simensen</option>
                  </select>
                  <Label>Kategori</Label>
                  <section>
                    <select name="category" onChange={updateValue}>
                      <option disabled selected value>
                        Velg kategori...
                      </option>
                      {cats?.data?.data?.map((e, key) => (
                        <option key={key} value={e._id}>
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
                  <button type="submit">Send inn artikkel</button>
                </form>
              </FormContainer>
              {imageModal && (
                <ImageModal
                  modal={imageModal}
                  updateModal={updateImageModal}
                  setState={setState}
                  downloadImage={downloadImage}
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
          Du må være administrator eller forfatter for å skrive artikler. Du er
          en {user?.user?.role}.
        </ErrorMessage>;
      })()}
    </>
  );
};
export default MiniCMS;
