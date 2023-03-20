import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { MovieList } from 'components/MovieList';
import { Title } from './Home.styled';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        const trendingFilms = await fetchTrending();
        setMovieList(trendingFilms);
      } catch (error) {
        console.log('error', error);
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MovieList movieList={movieList} linkTo="movies/" />
    </div>
  );
};

export default Home;
