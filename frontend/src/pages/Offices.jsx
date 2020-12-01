import React from 'react';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';
import { BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
`;

//test data
const data = [
    {
        city:"Fredrikstad",
        offices: [
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        ] 
    },
    {
    city:"Sarpsborg",
        offices: [
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        ]
    },
]


const  Offices = () => 
(
    <>
      <StyledWelcome>
        <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Våre Kontorer</Heading>
      </StyledWelcome>

    <div className="office-btns">
        <button>Filter</button>
        <button><BsFillGridFill/></button>
        <button><GiHamburgerMenu/></button>
    </div>
     
      {data.map((city) => 
        <div className="office-city">
            <h1>{city.city} ({city.offices.length} kontorer) </h1>
            <div className="office-container">
            {city.offices.map((office) => 
                <div className="office">
                    <p><b>{office.name}</b><br/>
                    {office.Address}<br/>
                    {office.phone}<br/>
                    {office.email}</p>
                </div>
             )
            }
        </div>
        </div>
      )
    }
    </>
);

export default Offices;
