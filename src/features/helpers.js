import axios from 'axios';

export function transformToUppercase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function fetchData(name){
    const BASE = 'https://swapi.dev/api/people/?search='

    const res = await axios.get(`${BASE}${name}`);
    const results = await res.data.results
    return results.length !== 0 ?  results : 'No Characters Found';
}

export function returnObj({ name, height, mass, skin_color, hair_color, gender, homeworld }){
    return {
        name, 
        height,
        mass, 
        skin_color,
        hair_color, 
        gender, 
        homeworld
    }
}