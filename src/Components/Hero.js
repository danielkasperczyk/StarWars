import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import Loader from './Loader';
import { transformToUppercase } from '../features/helpers';

const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;

    button {
        font-size: 0.8rem;
        align-self: flex-start;
        margin-top: 1rem;
    }
    h1{
        font-size: 2rem;
        margin-bottom: 1rem;;
    }
    p {
        font-size: 12px;
    }
`

const Item = styled(ListGroup.Item)`
    background-color: #d1d1d1;
    color: #3b3b3b;
    display: flex;
    width: 50vw;
    max-width: 300px;
    justify-content: space-between;
    font-size: 0.8rem;
    p{ margin: 0}
`

const  Hero =  props => {
    let hisotry = useHistory();
    const {name, height, mass, skin_color, hair_color, gender, homeworld } = props.location.state.hero
    const [planetName, setPlanetName ] = useState('')
    const [loader, hideLoader] = useState(true);
    
    useEffect(async () => {
        async function getPlanetName(){
            const planet = await axios.get(homeworld)
            setPlanetName(planet.data.name);
        }
        await getPlanetName();
        hideLoader(false);
    }, [])

    function backToHome() {
        hisotry.push('/')
    }
    console.log(height, mass);
    return(
        <div>
            {loader && <Loader />}
            { planetName !== '' && 
            <>
                <Flex>
                    <h1>{name}</h1>
                <ListGroup>
                    <Item>
                        <p>Height</p>
                        {(height !==  'n/a' && height !==  'unknown')? <p>{transformToUppercase(height)} cm</p> : <p>Unknown</p> }
                    </Item>
                    <Item>
                        <p>Mass</p>
                        {(mass !==  'n/a' && mass !== 'unknown') ? <p>{transformToUppercase(mass)} kg</p> : <p>Unknown</p> }
                    </Item>
                    <Item>
                      <p>Skin color</p> 
                      {skin_color !==  'n/a' ? <p>{transformToUppercase(skin_color)}</p> : <p>Unknown</p> } 
                    </Item>
                    <Item>
                        <p>Hair color</p>
                        {hair_color !==  'n/a' ? <p>{transformToUppercase(hair_color)}</p> : <p>Unknown</p> }
                    </Item>
                    <Item>
                        <p>Gender</p>
                        {gender !==  'n/a' ? <p>{transformToUppercase(gender)}</p> : <p>Unknown</p> }
                    </Item>
                    <Item>
                        <p>Planet</p>
                        {planetName !==  'n/a' ? <p>{transformToUppercase(planetName)}</p> : <p>Unknown</p> }
                    </Item>
                </ListGroup>
                <Button     
                    type="button"
                    variant="link"
                    onClick={backToHome}>
                        Home Page
                </Button>
                </Flex>
            </>}
        </div>
    )
}

export default Hero;