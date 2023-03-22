import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { fetchMovieCast } from "services/api";
import { ReviewSec } from "./Reviews.styled";

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
                <ReviewSec>
                    {reviews.map(({ author, id, content }) => (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ReviewSec>
            )}
        </div>);
};

Reviews.propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}