import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModLink = styled(Link)`
    margin-left: 1rem;
    color: #FFE81F;
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover,&:active,&:focus {
        text-decoration: none;
        color: #FFE81F;
    }
    h5, p {
        margin: 0;
    }
`
const Logo = styled.div`
    
`

const NavbarComponenet = props => {
    return (
        <Navbar bg="dark" variang="dark">
            <ModLink to="/">
                <h5>Star Wars</h5>
                <p>SEARCHER</p>
            </ModLink>
        </Navbar>
    )
}

export default NavbarComponenet;