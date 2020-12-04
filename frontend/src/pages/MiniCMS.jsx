import {
  StyledWelcome,
  Label,
  Input,
  FormContainer,
  TextArea,
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
        <TextArea />
      </form>
    </FormContainer>
  </>
);
export default MiniCMS;
