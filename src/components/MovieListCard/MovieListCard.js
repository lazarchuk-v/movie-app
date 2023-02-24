import React from 'react';
import {apiTMDB} from "../../api";
import './MovieListCard.scss'


const MovieListCard = ({movie}) => {


    return (
        <div className={'movieListCard'}>

            {movie.adult && <div className={'adult'}>Adult</div>}

            <div className={'poster'}>
            <img src={apiTMDB.w500Image(movie.poster_path)} alt={movie.title} />
            </div>

            <div className={'title'}>{movie.title}</div>
            <div></div>



        </div>
    );
};

export {
    MovieListCard
};