import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from './Home.styled';
import { Wrapper } from 'components';

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
    <Wrapper>
      <Title>Trending today</Title>
      <MovieList movieList={movieList} linkTo="movies/" />
    </Wrapper>
  );
};

export default Home;
