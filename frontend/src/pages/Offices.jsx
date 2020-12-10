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

const filterData = [
  {
    value: 'Alle',
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
  const [search, setSearch] = useState('Alle');
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
  }, []);

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
        {search === 'Fredrikstad' || search === 'Alle' ? (
          <>
            <CityHeader>Fredrikstad - 8 kontorer</CityHeader>
            <OfficeCity displayType={displayType} search={search}>
              {offices &&
                offices
                  .filter((city) => city.city.includes('Fredrikstad'))
                  .map((city, index) => (
                    <OfficeContainer displayType={displayType}>
                      <>
                        {displayType === 'list' && (
                          <OfficeListNumber>{index + 1}</OfficeListNumber>
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
          </>
        ) : null}
        {search === 'Sarpsborg' || search === 'Alle' ? (
          <>
            <CityHeader>Sarpsborg - 5 kontorer</CityHeader>
            <OfficeCity displayType={displayType}>
              {offices &&
                offices
                  .filter((city) => city.city.includes('Sarpsborg'))
                  .map((city, index) => (
                    <OfficeContainer displayType={displayType}>
                      <>
                        {displayType === 'list' && (
                          <OfficeListNumber>{index + 1}</OfficeListNumber>
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
          </>
        ) : null}
        {search === 'Moss' || search === 'Alle' ? (
          <>
            <CityHeader>Moss - 4 kontorer</CityHeader>
            <OfficeCity displayType={displayType}>
              {offices &&
                offices
                  .filter((city) => city.city.includes('Moss'))
                  .map((city, index) => (
                    <OfficeContainer displayType={displayType}>
                      <>
                        {displayType === 'list' && (
                          <OfficeListNumber>{index + 1}</OfficeListNumber>
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
          </>
        ) : null}
        {search === 'Oslo' || search === 'Alle' ? (
          <>
            <CityHeader>Oslo - 4 kontorer</CityHeader>
            <OfficeCity displayType={displayType}>
              {offices &&
                offices
                  .filter((city) => city.city.includes('Oslo'))
                  .map((city, index) => (
                    <OfficeContainer displayType={displayType}>
                      <>
                        {displayType === 'list' && (
                          <OfficeListNumber>{index + 1}</OfficeListNumber>
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
          </>
        ) : null}
      </OfficeBodyContainer>
    </>
  );
}

export default Offices;

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
