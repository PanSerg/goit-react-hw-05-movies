import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "services/api";

export function Cast () {
    const { castId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getMovieCast() {
            const movieCast = await fetchMovieCast(castId);
            setCast(movieCast);
        }
        getMovieCast();
    }, [castId]);

    return (
      <div>
        {cast.length ? (
          <p>Error</p>
        ) : (
          <ul>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                {/* <img
                  src={} alt={}
                /> */}
                    <h3>{name}</h3>
                    <p>Character: </p>
                    <p>{character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};