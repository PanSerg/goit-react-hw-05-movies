import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
   
    useEffect(() => {
        // useState()
        // isLoading
        // Error
       }, [movieId]);

    return (
      <div>
        <div to={backLinkRef.current}>Go back</div>
        <section>
          <div>
            {/* <img src={ } alt={ } /> */}
          </div>
        </section>
        
      </div>
    );
};

export default MovieDetails;