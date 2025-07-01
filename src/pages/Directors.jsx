import { useEffect, useState } from "react";

function Directors() {
  const [realisateurs, setRealisateurs]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
      .then(reponse => reponse.json())
      .then(data => setRealisateurs(data));
    },[]);

  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {
          realisateurs.map((realisateur)=>{
            return(
              <article key={realisateur.id}>
                <h2>{realisateur.name}</h2>
                <ul>
                  {realisateur.movies.map((movie)=><li key={movie}>{movie}</li>)}
                </ul>
              </article>
            )
          })
        }
      </main>
    </>
  );
};

export default Directors;
