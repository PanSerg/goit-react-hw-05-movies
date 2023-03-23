import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { Title } from 'pages/Home/Home.styled';
import { Container, Section } from './MovieDetails.styled';
import { Image } from './MovieDetails.styled';
import { Wrapper } from 'components/Wrapper/Wrapper.styled';
import { MovieCard } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { Loading } from 'components/Loading/Loading';

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
    <Wrapper>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <Section>
        <MovieCard>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : `https://via.placeholder.com/250x375`
            }
            alt={`${title}`}
          />

          <Container>
            <Title>{`${title} ${year}`}</Title>
            <p>Use Score: {`${Math.round(vote_average * 10)}`}%</p>
            <h3>Overview</h3>
            <p>{`${overview}`}</p>
            <h3>Genres</h3>
            {genres && <p>{genres.map(name => name).join(' ')}</p>}
          </Container>
        </MovieCard>
      </Section>
      <Section>
        <h3>Addition information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Section fallback={<Loading />}>
        <Outlet />
      </Section>
    </Wrapper>
  );
};

export default MovieDetails;
