import { useParams } from "react-router-dom";

export const Cast = () => {
    const { movieId } = useParams();
    return <div>Movies: {movieId}</div>;
};