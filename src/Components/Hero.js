import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import Loader from './Loader';
import { transformToUppercase, fetchData, returnObj } from '../features/helpers';

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
    let location = useLocation();
    // const {name, height, mass, skin_color, hair_color, gender, homeworld } = props.location.state.hero
    const [planetName, setPlanetName ] = useState('')
    const [loader, hideLoader] = useState(true);
    const [hero, setHero] = useState();
    
    useEffect(() => {
        if(!hero){
            async function getHeroData(){
                const { pathname } = location;
                const loc = pathname.slice(pathname.indexOf('hero/')).replace('hero/', '').replace(/-/g, ' ');
                
                const data = await fetchData(loc);
                const temp =  (typeof data === "object") ? returnObj(data[0]) : data;
                setHero(temp);
            }
            getHeroData();
            hideLoader(false);
        }
    }, [hero])
    

    function backToHome() {
        hisotry.push('/')
    }

    async function getPlanetName(){
        if(hero){
            const href = hero[6].slice(0, 4) + "s";
            const newHref = href.concat(hero[6].slice(4));
            const planet = await axios.get(newHref)
            planet && setPlanetName(planet.data.name);   
        }
       
    }
    getPlanetName();
    return(
        <div>
            {loader && <Loader />}
            { ((typeof hero !== "string") && hero !== undefined)? 
                <Flex>
                    <h1>{hero[0]}</h1>
                    <ListGroup>
                        <Item>
                            <p>Height</p>
                            {(hero[1] !==  'n/a' && hero[1] !==  'unknown')? <p>{transformToUppercase(hero[1])} cm</p> : <p>Unknown</p> }
                        </Item>
                        <Item>
                            <p>Mass</p>
                            {(hero[2] !==  'n/a' && hero[2] !== 'unknown') ? <p>{transformToUppercase(hero[2])} kg</p> : <p>Unknown</p> }
                        </Item>
                        <Item>
                        <p>Skin color</p> 
                        {hero[3] !==  'n/a' ? <p>{transformToUppercase(hero[3])}</p> : <p>Unknown</p> } 
                        </Item>
                        <Item>
                            <p>Hair color</p>
                            {hero[4] !==  'n/a' ? <p>{transformToUppercase(hero[4])}</p> : <p>Unknown</p> }
                        </Item>
                        <Item>
                            <p>Gender</p>
                            {hero[5] !==  'n/a' ? <p>{transformToUppercase(hero[5])}</p> : <p>Unknown</p> }
                        </Item>
                        <Item>
                            <p>Planet</p>
                            {planetName !==  'n/a' ? <p>{transformToUppercase(planetName)}</p> : <p>Unknown</p> }
                        </Item>
                    </ListGroup>
                </Flex >
            : <Flex>
                <h3>{hero}</h3>    
            </Flex>}
            <Flex>
                <Button     
                    type="button"
                    variant="link"
                    onClick={backToHome}>
                        Home Page
                </Button>
            </Flex>
        </div>
    )
}

export default Hero;