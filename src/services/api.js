import axios from "axios";

const BASE_URL = 'https://api-rocket-movie.herokuapp.com/'

export const api = axios.create({
  baseURL: BASE_URL
})