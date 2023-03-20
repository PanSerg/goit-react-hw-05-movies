import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/api';

const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchQuery, setSearchQuery] = useSearchParams();
    
    useEffect(() => {
        const query = searchQuery.get('query');
        async function getFilmsByName() {
            const filmsByName = await fetchMovieByName(query);
            setMovieList(filmsByName);
        }

        getFilmsByName();
    }, [searchQuery]);
    
    function handleSearchInput(query){
        const nextQuery = query !== '' ? { query } : {};
        setSearchQuery(nextQuery);
    }

    return (
        <div>
            <span handleSearchInput={handleSearchInput}></span>
            <span movieList={movieList}></span>
        </div>
    );
};

export default Movies;
