import { createSlice } from '@reduxjs/toolkit';

export const heroesSlice = createSlice({
    name: 'heroes',
    initialState: {
        heroes: []
    },
    reducers: {
        setHeroes: (state, action) => {
            state.heroes = action.payload
        },
    }
});

export const { setHeroes } = heroesSlice.actions

export const addHeroes = heroes => dispatch => {
    dispatch(setHeroes(heroes));
}

export const selectHeroes = state => state.heroes;

export default heroesSlice.reducer