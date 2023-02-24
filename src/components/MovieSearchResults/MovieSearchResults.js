import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieService} from "../../services";
import {moviesActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import './MovieSearchResults.scss'
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

const MovieSearchResults = () => {

    const {handleSubmit, register} = useForm()
    const dispatch = useDispatch()
    const {searchMovies} = useSelector(state => state.movies)
    const  {results} = searchMovies

    const[query, setQuery] = useSearchParams({query:'', page:'1'})

    const search = async (nameToSearch) => {
        await dispatch(moviesActions.search(nameToSearch.search))
        localStorage.setItem('movieName', nameToSearch)
    }

    const movieName = localStorage.getItem('movieName')

    useEffect(() => {
        dispatch(moviesActions.search({query: movieName, page: query.get('page')}))
    }, [movieName, dispatch, query]);

    return (
        <div className={'movie-grid'}>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input placeholder={'Пошук'} {...register('search')} />
                </div>
                <div>
                    {results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
            </form>
        </div>
    );
};

export {
    MovieSearchResults
};