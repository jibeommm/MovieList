// /src/types/index.ts
export interface Media {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface Movie extends Media {
  genre_ids?: number[];
}
