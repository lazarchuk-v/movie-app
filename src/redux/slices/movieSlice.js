import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    error:null,
    loading:null
}

const moviesSlice = createSlice({
        name: 'movieSlice',
        initialState,
        reducers: {
            getAll:(state, action)=>{
                state.movies = action.payload
              },
            search:(state, action) =>{
                state.movies = action.payload
            }
        }
    }
)

const {reducer:moviesReducer, actions:{getAll, search}} = moviesSlice

const moviesActions ={
    getAll,
    search
}

export {
    moviesReducer,
    moviesActions
}