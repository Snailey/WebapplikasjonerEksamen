import React, { useState, useEffect } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { list } from '../utils/office.js';
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

/*
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
*/

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
  const [offices, setOffices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list();
      if (!data.success) {
        console.log('error getting data from db');
      } else {
        setOffices(data.data);
      }
    };
    fetchData();
  });

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
        <CityHeader>By antall kontorer</CityHeader>
        <OfficeCity displayType={displayType}>
          {offices &&
            offices
              .filter((city) => city.city.includes(search))
              .map((city) => (
                <OfficeContainer displayType={displayType}>
                  <>
                    {displayType === 'list' && (
                      <OfficeListNumber>{city.index + 1}</OfficeListNumber>
                    )}
                    <p>
                      <Link to={`/offices/${city._id}`}>
                        <b>{city.name}</b>
                      </Link>
                    </p>
                    <p>{city.Address}</p>
                    <p>{city.phone}</p>
                    <a href={`mailto:${city.email}`}>{city.email}</a>
                  </>
                </OfficeContainer>
              ))}
        </OfficeCity>
      </OfficeBodyContainer>
    </>
  );
}

export default Offices;
