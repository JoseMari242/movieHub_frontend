import { getData } from "@/utils/API";
import { Movie } from "@/utils/Interfaces/Movies";

import Link from "next/link";

export default async function Movies() {
  try {
    const getMovies = await getData();

    return (
      <>
        <h1 className="title">Películas</h1>

        <div>
          {getMovies?.data.map((event: Movie) => (
            <div key={event.id}>
                <p>
                    <Link href={String (event.id)}>{event.id}</Link>
                </p>
              <h2>{event.name}</h2>
              <img src={event.image} alt={event.name} />
              <p>Score: {event.score}</p>
              <p>Genre: {event.genre.join(', ')}</p>
              <p>Sinopsis: {event.sinopsis}</p>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.log("NO API MOVIES", error);
  }
}





