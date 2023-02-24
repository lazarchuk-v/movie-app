import {authParam, languageParam} from "./apiParams";

const baseURL = 'https://api.themoviedb.org/3/'

const categories = {
    tv:'tv',
    movie:'movie'
}


const apiTMDB = {
    movies:{
        popular: `${baseURL}${categories.movie}/popular${authParam}${languageParam}`,
        top_rated: `${baseURL}${categories.movie}/top_rated${authParam}${languageParam}`,
        upcoming: `${baseURL}${categories.movie}/upcoming${authParam}${languageParam}`
    },

    singleMovie:(movieId)=>`${baseURL}movie/${movieId}${authParam}${languageParam}`,

    tv: {
        popular: `${baseURL}${categories.tv}/popular${authParam}${languageParam}`,
        top_rated: `${baseURL}${categories.tv}/top_rated${authParam}${languageParam}`,
        on_the_air: `${baseURL}${categories.tv}/on_the_air${authParam}${languageParam}`
    },

    videos: {
        movies: (id) => `${baseURL}${categories.movie}/${id}/videos${authParam}${languageParam}`,
        tv: (id) => `${baseURL}${categories.tv}/${id}/videos${authParam}${languageParam}`
    },

    search: {
        movie:(query)=> `${baseURL}search/movie${authParam}${languageParam}&query=${query}`,
        tv_:(query)=> `${baseURL}search/${categories.tv}/${authParam}${languageParam}&query=${query}`
    },


    details: {
        movieId:(movieId) => `${baseURL}${categories.movie}/${movieId}${authParam}${languageParam}`,
        tvId:(tvId) => `${baseURL}${categories.tv}/${tvId}${authParam}${languageParam}`,
    },

    credits: {
        movies: (id) => `${baseURL}${categories.movie}/${id}/credits${authParam}${languageParam}`,
        tv: (id) => `${baseURL}${categories.tv}/${id}/credits${authParam}${languageParam}`
    },

    similar: {
        movies: (id) => `${baseURL}${categories.movie}/${id}/similar${authParam}${languageParam}`,
        tv: (id) => `${baseURL}${categories.tv}/${id}/similar${authParam}${languageParam}`
    },

    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

    genres:{

    }

}

export {
    baseURL,
    apiTMDB
}