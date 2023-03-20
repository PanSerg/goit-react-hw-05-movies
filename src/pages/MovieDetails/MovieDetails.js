import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieById } from "services/api";
import { MovieCard } from '';
import { Image } from '';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
   
    useEffect(() => {
      async function getMovieDetails() {
        try {
          const filmDetails = await fetchMovieById(movieId);
          setMovie(filmDetails);
        } catch (error) {
          console.log('error', error);
          }
        }
       }, [movieId]);

    return (
      <div>
        <div to={backLinkRef.current}>Go back</div>
        <section>
          <MovieCard>
            <Image src={
              poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : `https://via.placeholder.com/250x375`}
              alt={`${title}`} />
          </MovieCard>
        </section>
        
      </div>
    );
};

export default MovieDetails;