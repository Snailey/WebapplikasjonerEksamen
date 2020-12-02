import React, { useState }from 'react';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';
import Select from 'react-select';
import { BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

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
            id: 1,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 2,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 3,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 4,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 5,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 6,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 7,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"fredrikstad1@epost.no"
        },
        {
            id: 8,
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
            id: 11,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            id: 12,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            id: 13,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            id: 14,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        {
            id: 15,
            name:"Rørlegger 1",
            Address:"Rørleggerveien 1",
            phone:"69 99 00 00",
            email:"sarpsborg1@epost.no"
        },
        ]
    },
]

const filterData = [
    {
      value: " ",
      label: "Alle"
    },
    {
      value: "Fredrikstad",
      label: "Fredrikstad"
    },
    {
      value: "Sarpsborg",
      label: "Sarpsborg"
    },
    {
      value: "Moss",
      label: "Moss"
    },
    {
      value: "Oslo",
      label: "Oslo"
    },
  ];


function  Offices() { 
const [view, setView] = useState(false);
const [search, setSearch] = useState(" ");

const updateView = (data) => {
    setView(data)
  }

  const handleChange = e => {
    setSearch(e.value);
  }
 

return( 
<>
    <StyledWelcome>
        <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Våre Kontorer</Heading>
    </StyledWelcome>

    <div className="office-btns">
        
        <Select className="office-filter-btn"
                placeholder="Filter"
                value={filterData.find(obj => obj.value === search)} 
                options={filterData} 
                onChange={handleChange}
                />
            
        <button className="office-grid-btn" onClick={() => updateView(true)}><GiHamburgerMenu/></button>
        <button className="office-grid-btn" onClick={() => updateView(false)}><BsFillGridFill/></button>
    </div>
    <div>
    {view || (
        data.map((city) => 
            <div className="office-city">
                <h1>{city.city} ({city.offices.length} kontorer) </h1>
                <div className="office-container">
                    {city.offices.map((office) => 
                    <Link to={"/offices/" + office.id}>
                        <div className="office-grid">
                            <p><b>{office.name}</b><br/>
                            {office.Address}<br/>
                            {office.phone}<br/></p>
                            <a href={office.email}>{office.email}</a>
                        </div>
                    </Link>
                    )}
                </div>
            </div>   
        ))}
        {!view || (
        data.map((city) => 
        <div className="office-city">
            <h1>{city.city} ({city.offices.length} kontorer) </h1>
            <div>
                {city.offices.map((office, index) => 
                <div className="office-list">
                    <Link to={"/offices/" + city.id}>
                        <div className="office-list-number">{index}</div>
                        <p><b>{office.name}</b></p>
                        <p>{office.Address}</p>   
                        <p>{office.phone}</p>
                        <a href={office.email}>{office.email}</a>
                    </Link>
                    </div>
                    )}
                </div>
            </div>    
        ))}
    </div>
</>
)
}

export default Offices;
