import axios from "axios";

const FILMS_API = 'https://swapi.dev/api/films';

export default async function fetchFilms() {
    return axios.get(FILMS_API);
}