import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { GenreResponseProps } from "./entities/GenreResponseProps";
import { MovieProps } from "./entities/MovieProps";
import { api } from "./services/api";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        setSelectedGenreId={setSelectedGenreId}
        genres={genres}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  );
}
