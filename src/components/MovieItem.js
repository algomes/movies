import React from 'react';

const MovieItem = ({title, onClickMovie}) => {
    return (
        <button onClick={() => onClickMovie(title)} >{title}</button>
    )
}

export default MovieItem;