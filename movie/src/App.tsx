// /src/App.tsx
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Movie } from './types';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';

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
      <List movies={movies} onSelect={setSelectMovie} />
      {selectMovie && <Modal movie={selectMovie} onClose={() => setSelectMovie(null)} />}
    </div>
  );
}
