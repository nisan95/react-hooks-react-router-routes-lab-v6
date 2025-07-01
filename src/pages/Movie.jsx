import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const[Movie, setMovie]=useState({});
  useEffect(()=> {
    fetch("http://localhost:4000/movies/"+id)
      .then(reponse => reponse.json())
      .then(data => setMovie(data));
  },[]);

  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{Movie.title}</h1>
        <p>{Movie.time}</p>
        {
          /*Movie.genres && Movie.genres.map((genre) => <span key={genre}>{genre}</span>)*/
        }
      </main>
    </>
  );
};

export default Movie;
