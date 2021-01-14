import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    align-items: flex-end;
    height: fit-content;
    margin: 1rem 0;
`
const ButtonMod = styled(Button)`
    margin-left: 1rem;
    height: fit-content;
`
const FormMod = styled(Form.Group)`
    margin: 0;
    flex:3; 
`


const FormComponent = () => {
    return( 
        <Form>
            <h4>Star Wars Searcher</h4>
            <Flex>
                <FormMod>
                    <Form.Control type="text" placeholder="Find Star Wars Hero" />
                </FormMod>
                <ButtonMod variant="primary" type="submit">Search</ButtonMod>
            </Flex>
        </Form>
    )
}

export default FormComponent;