import { Button } from "./Button";
import { GenreResponseProps } from "../entities/GenreResponseProps";

import "../styles/sidebar.scss";

interface SideBarProps {
  setSelectedGenreId: (id: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export function SideBar({
  setSelectedGenreId,
  selectedGenreId,
  genres,
}: SideBarProps) {
  // Complete aqui

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
