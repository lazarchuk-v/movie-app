import {languageISOCode} from "./apiLanguage";
import {apiKey} from "./apiKey";

const languageParam = `&language=${languageISOCode}`
const authParam =  `?api_key=${apiKey}`
const pageParam = (page) => `&page=${page}`
const callbackParam = (name) => `&callback=${name}`

export {
    languageParam,
    authParam,
    pageParam,
    callbackParam
}