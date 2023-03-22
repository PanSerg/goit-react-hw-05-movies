import React from "react";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { MoviesList } from "./MovieList.styled";
import { LinkStyled } from "./MovieList.styled";


export const MovieList = ({ movieList, linkTo }) => {
    const location = useLocation();

    return (
        <MoviesList>
            {movieList.map(({ title, id }) => (
                <li key={id}>
                    <LinkStyled to={`${linkTo ?? ''}${id}`} state={{ from: location }}>
                        {title}
                    </LinkStyled>
                </li>
            ))}
        </MoviesList>
    );
};

MovieList.propTypes = {
    movieList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ),
    linkTo: PropTypes.string
}