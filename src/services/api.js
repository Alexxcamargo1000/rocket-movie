import axios from "axios";

//const BASE_URL = 'https://api-rocket-movie.herokuapp.com/'
const BASE_URL = 'http://localhost:3333/'

export const api = axios.create({
  baseURL: BASE_URL
})