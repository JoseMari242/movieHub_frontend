

import { getMovie } from "@/utils/Function";
import { Movie } from "@/utils/Interfaces/Movies";
import dotenv from 'dotenv';

dotenv.config();

type Props = {
  params: { id: string }
};

export default async function OneMovie({ params }: Props) {
  const id = params?.id;

  try {
    const response = await getMovie(id);
    const movie: Movie = response;

    if (!movie) {
      return <div>Movie not found</div>;
    }

    return (
      <div>
        <h1>{movie.name}</h1>
        <img src={movie.image} alt={movie.name} />
        <div>
          <h3>Sinopsis</h3>
          <p>{movie.sinopsis}</p>
          <p>Score: {movie.score}</p>
        </div>
        <h1>soy una pelicula</h1>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch movie", error);
    return <div>Error fetching movie data</div>;
  }
}
