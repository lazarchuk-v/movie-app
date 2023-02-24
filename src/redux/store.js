import {combineReducers} from "redux";
import {moviesReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";
import {searchMoviesSlice} from "./slices/searchMoviesSlice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    searchMovies: searchMoviesSlice.reducer,

})

const setupStore = () => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}