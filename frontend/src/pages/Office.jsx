import React from 'react';
import { Heading } from '@chakra-ui/core';
import {
  StyledWelcome,
  OfficeGridNoBorder,
  EmployeeContainer,
  OfficeBodyContainer,
} from '../styles/StyledComponents';

const data = {
  name: 'Rørlegger 1',
  city: 'Fredrikstad',
  phone: '69 99 00 00',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
    'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
    'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
    'amet',
  employees: [
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
    {
      name: 'Ansatt Ansattesen',
      position: 'Stilling',
      image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
    },
  ],
};

function Office() {
  return (
    <>
      <StyledWelcome>
        <p>Kontor Rørlegger Nummer</p>
      </StyledWelcome>
      <OfficeBodyContainer>
        <h1>Velkommen til {data.name}</h1>
        <p>{data.description}</p>
        <br />
        <h1>Våre ansatte</h1>
        <EmployeeContainer>
          {data.employees.map((employee) => (
            <OfficeGridNoBorder>
              <img
                src={employee.image}
                alt="Bilde av Rørlegger"
                width="128"
                height="128"
              />
              <p>{employee.name}</p>
              <p>{employee.position}</p>
            </OfficeGridNoBorder>
          ))}
        </EmployeeContainer>
      </OfficeBodyContainer>
      <StyledWelcome>
        <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">
          Kontakt oss på {data.phone}
        </Heading>
      </StyledWelcome>
    </>
  );
}

export default Office;
