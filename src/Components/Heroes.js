import React, { useState } from 'react'
import { ListGroup, Form, FormGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModLink = styled(Link)`
    color: #343a40;
    text-decoration: none;
    transition: color 250ms;
    &:hover{
        color: #FFE81F;
        text-decoration: none;
    }
`
const ListItem = styled(ListGroup.Item)`
    font-size: 1rem;
    margin: 0.5rem 0;
    transition: background-color 250ms;
    &:hover {
        background-color: #343a40
    }
`

const Text = styled.div`
    width: 100%;
    margin-top: 4rem;
    text-align: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items:  center;
    justify-content: space-between;
    p { margin: 0;}
`

const FormSelect = styled(Form.Group)`
    margin: 0;
    padding: 0.2rem;
    outline:  #343a40;
`


const heroesState = state => state.hero.heroes

const Heroes = props => {
    const heroes = useSelector(heroesState);
    const [selected, setSelected] = useState('All');
    const [results, countResults] = useState(0);

    const filterByGender = hero => {
        const { gender } = hero

        if(selected.toUpperCase() === "ALL") {
            return hero
        } 
        else if(selected.toUpperCase() === "UNKNOWN"){
            const check = gender === 'n/a' ? true : false;
            return check === true && hero;
        }
        else {
            const check = gender.toUpperCase() === selected.toUpperCase() ? true : false;
            return check === true && hero;
        }
    }
    console.log(heroes);
    const filteredArray = Array.isArray(heroes)  ? heroes.filter(hero => filterByGender(hero)) : null;

    return (
        <> 
            { (Array.isArray(heroes) && heroes.length > 0) ?
            <>
            <Container>
                <p>{filteredArray.length !== 0 && `Results: ${filteredArray.length}`}</p>
                <FormSelect 
                    as="select" 
                    onChange={e => setSelected(e.target.value)}
                    value={selected}>
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unknown</option>
                </FormSelect>
            </Container>
            
            {filteredArray.map(hero=> 
            <ModLink to={{
                pathname: "/hero",
                state: {
                    hero
                }
            }}>
                <ListGroup>
                    <ListItem>{hero.name}</ListItem>
                </ListGroup>
            </ModLink>)} 
            </> : <Text><h5>{heroes}</h5></Text>}
        </>
    )
}
export default Heroes