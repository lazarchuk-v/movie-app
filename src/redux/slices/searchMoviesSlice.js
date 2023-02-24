import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {apiKey, languageISOCode} from "../../api";

export const searchMoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        searchQuery: '',
        searchResults: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setSearchResults,
    setIsLoading,
    setError,
} = searchMoviesSlice.actions;

export const searchMovies = (query) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));

        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${languageISOCode}&query=${query}&page=1&include_adult=false`
        );

        dispatch(setSearchResults(response.data.results));
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setIsLoading(false));
    }
};

export default searchMoviesSlice.reducer;