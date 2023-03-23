import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { fetchMovieReviews } from "services/api";
import { ReviewSec } from "./Reviews.styled";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getMovieReviews() {
            const movieReview = await fetchMovieReviews(movieId);
            setReviews(movieReview);
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
        </div>
    );
};

Reviews.propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}