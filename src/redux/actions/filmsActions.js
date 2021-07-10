import { GET_FILMS } from './actionTypes';
import fetchFilms from '../../services/fetchFilms';
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
