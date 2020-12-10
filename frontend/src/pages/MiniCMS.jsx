import { React, useContext } from 'react';
import ExpandingTextArea from '../components/ExpandingTextarea';
import { Context } from '../contexts/GlobalStateContext';
import {
  StyledWelcome,
  Label,
  Input,
  FormContainer,
  ErrorMessage,
} from '../styles/StyledComponents';

const MiniCMS = () => {
  const [user] = useContext(Context);

  return (
    <>
      {!user ? (
        <ErrorMessage>
          Vennligst logg inn for å se ny artikkel CMSet
        </ErrorMessage>
      ) : (
        <>
          <StyledWelcome>
            <p>Ny Artikkel</p>
          </StyledWelcome>
          <FormContainer>
            <form>
              <Label>Tittel</Label>
              <Input placeholder="Skriv din tittel her" />
              <Label>Ingress</Label>
              <Input placeholder="Skriv ingressen her" />
              <Label>Innhold</Label>
              <ExpandingTextArea />
              <Label>Forfatter</Label>
              <select>
                <option disabled selected value>
                  Velg forfatter....
                </option>
                <option>Lars Larsen</option>
                <option>Gunn Gundersen</option>
                <option>Simen Simensen</option>
              </select>
              <Label>Kategori</Label>
              <section>
                <select placeholder="Velg kategori">
                  <option>standby</option>
                </select>
                <button type="button">Legg til kategori</button>
              </section>
            </form>
            <button type="submit">Send inn artikkel</button>
          </FormContainer>
        </>
      )}
    </>
  );
};
export default MiniCMS;
