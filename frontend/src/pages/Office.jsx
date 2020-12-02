import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';

const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
`;

const data = {
    name:"Rørlegger 1",
    city: "Fredrikstad",
    phone: "69 99 00 00",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt " +
    "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
    "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit " +
    "amet",
    employees: [
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },
        {
            name: "Ansatt Ansattesen",
            position: "Stilling",
            image: "https://www.gamereactor.no/media/65/_1976583.jpg"
        },

    ]
}


function  Office() { 
    
    return( 
    <>
        <StyledWelcome>
            <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Kontor Rørlegger Nummer</Heading>
        </StyledWelcome>
        <div>
            <h1>Velkommen til {data.name}</h1>
            <p>{data.description}</p>
            <br />
            <h1>Våre ansatte</h1>
            <div className="office-container">
                {data.employees.map((employee) =>
                <div className="office-grid-noboarder">
                    <img src={employee.image} alt="Bilde av Rørlegger" width="128" height="128"></img>
                    <p>{employee.name}</p>
                    <p>{employee.position}</p>
                </div>
                )}
            </div>
        </div>
        <StyledWelcome>
                <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Kontakt oss på {data.phone}</Heading>
        </StyledWelcome>
    </>    
    )
}    
    
export default Office;