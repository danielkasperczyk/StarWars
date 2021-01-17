import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const Flex = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`


const Loader = props => {
    return(
        <Flex>
            <Spinner animation="border" variant="dark" />            
        </Flex>
    )
}

export default Loader;