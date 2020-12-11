import { React, useContext, useState } from 'react';
import ExpandingTextArea from '../components/ExpandingTextarea';
import ImageModal from '../components/ImageModal';
import { Context } from '../contexts/GlobalStateContext';
import {
  StyledWelcome,
  Label,
  Input,
  FormContainer,
  ErrorMessage,
} from '../styles/StyledComponents';

const MiniCMS = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    ingress: '',
    image: '',
    cateogry: '',
  });
  const [imageModal, setImageModal] = useState(false);
  const [user] = useContext(Context);
  const updateImageModal = (data) => {
    setImageModal(data);
  };
  const handleSubmit = async (event) => {
    let valuesSet = true;
    event.preventDefault();
    // for (const key in state)
    Object.keys(state).forEach((key) => {
      if (`${key}` !== 'image' && !key) valuesSet = false;
    });
    alert(valuesSet);
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
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
                  <button type="button" onClick={() => updateImageModal(true)}>
                    Last opp bilde..
                  </button>
                  <Label>Forfatter</Label>
                  <select onChange={updateValue} name="author">
                    <option disabled selected value>
                      Velg forfatter....
                    </option>
                    <option>Lars Larsen</option>
                    <option>Gunn Gundersen</option>
                    <option>Simen Simensen</option>
                  </select>
                  <Label>Kategori</Label>
                  <section>
                    <select
                      name="category"
                      onChange={updateValue}
                      placeholder="Velg kategori"
                    >
                      <option>standby</option>
                    </select>
                    <button type="button">Legg til kategori</button>
                  </section>
                </form>
                <button type="submit">Send inn artikkel</button>
              </FormContainer>
              {imageModal && (
                <ImageModal modal={imageModal} updateModal={updateImageModal} />
              )}
            </>
          );
        }
        <ErrorMessage>
          Du må være administrator eller forfatter for å skrive artikler. Du er
          en {user.user.role}.
        </ErrorMessage>;
      })()}
    </>
  );
};
export default MiniCMS;
