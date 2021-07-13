import { GET_FILMS, GET_LUKE_FILMS } from './actionTypes';
import { fetchFilms, fetchLukeSkywalkerFilms } from '../../services/fetchFilms';

import { setError } from './errorActions';

export function getFilms(){
    return async function getFilms(dispatch) {
        try{
            const films = await fetchFilms();
            dispatch({ type: GET_FILMS, payload: films.data.results });
        }catch(_) {
            dispatch(setError("An error has ocurred, try again later."));
        }
    }
}

export function getLukeSkywalkerFilms() {
    return async function getLukeSkywalkerFilms(dispatch) {
        try {
            const films = await fetchLukeSkywalkerFilms();
            dispatch({ type: GET_LUKE_FILMS, payload: films.data});
        } catch (error) {
         dispatch(setError("Cannot get Luke Skywalker films"));   
        }
    }
}
