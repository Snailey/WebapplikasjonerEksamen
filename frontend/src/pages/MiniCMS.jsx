import { React, useContext, useState, useEffect } from 'react';
import ExpandingTextArea from '../components/ExpandingTextarea';
import ImageModal from '../components/ImageModal';
import { Context } from '../contexts/GlobalStateContext';
// eslint-disable-next-line import/no-named-as-default
import { catList } from '../utils/categoryService';
import { downloadUrl } from '../utils/imageService';
import {
  StyledWelcome,
  Label,
  Input,
  FormContainer,
  ErrorMessage,
} from '../styles/StyledComponents';

const MiniCMS = () => {
  const [error, setError] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [cats, setCats] = useState('');
  const [state, setState] = useState({
    title: '',
    author: '',
    ingress: '',
    content: '',
    image: '',
    category: '',
  });
  const [imageModal, setImageModal] = useState(false);
  const [user] = useContext(Context);
  const updateImageModal = (data) => {
    setImageModal(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await catList();
      if (!data) {
        setError('f cats');
      } else {
        setCats(data);
      }
    };
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    let valuesSet = true;
    event.preventDefault();
    // for (const key in state)
    Object.keys(state).forEach((key) => {
      if (`${key}` !== 'image' && !state.key) {
        console.log(key + state.key);
        valuesSet = false;
      }
    });
    alert(valuesSet);
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
                  <ExpandingTextArea />
                  <Label>Bilde</Label>
                  {state.image && (
                    <img
                      src={downloadUrl(state.image)}
                      alt="ARticle illustration"
                    />
                  )}
                  <button type="button" onClick={() => updateImageModal(true)}>
                    Last opp bilde..
                  </button>
                  <Label>Forfatter</Label>
                  <select onChange={updateValue} name="author">
                    <option disabled selected value>
                      Velg forfatter....
                    </option>
                    <option value="Lars Larsen">Lars Larsen</option>
                    <option value="Gunn Gundersen">Gunn Gundersen</option>
                    <option value="Simen Simensen">Simen Simensen</option>
                  </select>
                  <Label>Kategori</Label>
                  <section>
                    <select name="category" onChange={updateValue}>
                      <option disabled selected value>
                        Velg kategori....
                      </option>
                      {cats?.data?.data?.map((e, key) => (
                        <option key={key} value={e._id}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <button type="button">Legg til kategori</button>
                  </section>
                  <button type="submit">Send inn artikkel</button>
                </form>
              </FormContainer>
              {imageModal && (
                <ImageModal
                  modal={imageModal}
                  updateModal={updateImageModal}
                  setState={setState}
                />
              )}
            </>
          );
        }
        <ErrorMessage>
          Du må være administrator eller forfatter for å skrive artikler. Du er
          en {user.user.role}. Stringify: {JSON.stringify(user)}
        </ErrorMessage>;
      })()}
    </>
  );
};
export default MiniCMS;
