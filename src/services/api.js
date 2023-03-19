import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: 'ad18c129b2412cb77d4a3538879c83fc'
};

export async function fetchTrending() {
    const response = await axios.get(`/trending/movie/day`);
    return response.date.results;
};

export async function fetchMovieByName(query) {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data.results;
};

