import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "services/api";
import PropTypes from 'prop-types';
import { CastList, Character, PhotoActor } from "./Cast.styled";
import { Actor } from "./Cast.styled";
import { NameActor } from "./Cast.styled";

export function Cast () {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getMovieCast() {
            const movieCast = await fetchMovieCast(movieId);
            setCast(movieCast);
        }
        getMovieCast();
    }, [movieId]);

    return (
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <Actor key={id}>
              <PhotoActor
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : `https://via.placeholder.com/250x375`
                }
                alt={name}
              />
              <NameActor>{name}</NameActor>
              <Character>Character: </Character>
              <Character>{character}</Character>
            </Actor>
          ))}
        </CastList>
    );
};

Cast.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};