import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI2NzM2NDE0YjQyOThhMjhhNTBjMWI4ODEzZTlhNiIsInN1YiI6IjY1MjU2Y2UzNDQ3ZjljMDBhZDcxNDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rEsMXUCTlrOZG7wX4q7BjxLIzMsf9BEzSeowZL4e8g';
const BASE_URL = 'https://api.themoviedb.org/3/';

// const params = {
//   page: 1,
//   per_page: 20,
// };

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_KEY,
  },
});
//functions
//read
export async function fetchMovies(endpoint, params = {}) {
  try {
    const resp = await instance.get(endpoint, { ...params });
    return resp.data;
  } catch (err) {
    console.log(err);
  }
}

// const API = { params, fetchMovies };

// export default API;
