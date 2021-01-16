import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setHeroes, addHeroes } from '../features/heroes/heroesSlice';


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
    const [text, setText] = useState('');
    const dispatch = useDispatch(); 
    const BASE = 'https://swapi.dev/api/people/?search='
    const submitHandler = async e => {
        e.preventDefault();
        const res = await axios.get(`${BASE}${text}`);
        const results = await res.data.results
        const data = results.length !== 0 ?  results : 'No Characters Found';
        console.log(data);

        setText('');
        dispatch(addHeroes(data));
    }

    return( 
        <Form onSubmit={submitHandler}>
            <Flex>
                <FormMod>
                    <Form.Control 
                        type="text" 
                        placeholder="Find Star Wars Hero" 
                        value={text}
                        onChange={e=> setText(e.target.value)}/>
                </FormMod>
                <ButtonMod variant="dark" type="button">Search</ButtonMod>
            </Flex>
        </Form>
    )
}

export default FormComponent;