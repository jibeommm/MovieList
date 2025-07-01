import type { Movie } from '../types';
import Card from './Card';
import './List.css';

interface Props {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function List({ movies, onSelect }: Props) {
  return (
    <div id="movie_list">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} onClick={() => onSelect(movie)} />
      ))}
    </div>
  );
}
