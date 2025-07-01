import type { Movie } from '../types';
import './Card.css';

interface Props {
  movie: Movie;
  onClick: () => void;
}

export default function Card({ movie, onClick }: Props) {
  return (
    <div className="movie" onClick={onClick}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div id="p_text">
        <div id="title">{movie.title}</div>
        <div>⭐ {movie.vote_average}</div>
      </div>
    </div>
  );
}
