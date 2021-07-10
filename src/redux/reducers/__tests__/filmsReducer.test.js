import { GET_FILMS } from '../../actions/actionTypes';
import filmsReducer from '../filmsReducer';

test('should return films in payload', () => {
    const mock = {
        type: GET_FILMS,
        payload: [ { episode_id: 1, title: 'Title'}]
    }
    const state = { films: [] };

    var result = filmsReducer(state, mock);
    expect(result.films).toEqual(mock.payload);
});
