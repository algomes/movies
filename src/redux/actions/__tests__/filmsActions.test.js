import { GET_FILMS } from '../actionTypes';
import configureMockStore from 'redux-mock-store'
import { getFilms } from '../filmsActions';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  test('should dispatch actions of ConstantA and ConstantB', () => {
    const expectedAction = [
        GET_FILMS
    ]

    const store = mockStore({})

    return store.dispatch(getFilms())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedAction)
     })

  })
})
