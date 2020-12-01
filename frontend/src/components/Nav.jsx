import styled from 'styled-components';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = styled.nav`
    width:100%;
    margin-bottom: 60px:
`;
const NavList = styled.ul`
    list-style:none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    & > li {
        float: right;
        display: block;
        padding: 15px;
        font-size: 18pt;
        border-right: 1px solid black;
        text-decoration: none;
    }
    & > li > a{
        color: black;
        text-decoration: none;
    }
`;

const Nav = () => (
    <Navbar>
        <NavList>
            <li>Logg inn</li>
            <li>
                <NavLink exact to="/articles" activeClassName="active">
                    Fagartikler
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/offices" activeClassName="active">
                    Kontorer
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/" activeClassName="active">
                    Hjem
                </NavLink>
            </li>
        </NavList>
    </Navbar>
);

export default Nav;