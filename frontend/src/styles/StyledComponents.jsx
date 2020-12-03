import React from 'react'
import styled from 'styled-components'
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
    
    & > p{
        margin: 1rem;
    }
`
// OFFICES
export const OfficeCity = styled.ul`
${props => (props.displayType === 'grid' ? `
    display: grid;
    grid-template-columns: repeat(4, 20%);
    list-style-type:none;
` : 
  `
  display: table;
  list-style-type: none;
  border-collapse:separate; 
  border-spacing:0 25px; 
  width: 60%;
`)};
`;

export const OfficeContainer = styled.li`
     ${props => (props.displayType === 'grid' ? `
     padding: 3rem;
     border: 1px solid black;
     margin: 1.5rem;
     ` : 
     `display: table-row;
      
      & > * {
        padding: 1em;
        display: table-cell;
    } 
     `)};

    
`;
export const OfficeGrid = styled.section`
    border: solid 1px black;
    width: 20rem;
    margin-top: 2rem;
    margin-left: 3rem;
    padding: 1rem;
`
export const OfficeGridNoBorder = styled.section`
    width: 10rem;
    margin-top: 2rem;
    margin-left: 3rem;
    padding: 1rem;
`

export const OfficeListNumber = styled.section`
    text-align: center;
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
    background-color: #000000;
    color: #ffffff;
`

export const CityHeader = styled.h1`
    margin-left: 1.4em;
`

export const OfficeButtonsContainer = styled.section`
    display:inline-block; 
    float: right;
`
export const OfficeViewButton = styled.button`
    background-color: #ffffff; 
    border: none;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
`
export const OfficeFilterButton = styled(Select)`
    background-color:#f0f5f5; 
    border: none;
    width: 120px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
`

export const FilterButtonContainer = styled.section`
  background-color:#f0f5f5; 
  padding: 2.3rem;
  display: inline-block;

`
export const EmployeeContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`

export const OfficeBodyContainer = styled.section`
  padding-left: 2rem; 
`

//ARTICLE
export const ArticleBodyContainer = styled.section`
  width: 1000px;
  margin: auto; 
`

export const ArticleBtnContainer = styled.section`
  display:inline-block;
  display: flex;
`

export const ArticleSearchBtnContainer = styled.section`
  margin-left:auto; margin-right:0;
`

export const ArticleSearchBtn = styled.button`
  background-color:#f0f5f5; 
  border: none;
  width: 10rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 2rem;
  margin-top: 5rem;
`

export const ArticleNewBtn = styled.button`
  background-color:#0a8181; 
  color: #ffffff;
  border: none;
  width: 10rem;
  height: 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 5rem;
`

export const ArticleContainer = styled.section`
  display:inline-block;
  display: flex;
`

export const ArticleImageContainer = styled.section`
  margin-right: 2rem;
  margin-top: 2rem;
`

export const ArticleHeader = styled.section`
  display:inline-block;
  display: flex;
  margin-top: .5rem;
`

export const ArticleCategory = styled.section`
  margin-left:auto; margin-right:0;
`
