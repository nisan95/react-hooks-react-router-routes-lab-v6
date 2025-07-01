import { useEffect, useState } from "react";

function Actors() {
  const [acteurs, setActeurs]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
      .then(reponse => reponse.json())
      .then(data => setActeurs(data));
    },[]);

  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {
          acteurs.map((acteur)=>{
            return(
              <article key={acteur.id}>
                <h2>{acteur.name}</h2>
                <ul>
                  {acteur.movies.map((movie)=><li key={movie}>{movie}</li>)}
                </ul>
              </article>
            )
          })
        }
      </main>
    </>
  );
};

export default Actors;
