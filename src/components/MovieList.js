import React from "react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";


export const MovieList = ({ movieList, linkTo }) => {
    const location = useLocation();

    return (
        <div>
            {movieList.map(({ title, id }) => (
                <li key={id}>
                    <Link to={`${linkTo ?? ''}${id}`} state={{ from: location }}>
                        {title}
                    </Link>
                </li>
            ))}
        </div>
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