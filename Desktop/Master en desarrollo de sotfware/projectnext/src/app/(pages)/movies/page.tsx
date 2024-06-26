
import { getData } from "@/utils/Function";
import { Movie } from "@/utils/Interfaces/Movies";
import Link from "next/link";

export default async function Movies() {
  try {
    const getMovies = await getData();

    return (
      <>
        <h1 className="title">Películas</h1>
        <Link href="/api/auth/logout">
        <button className="title-button">Logout</button>
      </Link>
        
        <Link href="/movies/new">
          <button>New Movie</button>
        </Link>
        <div>
          {getMovies?.data.map((event: Movie) => {
            return (
              <div key={event.id}>
                <p>
                  <Link href={String(event.id)}>{event.id}</Link>
                </p>
                <h2>{event.name}</h2>
                <img src={event.image} alt={event.name} />
                <p>Score: {event.score}</p>
                <p>
                  Genre:{" "}
                  {event.genre.map((genre) => genre.genre.name).join(", ")}
                </p>
                <p>Sinopsis: {event.sinopsis}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  } catch (error) {
    console.log("NO API MOVIES", error);
  }
}




