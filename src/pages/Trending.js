import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Trending = () => {
    const {filmId} = useParams();
   
    useEffect(() => {
        // useState()
        // isLoading
        // Error
           
       }, []);

    return <div>Trending: {filmId}</div>;
};

export default Trending;