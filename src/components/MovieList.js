import { useParams } from "react-router-dom";

export const MovieList = () => {
    const { filmId } = useParams();
    return <div>Gallery films: {filmId}</div>
}