import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [] = useSearchParams();
    
    useEffect(() => {
  
  }, []);

    return (
        <div>
            {[].map(film => {
                return (
                    <div key={film} to={`${film}`}>
                     {film}
                    </div>
                );
            })}
        </div>
    );
};

export default Movies;
