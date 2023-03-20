import React from "react";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";


export const MovieList = ({ movieList, linkTo }) => {
    const location = useLocation();

    return (
        <div>
            {movieList.map(({ title, id }) => (
                <li key={id}>
                    <div to={`${linkTo ?? ''}${id}`} state={{ from: location }}>
                        {title}
                    </div>
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