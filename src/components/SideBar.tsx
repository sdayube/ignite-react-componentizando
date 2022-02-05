import { GenreResponseProps } from '../App';
import { Button } from '../components/Button';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  const { genres, selectedGenreId, setSelectedGenreId } = props;

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
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