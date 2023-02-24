import React from 'react';

import './Home.scss'
import MovieSearch, {SearchBar} from "../SearchBar/SearchBar";
import {MovieSearchResults} from "../MovieSearchResults/MovieSearchResults";

const Home = () => {
    return (
        <div className={'home'}>
            <div className={'search-bar'}>
            <SearchBar/>
            </div>
        </div>
    );
};

export {
    Home
};