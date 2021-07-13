import './Movies.scss';

import React, { useEffect, useState } from "react";
import { getFilms, getLukeSkywalkerFilms } from '../redux/actions/filmsActions';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '../components/MovieItem';

const Movies = () => {

    const [mainFigures, setMainFigures] = useState([]);

    const clickMovie = React.useCallback(
        (movieTitle) => {
            alert(movieTitle);
        },
        [],
    );

    const dispatch = useDispatch();
    const movies = useSelector(state => state.filmsReducer.films);
    const lukeFilms = useSelector(state => state.filmsReducer.lukeFilms);
    
    useEffect(() => {
        findMainFigures();
    }, [movies]);

    useEffect(() => {
        dispatch(getFilms());
    }, [dispatch]);

    const showLukeMovies = (id) => {
        dispatch(getLukeSkywalkerFilms(id));
    }

    const countOcurrences = (value, objectOcurrences) => {
        objectOcurrences[value] == null 
            ? objectOcurrences = { ...objectOcurrences, [`${value}`]: 1 }
            : objectOcurrences[value] += 1;
    
        return objectOcurrences;
    }

    const findMainFigures = () => {
        let figuresMap = {};
        let foundFigures = [];

        movies.forEach(film => {
            film.characters.map(c => figuresMap = countOcurrences(c,figuresMap)) 
        })

        const greater = Object.values(figuresMap).reduce((final, value) => final > value ? final : value, 0);

        for (const [key, value] of Object.entries(figuresMap)) {
            if(value === greater) foundFigures = [...foundFigures, key];
        }

        setMainFigures(foundFigures);
    }

    return (
        <div className="movies-grid">
            <div className="filter">
                <button onClick={showLukeMovies}>Show Luke Skywalker Films</button>
            </div>
            {
                movies && movies.map(movie => {
                    return <MovieItem key={movie.episode_id} title={movie.title} onClickMovie={() => clickMovie(movie.title)} /> 
                    // <button key={movie.episode_id} onClick={() => clickMovie(movie.title)} >{movie.title}</button>
                })
            }
             <div>
                <p>Luke Skywalker Films: </p>
                {
                    lukeFilms && lukeFilms.map(luke => {
                        return <MovieItem key={luke.episode_id} title={luke.title} onClickMovie={() => clickMovie(luke.title)} /> 
                        // return <li key={figure}>{figure}</li>
                    })
                }
            </div>
            <div>
                <p>Main figures: </p>
                {
                    mainFigures && mainFigures.map(figure => {
                        return <li key={figure}>{figure}</li>
                    })
                }
            </div>
        </div>

    );
}

export default Movies;
