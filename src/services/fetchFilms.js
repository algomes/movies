import axios from "axios";

const FILMS_API = 'https://swapi.dev/api/films';
const LUKE_FILMS = 'https://swapi.dev/api/people/1';

export const fetchFilms = async () => {
    return axios.get(FILMS_API);
}

export const fetchLukeSkywalkerFilms = async () => {
    return axios.get(LUKE_FILMS);
}