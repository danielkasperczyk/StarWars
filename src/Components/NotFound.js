import React from 'react';
import  { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Flex = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const NotFound = props => {
    const hisotry = useHistory();

    const backHome = () => {
        hisotry.push('/')
    }

    return (    
        <Flex>
            <h3>Page Not Found</h3>
            <Button 
                type="button"
                onClick={backHome}
                variant="link">
                    Back Home
            </Button>
        </Flex>
    )
}

export default NotFound;