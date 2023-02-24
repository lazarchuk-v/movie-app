
import React, {useEffect, useState} from 'react';
import './SearchBar.scss'
import {movieService} from "../../services";
import {MovieSearchResults} from "../MovieSearchResults/MovieSearchResults";


const SearchBar = () => {
    const [query, setQuery] = useState();
    const [search, setSearch] = useState([]);


    function handleSearch(e) {
        e.preventDefault()
        fetch(movieService.getSearch(query))
        .then(value => value.json())
        .then(value => setSearch)
   }

    return (
        <div className={'search-block'}>
            <form className={'search-form'} onSubmit={handleSearch}>
                <input onChange={(e)=> setQuery(e.target.value)} />
                <button className={'search-button'}>Пошук</button>
            </form>

        </div>
    );
};

export {
    SearchBar
};
