import React, { useState } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {
  OfficeFilterButton,
  OfficeButtonsContainer,
  OfficeCity,
  OfficeContainer,
  OfficeListNumber,
  CityHeader,
  OfficeViewButton,
  StyledWelcome,
  FilterButtonContainer,
  OfficeBodyContainer,
} from '../styles/StyledComponents';

const data = [
  {
    city: 'Fredrikstad',
    offices: [
      {
        id: 1,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 2,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 3,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 4,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 5,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 6,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 7,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 8,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
    ],
  },
  {
    city: 'Sarpsborg',
    offices: [
      {
        id: 11,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'sarpsborg1@epost.no',
      },
      {
        id: 12,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'sarpsborg1@epost.no',
      },
      {
        id: 13,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'sarpsborg1@epost.no',
      },
      {
        id: 14,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'sarpsborg1@epost.no',
      },
      {
        id: 15,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'sarpsborg1@epost.no',
      },
    ],
  },
  {
    city: 'Moss',
    offices: [
      {
        id: 21,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'moss1@epost.no',
      },
      {
        id: 22,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'moss1@epost.no',
      },
      {
        id: 23,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'moss1@epost.no',
      },
      {
        id: 24,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'moss1@epost.no',
      },
    ],
  },
  {
    city: 'Oslo',
    offices: [
      {
        id: 31,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'oslo1@epost.no',
      },
      {
        id: 32,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'oslo1@epost.no',
      },
      {
        id: 33,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'oslo1@epost.no',
      },
      {
        id: 34,
        name: 'Rørlegger 1',
        Address: 'Rørleggerveien 1',
        phone: '69 99 00 00',
        email: 'oslo1@epost.no',
      },
    ],
  },
];

const filterData = [
  {
    value: '',
    label: 'Alle',
  },
  {
    value: 'Fredrikstad',
    label: 'Fredrikstad',
  },
  {
    value: 'Sarpsborg',
    label: 'Sarpsborg',
  },
  {
    value: 'Moss',
    label: 'Moss',
  },
  {
    value: 'Oslo',
    label: 'Oslo',
  },
];

function Offices() {
  const [search, setSearch] = useState('');
  const [displayType, setDisplayType] = useState('grid');

  const updateView = (isList) => {
    if (isList) setDisplayType('list');
    else setDisplayType('grid');
  };

  const handleChange = (e) => {
    setSearch(e.value);
    console.log(search);
  };

  return (
    <>
      <StyledWelcome>
        <p>Våre Kontorer</p>
      </StyledWelcome>
      <OfficeButtonsContainer>
        <FilterButtonContainer>
          <OfficeFilterButton
            placeholder="Filter"
            value={filterData.find((obj) => obj.value === search)}
            options={filterData}
            onChange={handleChange}
          />
        </FilterButtonContainer>
        <OfficeViewButton onClick={() => updateView(true)}>
          <GiHamburgerMenu />
        </OfficeViewButton>
        <OfficeViewButton onClick={() => updateView(false)}>
          <BsFillGridFill />
        </OfficeViewButton>
      </OfficeButtonsContainer>
      <OfficeBodyContainer>
        {data
          .filter((city) => city.city.includes(search))
          .map((city) => (
            <>
              <CityHeader>
                {city.city} ({city.offices.length} kontorer){' '}
              </CityHeader>
              <OfficeCity displayType={displayType}>
                {city.offices.map((office, index) => (
                  <OfficeContainer displayType={displayType}>
                    <>
                      {displayType === 'list' && (
                        <OfficeListNumber>{index}</OfficeListNumber>
                      )}
                      <p>
                        <Link to={`/offices/${office.id}`}>
                          <b>{office.name}</b>
                        </Link>
                      </p>
                      <p>{office.Address}</p>
                      <p>{office.phone}</p>
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </>
                  </OfficeContainer>
                ))}
              </OfficeCity>
            </>
          ))}
      </OfficeBodyContainer>
    </>
  );
}

export default Offices;
