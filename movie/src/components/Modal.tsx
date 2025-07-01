// /src/components/Modal.tsx
import type { Movie } from '../types';
import './Modal.css';

interface Props {
  movie: Movie;
  onClose: () => void;
}

export default function Modal({ movie, onClose }: Props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>❌</span>
        <div className="modal-info">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div id="title">{movie.title}</div>
          <div>개봉일 : {movie.release_date}</div>
          <div>평점 : ⭐{movie.vote_average}</div>
          <div className='overview'>줄거리 | {movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
