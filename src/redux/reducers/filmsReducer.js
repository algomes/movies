import { GET_FILMS, GET_LUKE_FILMS } from '../actions/actionTypes';

const initialState = { films: [], lukeFilms: [] }

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {
                films: action.payload 
            }
        case GET_LUKE_FILMS: {
            const filteredEpisodes = action.payload.films.map(x => x.substring(x.length-1, x.length -2));
            return {
                ...state,
                lukeFilms: state.films.filter(movie => filteredEpisodes.find(epId => +epId === movie.episode_id))
            }
        }
        default:
            return state;
    }
}

export default filmsReducer;