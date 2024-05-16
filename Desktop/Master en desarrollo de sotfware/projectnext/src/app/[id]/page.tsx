import { getMovie } from "@/utils/API";
import { Movie } from "@/utils/Interfaces/Movies";

type Props = {
    params: {id: string} 
} 


export default async function OneMovie ({params}: Props) {

    const id = params?.id;
    const movies: Movie = await getMovie(id);
    
    console.log("Movie:", movies);

  return (
    <>
      <div>
        <h1>{movies.name}</h1>
        <img src={movies.image} alt={movies.name}/>
        <div>
          <h3>Sinopsis</h3>
          <p>{movies.sinopsis}</p>
        </div>
      </div>
      <h1>soy una pelicula
      </h1>
    </>
  );
}  