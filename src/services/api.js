import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: 'ad18c129b2412cb77d4a3538879c83fc'
};

export async function fetchTrending() {
    const response = await axios.get(`/trending/movie/day`);
    return response.data.results;
};

export async function fetchMovieByName(query) {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data.results;
};

export async function fetchMovieById(id) {
    const response = await axios.get(`/movie/${id}`);
    return response.data;
};

export async function fetchMovieCast(id) {
    const response = await axios.get(`/movie/${id}/credits`);
    const cast = response.data.cast;
    return cast;
};

export async function fetchMovieReviews(id) {
    const response = await axios.get(`/movie/${id}/reviews`);
    const cast = response.data.results;
    return cast;
}