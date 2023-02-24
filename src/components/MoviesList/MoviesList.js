import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './MoviesList.scss'
import {moviesActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {movieService} from "../../services";


const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    useEffect(() => {
        movieService.getPopular().then(({data})=>dispatch(moviesActions.getAll(data.results)))
    }, []);

    return (
        <div className={'movie-grid'}>
            <div className={'movies'}>
                 {movies.map(movie=><MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    MoviesList
};