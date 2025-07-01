import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
      .then(reponse => reponse.json())
      .then(data => setMovies(data));
    },[]);

  return (
    <>
      <header>
        {/* What component should go here? */}
        
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        <ul>
          {movies.map((movie)=> <li key={movie.id}><MovieCard title={movie.title} id={movie.id} info={"/View Info/"}/></li> )}
        </ul>
      </main>
    </>
  );
};

export default Home;
