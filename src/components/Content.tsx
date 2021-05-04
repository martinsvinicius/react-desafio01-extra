import { GenreResponseProps } from "../entities/GenreResponseProps";
import { MovieProps } from "../entities/MovieProps";
import "../styles/content.scss";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <Header  selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
