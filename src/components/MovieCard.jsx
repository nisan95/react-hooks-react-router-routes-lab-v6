import {Link} from 'react-router-dom';

function MovieCard({title,id,info}) {
  
  return (
    <article>
        {/* What should go here? */}
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}>{info}</Link>
    </article>
  );
};

export default MovieCard;