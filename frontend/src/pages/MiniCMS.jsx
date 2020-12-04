import {
  StyledWelcome,
  Label,
  Input,
  FormContainer,
} from '../styles/StyledComponents';

const MiniCMS = () => (
  <>
    <StyledWelcome>
      <h1>Ny Artikkel</h1>
    </StyledWelcome>
    <FormContainer>
      <form>
        <Label>Tittel</Label>
        <Input placeholder="Skriv din tittel her" />
        <Label>Ingress</Label>
        <Input placeholder="Skriv ingressen her" />
        <Label>Innhold</Label>
        <textarea></textarea>
      </form>
    </FormContainer>
  </>
);
export default MiniCMS;
