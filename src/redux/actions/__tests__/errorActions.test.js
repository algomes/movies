import { API_CALL_ERROR } from '../actionTypes';
import { setError } from '../errorActions';

describe('myAction', () => {
    test('should return correct action payload', () => {
        const result = setError('An error has ocurred');
        expect(result.payload).toEqual('An error has ocurred');
    })

    test('should return correct action type', () => {
        const result = setError('An error has ocurred');
        expect(result.type).toEqual(API_CALL_ERROR);
    })
});