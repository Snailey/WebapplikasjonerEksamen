import styled from 'styled-components';
import Select from 'react-select';

// HEDDER
export const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
`;

// FOOTER
export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;

  & > p {
    margin: 1rem;
  }
`;
// OFFICES
export const OfficeCity = styled.ul`
  ${(props) =>
    props.displayType === 'grid'
      ? `
    display: grid;
    grid-template-columns: repeat(4, 20%);
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
  background-color: #f0f5f5;
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
  width: 1000px;
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
