import axios from 'axios'

import {baseURL} from "../api";

const axiosService = axios.create({
    baseURL
})

export {
    axiosService
}