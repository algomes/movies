import { API_CALL_ERROR } from './actionTypes';

export function setError(error) {
    return { type: API_CALL_ERROR, payload: error }
}
