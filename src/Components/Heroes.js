import { ListGroup } from 'react-bootstrap';
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

const heroesState = state => state.hero.heroes

const Heroes = props => {
    const heroes = useSelector(heroesState);
    console.log(heroes)
    return (
        <> 
            { Array.isArray(heroes) ?
            <>
            {heroes.length > 0 && `Results: ${heroes.length}`}
            {heroes.map(hero=> 
            <ModLink to={{
                pathname: "/hero",
                state: {
                    hero
                }
            }}>
                <ListGroup>
                    <ListItem>{hero.name}</ListItem>
                </ListGroup>
            </ModLink>   )} 
            </> : <Text><h5>{heroes}</h5></Text>}
        </>
    )
}
export default Heroes