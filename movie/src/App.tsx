import './App.css';
import { useState, Suspense, lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Movie } from './types';
import Header from './components/Header';
import Modal from './components/Modal';

const List = lazy(() => import('./components/List'));

const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';

async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });
  const data = await res.json();
  return data.results;
}

export default function App() {
  const [selectMovie, setSelectMovie] = useState<Movie | null>(null);

  const { data: movies = [], isLoading, isError, error } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  if (isLoading) return <div className="loading">로딩 중...</div>;
  if (isError) return <div className="error">에러 발생: {(error as Error).message}</div>;

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className="loading"> 영화 리스트 불러오는 중...</div>}>
        <List movies={movies} onSelect={setSelectMovie} />
      </Suspense>
      {selectMovie && <Modal movie={selectMovie} onClose={() => setSelectMovie(null)} />}
    </div>
  );
}
