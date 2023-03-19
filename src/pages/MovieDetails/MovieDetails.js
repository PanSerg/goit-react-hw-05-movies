import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState, Link } from "react";

const MovieDetails = () => {
    const {filmId} = useParams();
   
    useEffect(() => {
        // useState()
        // isLoading
        // Error
       }, []);

    return (
      <>
        <h1> Trending: {filmId}</h1>
        <ul>
          <li>
            <Link t0="subbreds">Жанры</Link>
          </li>
          <li>
            <Link to="gallery">Галерея</Link>
          </li>
            </ul>
            <Outlet/>
      </>
    );
};

export default MovieDetails;