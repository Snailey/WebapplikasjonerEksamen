import styled from 'styled-components';
import Select from 'react-select';

// NAV
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#333' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    float: right;
    display: block;
    padding: 15px;
    font-size: 18pt;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #bfc2c5;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

// HEDDER
export const StyledWelcome = styled.section`
  display: block;
  width: 100%;
  background-color: #f0f5f5;
  padding: 6em;
  margin: auto;
  display: flex;
  justify-content: center;

  p {
    font-size: 4rem;
    font-weight: bold;
  }
`;

// FOOTER
export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;

  & > p {
    margin: 1rem;
  }
`;

// HOME
export const MainGrid = styled.div`
  width: 100%;
  padding: 5rem 5rem;
`;

export const MainColumn = styled.div`
  grid-gap: 5rem;
  display: grid;
  grid-template-areas:
    'office contact'
    'article article';
  grid-template-rows: 500px;
  grid-template-columns: 1fr 2fr;
`;

export const Office = styled.div`
  grid-area: office;
  background-color: #f0f5f5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Contact = styled.div`
  grid-area: contact;
  background-color: #f0f5f5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Article = styled.div`
  grid-area: article;
  background-color: #f0f5f5;
  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
`;

// OFFICES
export const OfficeCity = styled.ul`
  ${(props) =>
    props.displayType === 'grid'
      ? `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style-type:none;
`
      : `
  display: table;
  list-style-type: none;
  border-collapse:separate; 
  border-spacing:0 25px; 
  width: 60%;
`};
`;

export const OfficeContainer = styled.li`
  ${(props) =>
    props.displayType === 'grid'
      ? `
     padding: 3rem;
     border: 1px solid black;
     margin: 1.5rem;
     min-width: 15rem;
     max-width: 15rem;
     `
      : `display: table-row;
      
      & > * {
        padding: 1em;
        display: table-cell;
    } 
     `};
`;

export const OfficeGrid = styled.section`
  border: solid 1px black;
  width: 20rem;
  margin-top: 2rem;
  margin-left: 3rem;
  padding: 1rem;
`;
export const OfficeGridNoBorder = styled.section`
  width: 10rem;
  margin-top: 2rem;
  margin-left: 3rem;
  padding: 1rem;
`;

export const OfficeListNumber = styled.section`
  text-align: center;
  vertical-align: middle;
  height: 2rem;
  width: 2rem;
  background-color: #000000;
  color: #ffffff;
`;

export const CityHeader = styled.h1`
  margin-left: 1.4em;
`;

export const OfficeButtonsContainer = styled.section`
  display: inline-block;
  float: right;
`;
export const OfficeViewButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
`;
export const OfficeFilterButton = styled(Select)`
  background-color: #f0f5f5;
  border: none;
  width: 120px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
`;

export const FilterButtonContainer = styled.section`
  padding: 2.3rem;
  display: inline-block;
`;
export const EmployeeContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`;

export const OfficeBodyContainer = styled.section`
  padding-left: 2rem;
`;

// ARTICLE
export const ArticleBodyContainer = styled.section`
  max-width: 1000px;
  margin: auto;
`;

export const ArticleBtnContainer = styled.section`
  display: inline-block;
  display: flex;
`;

export const ArticleSearchBtnContainer = styled.section`
  margin-left: auto;
  margin-right: 0;
`;

export const ArticleSearchBtn = styled.button`
  background-color: #f0f5f5;
  border: none;
  width: 10rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 2rem;
  margin-top: 5rem;
`;

export const ArticleNewBtn = styled.button`
  background-color: #0a8181;
  color: #ffffff;
  border: none;
  width: 10rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 5rem;
`;

export const ArticleContainer = styled.section`
  display: inline-block;
  display: flex;
`;

export const ArticleImageContainer = styled.section`
  margin-right: 2rem;
  margin-top: 2rem;
`;

export const ArticleHeader = styled.section`
  display: inline-block;
  display: flex;
  margin-top: 0.5rem;
`;
export const ArticleDateContainer = styled.section`
  margin-left: auto;
  margin-right: 0;
`;

export const ArticleCategory = styled.section`
  margin-left: auto;
  margin-right: 0;
`;

export const ArticleDeleteBtn = styled.button`
  background-color: #e01621;
  color: #ffffff;
  border: none;
  width: 10rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 3rem;
  margin-bottom: 5rem;
  margin-right: 2rem;
`;

export const ArticleEditBtn = styled.button`
  background-color: #4d8135;
  color: #ffffff;
  border: none;
  width: 10rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

// FORM
export const FormContainer = styled.section`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormGroup = styled.section`
  color: black;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  color: black;
  border: 1px solid black;
  border-radius: 3px;
  width: 300px;
  height: 2rem;
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: red;
  display: block;
`;

export const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  width: 300px;
  margin: auto;
`;
export const StyledExpandingTextArea = styled.textarea`
  width: 90%;
  rows: ${(props) => props.rows || '10'};
  line-height: ${(props) => props.lineheight || '20'}px;
`;
export const TextArea = styled.textarea`
  color: black;
  border: 1px solid black;
  border-radius: 3px;
  width: 300px;
  height: 500px;
  margin-bottom: 0.5em;
`;

export const CenterH2 = styled.h2`
  margin: auto;
  text-align: 'center';
`;

export const StyledModal = styled.section`
  position: fixed;
  z-index: 11;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(155, 138, 138, 0.4);
`;

export const ModalContents = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: #fefefe;
  padding: 0;
  border: 1px solid #888;
  width: 15%;
`;

export const ModalHeader = styled.section`
  padding: 0.3rem;
  display: inline-block;
  margin: 0px;
  box-shadow: 0 4px 3px -3px grey;
  width: 100%;
  max-height: 30px;
  margin-bottom: 10px;
  & > button {
    padding: 0;
    float: right;
  }

  & > p {
    float: left;
    padding: 0;
    margin: 0;
    margin-left: 12px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export const ModalFormContainer = styled.section`
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;

  padding: 0.5rem;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;

  & > label {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0px;
  }
`;
