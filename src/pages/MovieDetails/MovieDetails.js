import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieById } from "services/api";
// import { Image, MovieCard, Meta, Title } from '';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const year = new Date(release_date).getFullYear();
   
    useEffect(() => {
      async function getMovieDetails() {
        try {
          const filmDetails = await fetchMovieById(movieId);
          setMovie(filmDetails);
        } catch (error) {
          console.log('error', error);
          }
      }
      getMovieDetails();
       }, [movieId]);

    return (
      <div>
        <div to={backLinkHref.current}>Go back</div>
        <section>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : `https://via.placeholder.com/250x375`
              }
              alt={`${title}`}
            />

            <div>
              <div>{`${title} ${year}`}</div>
              <p>Use Score: {`${Math.round(vote_average * 10)}`}%</p>
              <h3>Overview</h3>
              <p>{`${overview}`}</p>
              <h3>Genres</h3>
              {genres && <p>{genres.map(name => name).join(' ')}</p>}
            </div>
          </div>
        </section>
        <section>
          <h3>Addition information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="review">Review</Link>
            </li>
          </ul>
        </section>

      </div>
    );
};

export default MovieDetails;