import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/office.js';
import {
  StyledWelcome,
  OfficeGridNoBorder,
  EmployeeContainer,
  OfficeBodyContainer,
} from '../styles/StyledComponents';

/*
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

*/
function Office() {
  const [office, setOffice] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await get(id);
      if (!data.success) {
        console.log('error getting data from db');
      } else {
        setOffice(data.data);
      }
    };
    fetchData();
  });
  return (
    <>
      <StyledWelcome>
        <p>Kontor {office && office.name}</p>
      </StyledWelcome>
      <OfficeBodyContainer>
        <h1>Velkommen til {office && office.name}</h1>
        <p>{office && office.description}</p>
        <br />
        <h1>Våre ansatte</h1>
        <EmployeeContainer>
          {office &&
            office.employees.map((employee) => (
              <OfficeGridNoBorder>
                <img
                  src={employee.image}
                  alt="Bilde av Rørlegger"
                  width="128"
                  height="128"
                />
                <p>employee.name</p>
                <p>employee.position</p>
              </OfficeGridNoBorder>
            ))}
        </EmployeeContainer>
      </OfficeBodyContainer>
      <StyledWelcome>
        <p>Kontakt oss på {office && office.phone}</p>
      </StyledWelcome>
    </>
  );
}

export default Office;

/*
 
*/
