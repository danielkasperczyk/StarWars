import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';



const  Hero =  props => {
    let hisotry = useHistory();
    const {name, height, mass, skin_color, hair_color, gender, homeworld } = props.location.state.hero
    const [planetName, setPlanetName ] = useState('')
    
     useEffect(() => {
        async function getPlanetName(){
            const planet = await axios.get(homeworld)
            setPlanetName(planet.data.name);
        }

        getPlanetName();
    }, [])

    function backToHome() {
        hisotry.push('/')
    }
    
    return(
        <div>
            {/*WHILE FETCHING DATA SHOW LOADER*/}
            { planetName !== '' && 
            <>
                <h1>{name}</h1>
                <ListGroup>
                    <ListGroup.Item>{height !==  'n/a' ? height : 'unknown' }</ListGroup.Item>
                    <ListGroup.Item>{mass !==  'n/a' ? mass : 'unknown' }</ListGroup.Item>
                    <ListGroup.Item>{skin_color !==  'n/a' ? skin_color : 'unknown' }</ListGroup.Item>
                    <ListGroup.Item>{hair_color !==  'n/a' ? hair_color : 'unknown' }</ListGroup.Item>
                    <ListGroup.Item>{gender !==  'n/a' ? gender : 'unknown' }</ListGroup.Item>
                    <ListGroup.Item>{planetName !==  'n/a' ? planetName : 'unknown' }</ListGroup.Item>
                </ListGroup>
            </>}
        </div>
    )
}

export default Hero;