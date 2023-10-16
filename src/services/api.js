import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI2NzM2NDE0YjQyOThhMjhhNTBjMWI4ODEzZTlhNiIsInN1YiI6IjY1MjU2Y2UzNDQ3ZjljMDBhZDcxNDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rEsMXUCTlrOZG7wX4q7BjxLIzMsf9BEzSeowZL4e8g';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BASE_URL,
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_KEY,
  },
});

export async function fetchMovies(endpoint, parameters = {}) {
  try {
    const resp = await instance.get(endpoint, { params: { ...parameters } });
    return resp.data;
  } catch (err) {
    console.log(err);
  }
}
