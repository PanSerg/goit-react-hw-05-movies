import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "services/api";
import PropTypes from 'prop-types';

export function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getMovieReviews() {
            const movieCast = await fetchMovieCast(movieId);
            setReviews(movieCast);
        }
        getMovieReviews();
    }, [movieId]);

    return (
        <div>
            {!reviews.length ? (
                <p>We don`t have any reviews for this movie</p>
            ) : (
                <div>
                    {reviews.map(({ author, id, content }) => (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </div>
            )}
        </div>);
};

Reviews.propTypes = {
    to: PropTypes.string.isRequired
}