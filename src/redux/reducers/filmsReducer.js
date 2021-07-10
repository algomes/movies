import { GET_FILMS } from '../actions/actionTypes';

const initialState = { films: [] }

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {
                films: action.payload 
            }
        default:
            return state;
    }
}

export default filmsReducer;