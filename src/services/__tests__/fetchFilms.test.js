import axios from 'axios';
import fetchFilms from '../fetchFilms';

jest.mock('axios');
 
describe('fetchData', () => {
  test('fetches successfully data from an API', async () => {
    const data = [{name: 'Movie#1'}, {name: 'Movie#2'}];
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
 
    return expect(fetchFilms()).resolves.toEqual(data);
  });
});