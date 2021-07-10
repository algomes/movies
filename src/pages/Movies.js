import './Movies.scss';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getFilms } from '../redux/actions/filmsActions';

const Movies = () => {
    const clickMovie = React.useCallback(
        (movieTitle) => {
            alert(movieTitle);
        },
        [],
    );

    const dispatch = useDispatch();
    const movies = useSelector(state => state.filmsReducer.films);
    
    useEffect(() => {
        dispatch(getFilms());
    }, [dispatch]);

    return (
        <div className="movies-grid">
            {
                movies && movies.map(movie => {
                    return <button key={movie.episode_id} onClick={() => clickMovie(movie.title)} >{movie.title}</button>
                })
            }
        </div>
    );
}

export default Movies;
