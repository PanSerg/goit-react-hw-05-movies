import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  useEffect(() => {}, []);

    return (
        <div>
            {['film-1', 'film-2', 'film-3'].map(film => {
                return (
                    <Link key={film} to={`${film}`}>
                     {film}
                    </Link>
                );
            })}
        </div>
    );
};

export default Search;
