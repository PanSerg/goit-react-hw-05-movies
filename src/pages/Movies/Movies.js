import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/api';
import { MovieList, SearchMovie, Wrapper } from 'components';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  useEffect(() => {
    const query = searchQuery.get('query');
    if (!query) {
      return;
    }
    async function getFilmsByName() {
      const filmsByName = await fetchMovieByName(query);
      setMovieList(filmsByName);
    }

    getFilmsByName();
  }, [searchQuery]);

  function handleSearchInput(query) {
    const nextQuery = query !== '' ? { query } : {};
    setSearchQuery(nextQuery);
  }

  return (
    <Wrapper>
      <SearchMovie handleSearchInput={handleSearchInput}></SearchMovie>
      <MovieList movieList={movieList} />
    </Wrapper>
  );
};

export default Movies;
