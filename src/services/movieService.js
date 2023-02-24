import {axiosService} from "./axios";
import {apiTMDB} from "../api";

const movieService = {
    getPopular:()=> axiosService.get(apiTMDB.movies.popular),
    getTopRated:()=>axiosService.get(apiTMDB.movies.top_rated),
    getUpcoming:()=>axiosService.get(apiTMDB.movies.upcoming),
    getSearch:(query)=>axiosService.get(apiTMDB.search.movie(query))
}

export {
    movieService
}